import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Studio217 — AI Automation for Travel Agencies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo text */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-2px',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          Studio217
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 500,
            display: 'flex',
          }}
        >
          AI Automation for Travel
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.4)',
            display: 'flex',
          }}
        >
          studio217.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
