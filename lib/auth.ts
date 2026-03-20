import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { AuthDatabase } from './database'
import { authConfig } from './auth.config'

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'client'
  active: boolean
  createdAt: string
}

// Initialize database connection
const authDb = new AuthDatabase();

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const authResult = await authDb.authenticate(
          credentials.email as string,
          credentials.password as string
        )

        if (!authResult.success || !authResult.user) return null

        return {
          id: authResult.user.id.toString(),
          name: authResult.user.name,
          email: authResult.user.email,
          role: authResult.user.role,
        }
      },
    }),
  ],
})
