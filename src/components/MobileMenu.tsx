import { Link, useLocation } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { useSanLuisTime } from '../hooks/useSanLuisTime'
import TextRollButton from './TextRollButton'

const navLinks = [
  { label: 'El Polo', to: '/el-polo' },
  { label: 'Locales', to: '/locales' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const clock = useSanLuisTime()
  const { pathname } = useLocation()

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      style={{ pointerEvents: open ? 'all' : 'none', opacity: open ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <div
            className="absolute bottom-0 left-0 right-0 bg-brand-white rounded-2xl mx-3 mb-3 p-8"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.5s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-gray-100">
          <Clock size={13} className="text-gray-400" />
          <span className="text-[13px] text-gray-500">{clock} · San Luis, Argentina</span>
        </div>
        <div className="flex flex-col gap-6 mb-8">
          {navLinks.map((l, i) => {
            const active = l.to.startsWith('/#') ? false : pathname === l.to
            return (
              <Link
                key={l.label}
                to={l.to}
                onClick={onClose}
                className={`text-[28px] sm:text-[32px] font-medium transition-colors duration-300 ${
                  active ? 'text-brand-primary' : 'text-brand-black hover:text-brand-primary'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
        <TextRollButton dark fullWidth>
          Empezá un proyecto
        </TextRollButton>
      </div>
    </div>
  )
}
