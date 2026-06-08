import { useNavigate } from 'react-router-dom'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import { heroStats } from '../data/stats'
import TextRollButton from './TextRollButton'
import StarburstIcon from './StarburstIcon'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-brand-black">

      <Shader className="absolute inset-0 z-10 pointer-events-none">
        <Swirl colorA="#1a1a1a" colorB="#2D0605" detail={1.7} />
        <ChromaFlow
          baseColor="#0a0a0a"
          downColor="#003C72"
          leftColor="#003C72"
          rightColor="#002a52"
          upColor="#7CDEAF"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>

      <div className="relative z-20 flex flex-col flex-1 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="flex-1" />
        <div className="pb-14 sm:pb-16 lg:pb-20">

          <p
            className="text-[13px] sm:text-[14px] text-gray-300 tracking-wide mb-5 sm:mb-8"
            style={{ opacity: 0, animation: 'fadeUp 0.8s cubic-bezier(0.32,0.72,0,1) 0.2s forwards' }}
          >
            ZAC · Zona de Actividad Comercial
          </p>

          <h1
            className="font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl"
            style={{
              fontSize: 'clamp(1.75rem, 7vw, 4.8rem)',
              opacity: 0,
              animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.4s forwards',
            }}
          >
            El primer polo comercial<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>y logístico<br />
            de <span className="text-brand-primary">San Luis.</span>
          </h1>

          <p
            className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
            style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
          >
            Todo para la construcción, el hogar y los servicios en un solo lugar.<br className="hidden sm:block" />
            Ruta 3, Km 1 · Zona sur de la ciudad de San Luis.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center"
            style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.7s forwards' }}
          >
            <TextRollButton outline onClick={() => navigate('/el-polo')}>
                Conocé el polo
              </TextRollButton>

            <div className="inline-flex items-center gap-2.5 bg-white rounded-[4px] px-3 sm:px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-default">
              <StarburstIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
              <span className="text-[13px] sm:text-[14px] font-medium text-brand-black">Grupo Coraza</span>
              <span className="text-[10px] sm:text-[11px] bg-brand-black text-brand-white px-1.5 sm:px-2 py-0.5 rounded font-medium">
                Oficial
              </span>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.85s forwards' }}
          >
            {heroStats.map(s => (
              <div key={s.value} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">{s.value}</span>
                <span className="text-[11px] text-gray-500 mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-[9px] text-gray-400 uppercase tracking-widest">scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
