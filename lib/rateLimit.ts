// Rate limiting utility for authentication endpoints
// Prevents brute force attacks and credential stuffing

interface RateLimitEntry {
  count: number;
  resetTime: number;
  blocked: boolean;
}

class InMemoryRateLimit {
  private attempts = new Map<string, RateLimitEntry>();
  
  constructor(
    private maxAttempts = 5,
    private windowMs = 15 * 60 * 1000, // 15 minutes
    private blockDurationMs = 60 * 60 * 1000 // 1 hour
  ) {}

  check(identifier: string): { success: boolean; remaining?: number; resetTime?: number; blocked?: boolean } {
    const now = Date.now();
    const entry = this.attempts.get(identifier);

    // Clean up expired entries
    if (entry && now > entry.resetTime) {
      this.attempts.delete(identifier);
    }

    const currentEntry = this.attempts.get(identifier);

    // Check if currently blocked
    if (currentEntry?.blocked) {
      const blockEndTime = currentEntry.resetTime + this.blockDurationMs;
      if (now < blockEndTime) {
        return { 
          success: false, 
          blocked: true, 
          resetTime: blockEndTime 
        };
      } else {
        // Block expired, reset
        this.attempts.delete(identifier);
      }
    }

    // Check rate limit
    if (!currentEntry) {
      this.attempts.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
        blocked: false
      });
      return { success: true, remaining: this.maxAttempts - 1 };
    }

    if (currentEntry.count >= this.maxAttempts) {
      // Block the identifier
      this.attempts.set(identifier, {
        ...currentEntry,
        blocked: true,
        resetTime: now
      });
      return { 
        success: false, 
        blocked: true, 
        resetTime: now + this.blockDurationMs 
      };
    }

    // Increment attempt count
    currentEntry.count++;
    return { 
      success: true, 
      remaining: this.maxAttempts - currentEntry.count 
    };
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

// Shared rate limiter instances
const authRateLimit = new InMemoryRateLimit(5, 15 * 60 * 1000, 60 * 60 * 1000);
const generalRateLimit = new InMemoryRateLimit(10, 60 * 1000, 5 * 60 * 1000);

// Get client IP address from request
export function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  const remoteAddr = req.headers.get('x-remote-addr');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  return realIP || remoteAddr || 'unknown';
}

// Rate limit middleware for authentication
export function rateLimit(
  identifier: string,
  type: 'auth' | 'general' = 'general'
): { success: boolean; remaining?: number; resetTime?: number; blocked?: boolean } {
  const limiter = type === 'auth' ? authRateLimit : generalRateLimit;
  return limiter.check(identifier);
}

// Reset rate limit for an identifier (e.g., after successful auth)
export function resetRateLimit(
  identifier: string,
  type: 'auth' | 'general' = 'general'
): void {
  const limiter = type === 'auth' ? authRateLimit : generalRateLimit;
  limiter.reset(identifier);
}

// Create rate limit response
export function createRateLimitResponse(
  result: { success: boolean; remaining?: number; resetTime?: number; blocked?: boolean }
): Response {
  if (result.blocked) {
    const resetTime = new Date(result.resetTime!).toISOString();
    return new Response(
      JSON.stringify({ 
        error: 'Account temporarily blocked due to too many failed attempts',
        resetTime,
        type: 'auth_blocked'
      }),
      { 
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': resetTime,
          'Retry-After': Math.ceil((result.resetTime! - Date.now()) / 1000).toString()
        }
      }
    );
  }

  return new Response(
    JSON.stringify({ 
      error: 'Too many requests. Please try again later.',
      type: 'rate_limited'
    }),
    { 
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'X-RateLimit-Limit': '10',
        'X-RateLimit-Remaining': (result.remaining || 0).toString(),
        'Retry-After': '60'
      }
    }
  );
}