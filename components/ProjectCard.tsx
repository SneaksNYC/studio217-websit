export type ProjectStatus = 'Planning' | 'In Progress' | 'Review' | 'Done'

interface ProjectCardProps {
  name: string
  client: string
  dueDate: string
  status: ProjectStatus
}

const statusStyles: Record<ProjectStatus, string> = {
  Planning: 'badge-planning',
  'In Progress': 'badge-progress',
  Review: 'badge-review',
  Done: 'badge-done',
}

export default function ProjectCard({ name, client, dueDate, status }: ProjectCardProps) {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-md p-4 flex items-center justify-between">
      <div className="flex-1 min-w-0 mr-4">
        <p className="text-sm font-medium text-[#0a0a0a] truncate">{name}</p>
        <p className="text-xs text-[#71717a] mt-0.5">{client}</p>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <p className="text-xs text-[#71717a]">{dueDate}</p>
        <span className={statusStyles[status]}>{status}</span>
      </div>
    </div>
  )
}
