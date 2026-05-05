function StatBar({ label, value, max = 5, color = "bg-rose-500" }) {
  const percentage = (value / max) * 100

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-slate-500 w-28 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-bold text-slate-700 w-5 text-right">{value}</span>
    </div>
  )
}

export default StatBar