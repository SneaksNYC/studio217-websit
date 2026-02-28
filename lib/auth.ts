import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { readFileSync } from 'fs'
import { join } from 'path'
import { authConfig } from './auth.config'

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'client'
  active: boolean
  createdAt: string
}

function getUsers(): User[] {
  const filePath = join(process.cwd(), 'lib', 'users.json')
  const raw = readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

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

        const users = getUsers()
        const user = users.find(
          (u) => u.email === credentials.email && u.active
        )

        if (!user) return null

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isValid) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
})
