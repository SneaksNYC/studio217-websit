import { handlers } from '@/lib/auth'
import { getClientIP, rateLimit, createRateLimitResponse, resetRateLimit } from '@/lib/rateLimit'

// Wrap POST handler with rate limiting for authentication attempts
async function rateLimitedPOST(request: Request) {
  const clientIP = getClientIP(request);
  const url = new URL(request.url);
  
  // Only rate limit signin attempts
  if (url.pathname.includes('signin') || url.pathname.includes('callback/credentials')) {
    const result = rateLimit(clientIP, 'auth');
    
    if (!result.success) {
      return createRateLimitResponse(result);
    }
    
    // Call the original handler
    const response = await handlers.POST(request);
    
    // If authentication was successful, reset rate limit
    if (response.ok || response.status === 302) {
      resetRateLimit(clientIP, 'auth');
    }
    
    return response;
  }
  
  // For non-signin requests, use original handler
  return handlers.POST(request);
}

export const GET = handlers.GET;
export const POST = rateLimitedPOST;
