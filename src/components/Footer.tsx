import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'El Polo', to: '/el-polo' },
  { label: 'Locales', to: '/locales' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="bg-brand-black border-t-2 border-brand-primary py-10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center">
              <span className="text-brand-white font-bold text-[11px] tracking-tight">ZAC</span>
            </div>
            <div>
              <p className="text-brand-white text-sm font-semibold">ZAC Coraza</p>
              <p className="text-gray-500 text-[11px]">Polo Comercial y Logístico · San Luis, Argentina</p>
            </div>
          </div>
          <p className="text-gray-600 text-[12px]">© 2026 Grupo Coraza · Ruta Provincial 3, Km 1 · San Luis</p>
          <div className="hidden sm:flex items-center gap-5">
            {navLinks.map(l => {
              const active = l.to.startsWith('/#') ? false : pathname === l.to
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`text-[12px] transition-colors duration-300 ${
                    active ? 'text-brand-secondary' : 'text-gray-500 hover:text-brand-white'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
