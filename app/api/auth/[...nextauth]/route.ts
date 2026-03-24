import { NextRequest, NextResponse } from 'next/server'

// Temporary simplified handler to debug the issue
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Auth endpoint temporarily disabled for debugging' })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Auth endpoint temporarily disabled for debugging' })
}
