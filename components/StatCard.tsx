interface StatCardProps {
  label: string
  value: string | number
  change?: string
}

export default function StatCard({ label, value, change }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e4e4e7] rounded-md p-5">
      <p className="text-sm text-[#71717a] font-medium">{label}</p>
      <p className="text-3xl font-semibold text-[#0a0a0a] mt-2">{value}</p>
      {change && (
        <p className="text-xs text-[#71717a] mt-1">{change}</p>
      )}
    </div>
  )
}
