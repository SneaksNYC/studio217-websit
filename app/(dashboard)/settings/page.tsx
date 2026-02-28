import { auth } from '@/lib/auth'
import { readFileSync } from 'fs'
import { join } from 'path'

interface UserRecord {
  id: string
  name: string
  email: string
  role: string
  active: boolean
  createdAt: string
}

function getAllUsers(): UserRecord[] {
  const filePath = join(process.cwd(), 'lib', 'users.json')
  const raw = readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

export default async function SettingsPage() {
  const session = await auth()
  const user = session?.user as {
    name?: string | null
    email?: string | null
    role?: string
    id?: string
  }

  const isAdmin = user?.role === 'admin'
  const allUsers = isAdmin ? getAllUsers() : []

  return (
    <div className="px-8 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-[#0a0a0a]">Settings</h1>
        <p className="text-sm text-[#71717a] mt-1">
          Manage your account and preferences.
        </p>
      </div>

      {/* Profile section */}
      <div className="bg-white border border-[#e4e4e7] rounded-md mb-6">
        <div className="px-6 py-4 border-b border-[#e4e4e7]">
          <h2 className="text-sm font-semibold text-[#0a0a0a]">Profile</h2>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-[#0a0a0a]">
                Full name
              </label>
              <input
                type="text"
                defaultValue={user?.name ?? ''}
                readOnly
                className="input-field bg-[#fafafa] cursor-not-allowed"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-[#0a0a0a]">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email ?? ''}
                readOnly
                className="input-field bg-[#fafafa] cursor-not-allowed"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#0a0a0a]">
              Role
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                defaultValue={user?.role ?? 'client'}
                readOnly
                className="input-field bg-[#fafafa] cursor-not-allowed max-w-xs capitalize"
              />
              <span className="text-xs text-[#71717a]">Read-only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Change password section */}
      <div className="bg-white border border-[#e4e4e7] rounded-md mb-6">
        <div className="px-6 py-4 border-b border-[#e4e4e7]">
          <h2 className="text-sm font-semibold text-[#0a0a0a]">Change password</h2>
        </div>
        <div className="px-6 py-5 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#0a0a0a]">
              Current password
            </label>
            <input
              type="password"
              className="input-field max-w-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#0a0a0a]">
              New password
            </label>
            <input
              type="password"
              className="input-field max-w-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-[#0a0a0a]">
              Confirm new password
            </label>
            <input
              type="password"
              className="input-field max-w-sm"
              placeholder="••••••••"
            />
          </div>
          <div className="pt-1">
            <button className="btn-primary">Update password</button>
          </div>
        </div>
      </div>

      {/* Team section — admin only */}
      {isAdmin && (
        <div className="bg-white border border-[#e4e4e7] rounded-md">
          <div className="px-6 py-4 border-b border-[#e4e4e7]">
            <h2 className="text-sm font-semibold text-[#0a0a0a]">Team</h2>
            <p className="text-xs text-[#71717a] mt-0.5">
              All users with access to Studio217.
            </p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e4e4e7] bg-[#fafafa]">
                {['Name', 'Email', 'Role', 'Status'].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e4e7]">
              {allUsers.map((u) => (
                <tr key={u.id} className="hover:bg-[#fafafa] transition-colors">
                  <td className="px-5 py-3.5 text-sm font-medium text-[#0a0a0a]">
                    {u.name}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#71717a]">
                    {u.email}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#71717a] capitalize">
                    {u.role}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={u.active ? 'badge-active' : 'badge-inactive'}
                    >
                      {u.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
