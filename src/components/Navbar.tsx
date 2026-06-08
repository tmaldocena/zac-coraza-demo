import { Link, useLocation } from 'react-router-dom'
import { Clock, Menu, X } from 'lucide-react'
import { useSanLuisTime } from '../hooks/useSanLuisTime'
import TextRollButton from './TextRollButton'

const navLinks = [
  { label: 'El Polo', to: '/el-polo' },
  { label: 'Locales', to: '/locales' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar({ menuOpen, onToggle }: { menuOpen: boolean; onToggle: () => void }) {
  const clock = useSanLuisTime()
  const { pathname } = useLocation()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 sm:p-3">
      <div className="w-full max-w-[1440px] bg-brand-white/80 backdrop-blur-xl rounded-full px-[5px] py-[5px] flex items-center justify-between shadow-[0_2px_24px_rgba(0,0,0,0.12)] border border-brand-white/20">

        <div className="flex items-center gap-5">
          <Link to="/" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 border border-brand-primary/10">
            <img src="/zac-logo.jpg" alt="ZAC" className="w-full h-full object-cover" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => {
              const active = l.to.startsWith('/#') ? false : pathname === l.to
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`text-[14px] transition-colors duration-300 ${active ? 'text-brand-primary font-semibold' : 'text-brand-black hover:text-gray-500'
                    }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 pr-1">
          <span className="hidden lg:block text-[13px] text-gray-600">
            Abierto en San Luis
          </span>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock size={14} className="text-gray-500" />
            <span className="text-[13px] text-gray-600">{clock} en San Luis</span>
          </div>

          <Link to="/contacto">
            <TextRollButton dark>
              Alquilá tu local
            </TextRollButton>
          </Link>

          <Link to={"/contacto"}
            onClick={onToggle}
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 bg-brand-black rounded-full text-brand-white flex items-center justify-center"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </Link>
        </div>
      </div>
    </div>
  )
}
