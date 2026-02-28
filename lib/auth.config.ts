import type { NextAuthConfig } from 'next-auth'

// Edge-compatible auth config (no Node.js APIs)
export const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const pathname = nextUrl.pathname

      // Allow login page
      if (pathname === '/') {
        if (isLoggedIn) return Response.redirect(new URL('/dashboard', nextUrl))
        return true
      }

      // Block unauthenticated
      if (!isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }

      // Admin-only route guard
      const role = (auth?.user as { role?: string })?.role
      if (pathname.startsWith('/clients') && role !== 'admin') {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as { role?: string }).role = token.role as string
        ;(session.user as { id?: string }).id = token.id as string
      }
      return session
    },
  },
}
