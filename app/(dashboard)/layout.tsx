import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/Sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  const user = session.user as {
    name?: string | null
    email?: string | null
    role?: string
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa]">
      <Sidebar
        userName={user.name ?? 'User'}
        userEmail={user.email ?? ''}
        userRole={user.role ?? 'client'}
      />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
