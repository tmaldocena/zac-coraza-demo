import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import TextRollButton from '../components/TextRollButton'

export default function NotFound() {
  return (
    <div className="bg-brand-white font-sans antialiased min-h-screen flex flex-col" style={{ fontFamily: "'system-ui','-apple-system','Segoe UI',sans-serif" }}>
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8">
        <div className="max-w-lg mx-auto text-center">
          <Reveal>
            <span className="text-[120px] sm:text-[160px] font-bold text-brand-primary/10 leading-none select-none">
              404
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] -mt-6 mb-4"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Página no encontrada
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              La página que estás buscando no existe o fue movida.
              Volvé al inicio para explorar la ZAC.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link to="/">
              <TextRollButton>Volver al inicio</TextRollButton>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
