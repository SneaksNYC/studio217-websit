import { NextRequest, NextResponse } from 'next/server'

// Minimal auth route handler to satisfy Next.js routing
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    status: 'auth_route_active',
    message: 'Studio217 auth endpoint'
  })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    status: 'auth_route_active',
    message: 'Studio217 auth endpoint'
  })
}