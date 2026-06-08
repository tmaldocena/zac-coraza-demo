import type { Brand } from '../data/brands'
import { useReveal } from '../hooks/useReveal'

export default function BrandCard({ brand, delay = 0 }: { brand: Brand; delay?: number }) {
  const { ref, visible } = useReveal()
  const initials = brand.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `all 0.6s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
      }}
      className="group relative bg-brand-white rounded-2xl p-4 border border-gray-100 hover:border-brand-primary/40 hover:shadow-[0_8px_32px_rgba(0,60,114,0.10)] border-l-4 border-l-transparent hover:border-l-brand-primary transition-all duration-500 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: brand.color }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-brand-black text-sm leading-tight truncate">{brand.name}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{brand.cat}</p>
        </div>
        {brand.local && (
          <span className="text-[9px] font-mono text-gray-300 group-hover:text-brand-primary transition-colors duration-300 flex-shrink-0">
            {brand.local}
          </span>
        )}
      </div>
    </div>
  )
}
