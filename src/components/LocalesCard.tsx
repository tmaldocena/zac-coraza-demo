import { useReveal } from '../hooks/useReveal'
import type { Brand } from '../data/brands'

const tagColors: Record<string, string> = {
  Destacado: 'bg-amber-100 text-amber-800 border-amber-200',
  Popular: 'bg-blue-100 text-blue-800 border-blue-200',
  Nuevo: 'bg-green-100 text-green-800 border-green-200',
}

export default function LocalesCard({ brand, delay = 0 }: { brand: Brand; delay?: number }) {
  const { ref, visible } = useReveal()
  const initials = brand.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
      }}
      className="group relative bg-brand-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_rgba(0,60,114,0.12)] transition-all duration-500 cursor-default"
    >
      <div className="h-1.5" style={{ backgroundColor: brand.color }} />

      <div className="p-5 sm:p-6 flex flex-col items-center text-center">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-4 shadow-sm"
          style={{ backgroundColor: brand.color }}
        >
          {initials}
        </div>

        <h3 className="text-[15px] sm:text-[17px] font-bold text-brand-black leading-tight">
          {brand.name}
        </h3>
        <p className="text-[12px] text-gray-500 mt-1">{brand.cat}</p>

        {brand.tags && brand.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
            {brand.tags.map(t => (
              <span
                key={t}
                className={`inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tagColors[t] || 'bg-gray-100 text-gray-600 border-gray-200'}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {brand.local && (
          <div className="mt-4 pt-3 border-t border-gray-100 w-full flex items-center justify-center gap-1.5">
            <span className="text-[9px] font-mono font-medium text-gray-400">Local</span>
            <span className="text-[11px] font-mono font-semibold text-brand-primary">{brand.local}</span>
          </div>
        )}
      </div>
    </div>
  )
}
