import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In — Studio217',
  description: 'Sign in to Studio217, the AI automation platform for travel agencies and tour operators.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
