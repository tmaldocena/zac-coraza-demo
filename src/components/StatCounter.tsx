import { useCountUp } from '../hooks/useCountUp'

function parseValue(v: string): { num: number; suffix: string; prefix: string } {
  const match = v.match(/^([+-]?)(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: '', prefix: '' }
  return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] }
}

export default function StatCounter({ value, label, sub }: { value: string; label: string; sub?: string }) {
  const { prefix, num, suffix } = parseValue(value)
  const { ref, displayValue } = useCountUp(num, 2000, suffix)

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/4 border-l-4 border-l-brand-primary transition-all duration-500">
      <p className="text-2xl sm:text-3xl font-bold text-brand-black tracking-tight">
        {prefix}{displayValue}
      </p>
      <p className="text-sm font-medium text-gray-700 mt-1">{label}</p>
      {sub && <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>}
    </div>
  )
}
