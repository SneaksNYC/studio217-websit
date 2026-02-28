'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { LayoutDashboard, Users, FolderOpen, Settings, LogOut } from 'lucide-react'

interface SidebarProps {
  userName: string
  userEmail: string
  userRole: string
}

const navItems = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    roles: ['admin', 'client'],
  },
  {
    href: '/clients',
    label: 'Clients',
    icon: Users,
    roles: ['admin'],
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: FolderOpen,
    roles: ['admin', 'client'],
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: Settings,
    roles: ['admin', 'client'],
  },
]

export default function Sidebar({ userName, userEmail, userRole }: SidebarProps) {
  const pathname = usePathname()

  const visibleItems = navItems.filter((item) =>
    item.roles.includes(userRole)
  )

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <aside className="w-56 flex-shrink-0 flex flex-col bg-white border-r border-[#e4e4e7] h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[#e4e4e7]">
        <span className="text-base font-semibold text-[#0a0a0a] tracking-tight">
          Studio217
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {visibleItems.map((item) => {
          const Icon = item.icon
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href + '/') && item.href !== '/dashboard')

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors duration-100 ${
                isActive
                  ? 'bg-[#f4f4f5] text-[#0a0a0a] font-medium'
                  : 'text-[#71717a] hover:text-[#0a0a0a] hover:bg-[#f4f4f5]'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-[#e4e4e7]">
        <div className="flex items-center gap-3 px-3 py-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-[#0057FF] text-white text-xs font-medium flex items-center justify-center flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#0a0a0a] truncate">{userName}</p>
            <p className="text-xs text-[#71717a] truncate">{userEmail}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-[#71717a] hover:text-[#0a0a0a] hover:bg-[#f4f4f5] rounded-md transition-colors duration-100"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
