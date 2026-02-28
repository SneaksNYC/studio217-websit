import ProjectCard, { ProjectStatus } from '@/components/ProjectCard'

interface Project {
  id: number
  name: string
  client: string
  dueDate: string
  status: ProjectStatus
}

const projects: Project[] = [
  {
    id: 1,
    name: 'AI Chatbot Integration',
    client: 'Meridian Corp',
    dueDate: 'Mar 15, 2024',
    status: 'In Progress',
  },
  {
    id: 2,
    name: 'Customer Experience Audit',
    client: 'Northgate Financial',
    dueDate: 'Apr 1, 2024',
    status: 'Review',
  },
  {
    id: 3,
    name: 'Support Workflow Redesign',
    client: 'Vanta Solutions',
    dueDate: 'Apr 30, 2024',
    status: 'Planning',
  },
  {
    id: 4,
    name: 'Knowledge Base Migration',
    client: 'Meridian Corp',
    dueDate: 'Feb 28, 2024',
    status: 'Done',
  },
]

const statuses: ProjectStatus[] = ['Planning', 'In Progress', 'Review', 'Done']

export default function ProjectsPage() {
  const grouped = statuses.reduce<Record<ProjectStatus, Project[]>>(
    (acc, s) => {
      acc[s] = projects.filter((p) => p.status === s)
      return acc
    },
    { Planning: [], 'In Progress': [], Review: [], Done: [] }
  )

  const statusColors: Record<ProjectStatus, string> = {
    Planning: 'text-[#71717a]',
    'In Progress': 'text-[#1d4ed8]',
    Review: 'text-[#854d0e]',
    Done: 'text-[#166534]',
  }

  return (
    <div className="px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#0a0a0a]">Projects</h1>
        <p className="text-sm text-[#71717a] mt-1">
          Track project status across all clients.
        </p>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div key={status}>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-xs font-semibold uppercase tracking-wider ${statusColors[status]}`}>
                {status}
              </h3>
              <span className="text-xs text-[#71717a] font-medium bg-[#f4f4f5] px-1.5 py-0.5 rounded">
                {grouped[status].length}
              </span>
            </div>
            <div className="space-y-2">
              {grouped[status].map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  client={project.client}
                  dueDate={project.dueDate}
                  status={project.status}
                />
              ))}
              {grouped[status].length === 0 && (
                <div className="bg-white border border-dashed border-[#e4e4e7] rounded-md p-4 text-center">
                  <p className="text-xs text-[#71717a]">No projects</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Table view below */}
      <div className="mt-10">
        <h2 className="text-sm font-semibold text-[#0a0a0a] mb-4">All Projects</h2>
        <div className="bg-white border border-[#e4e4e7] rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e4e4e7] bg-[#fafafa]">
                {['Project', 'Client', 'Due Date', 'Status'].map((h) => (
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
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-[#fafafa] transition-colors">
                  <td className="px-5 py-3.5 text-sm font-medium text-[#0a0a0a]">
                    {project.name}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#71717a]">
                    {project.client}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#71717a]">
                    {project.dueDate}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={
                        project.status === 'Planning'
                          ? 'badge-planning'
                          : project.status === 'In Progress'
                          ? 'badge-progress'
                          : project.status === 'Review'
                          ? 'badge-review'
                          : 'badge-done'
                      }
                    >
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
