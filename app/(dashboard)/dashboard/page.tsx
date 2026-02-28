import { auth } from '@/lib/auth'
import StatCard from '@/components/StatCard'

const recentActivity = [
  {
    id: 1,
    description: 'New project created: AI Chatbot Integration',
    user: 'Habib',
    time: '2 hours ago',
  },
  {
    id: 2,
    description: 'Client Meridian Corp moved to Active',
    user: 'Habib',
    time: '5 hours ago',
  },
  {
    id: 3,
    description: 'Project status updated: CX Audit — Review',
    user: 'Habib',
    time: '1 day ago',
  },
  {
    id: 4,
    description: 'New client added: Northgate Financial',
    user: 'Habib',
    time: '2 days ago',
  },
]

export default async function DashboardPage() {
  const session = await auth()
  const user = session?.user as { name?: string | null }
  const firstName = user?.name?.split(' ')[0] ?? 'there'

  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="px-8 py-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-[#0a0a0a]">
          {greeting}, {firstName}
        </h1>
        <p className="text-sm text-[#71717a] mt-1">
          Here is what is happening with your accounts today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Active Clients" value="12" change="3 added this month" />
        <StatCard label="Open Projects" value="7" change="2 due this week" />
        <StatCard label="Pending Tasks" value="24" change="6 high priority" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-[#e4e4e7] rounded-md">
        <div className="px-5 py-4 border-b border-[#e4e4e7]">
          <h2 className="text-sm font-semibold text-[#0a0a0a]">Recent Activity</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e4e4e7]">
              <th className="px-5 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                Event
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                By
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                When
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e4e4e7]">
            {recentActivity.map((item) => (
              <tr key={item.id} className="hover:bg-[#fafafa] transition-colors">
                <td className="px-5 py-3.5 text-sm text-[#0a0a0a]">
                  {item.description}
                </td>
                <td className="px-5 py-3.5 text-sm text-[#71717a]">{item.user}</td>
                <td className="px-5 py-3.5 text-sm text-[#71717a]">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
