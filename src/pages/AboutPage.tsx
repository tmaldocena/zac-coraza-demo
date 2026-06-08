import { Link } from 'react-router-dom'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import TextRollButton from '../components/TextRollButton'
import Map from '../components/Map'
import reviews from '../data/reviews'
import { detailStats } from '../data/stats'

const milestones = [
  {
    date: 'Oct 2023',
    title: 'Apertura de la ZAC',
    desc: 'Inauguración del primer polo comercial y logístico de San Luis con 20 empresas fundadoras.',
  },
  {
    date: 'Jul 2025',
    title: 'Carrefour Maxi · USD 15M',
    desc: 'Anuncio de la construcción del hipermercado de 5.000 m² con 100 puestos de trabajo directos.',
  },
  {
    date: 'Ene 2026',
    title: 'Patio de Sabores',
    desc: 'Apertura de 6 locales gastronómicos: Café Puntano, Lo de Filippo, Club de la Pizza y más.',
  },
  {
    date: '2026+',
    title: 'ZAC 2 & 3',
    desc: 'Plan maestro: 50 locales totales con gimnasio, tecnología, moda, indumentaria y farmacia.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= rating ? 'text-amber-400' : 'text-gray-200'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="bg-brand-white font-sans antialiased" style={{ fontFamily: "'system-ui','-apple-system','Segoe UI',sans-serif" }}>

      <section className="relative flex flex-col bg-brand-black">
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
          <div className="flex-1 min-h-[12vh] sm:min-h-[16vh]" />
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
              El Polo
            </h1>

            <p
              className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
            >
              Conocé la historia, la visión y el futuro de la Zona de Actividad Comercial de San Luis.
              Ocho hectáreas pensadas para construir, emprender y compartir.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      <section className="bg-brand-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div>
                <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
                  Sobre la ZAC
                </span>
                <h2
                  className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] mt-6 mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  Un polo privado que transforma el sur de la ciudad.
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-gray-600">
                  <p>
                    La Zona de Actividad Comercial (ZAC) nació en 2023 como una apuesta del Grupo Coraza para
                    descentralizar el comercio de San Luis y crear un hub logístico, comercial y gastronómico
                    sobre la Ruta Provincial 3, en el kilómetro 1 de la zona sur.
                  </p>
                  <p>
                    En sus 8 hectáreas conviven marcas líderes de la construcción, terminaciones, herramientas,
                    servicios profesionales y una creciente oferta gastronómica. El modelo one-stop-shop permite
                    que profesionales, familias y emprendedores encuentren todo lo que necesitan en un solo lugar.
                  </p>
                  <p>
                    Detrás del proyecto está Grupo Coraza, una empresa puntana con experiencia en desarrollos
                    inmobiliarios y comerciales. Su CEO, Alejandro Gómez, lidera una visión de largo plazo que
                    ya generó más de 100 empleos directos y proyecta 50 locales en su plan maestro 2026-2027.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
                  alt="Vista aérea ZAC"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <img
          src="/zac-preview.webp"
          alt="Vista de la ZAC"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/85 via-brand-primary/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-white/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-white/80">
              Historia
            </span>
            <h2
              className="font-bold text-brand-white leading-[1.08] tracking-[-0.03em] mt-6 mb-12"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              Hitos del proyecto.
            </h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-white/20" />

            <div className="space-y-10 sm:space-y-14">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={i * 100}>
                  <div className="relative flex items-start gap-6 sm:gap-8 pl-5">
                    <div className="absolute left-[-3px] top-2 z-10 w-[10px] h-[10px] rounded-full bg-brand-white border-[3px] border-brand-white/30" />

                    <div className="flex-1">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-white/90 bg-white/15 rounded-full px-3 py-1">
                        {m.date}
                      </span>
                      <h3 className="text-[17px] font-semibold text-brand-white mt-2">{m.title}</h3>
                      <p className="text-[13px] text-brand-white/70 mt-1 max-w-lg">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Impacto
            </span>
            <h2
              className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] mt-6 mb-10"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              La ZAC en números.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {detailStats.map((s, i) => (
              <Reveal key={s.value} delay={i * 80}>
                <StatCounter value={s.value} label={s.label} sub={s.sub} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary/5 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Opiniones
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-6 mb-10 sm:mb-14">
              <h2
                className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
              >
                Lo que dicen nuestros visitantes.
              </h2>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex text-amber-400 text-lg">
                  {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
                <span className="text-sm font-semibold text-brand-black">5</span>
                <span className="text-[13px] text-gray-400">· +60 opiniones</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <div className="bg-brand-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 h-full flex flex-col">
                  <StarRating rating={r.rating} />
                  <p className="text-[14px] text-gray-600 leading-relaxed mt-4 mb-5 flex-1">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold text-brand-white flex-shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-brand-black truncate">{r.name}</p>
                      <p className="text-[11px] text-gray-400">{r.date}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div>
                <span className="text-[12px] sm:text-[13px] font-medium border border-brand-white/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-white/80">
                  Ubicación
                </span>
                <h2
                  className="font-bold text-brand-white leading-[1.08] tracking-[-0.03em] mt-6 mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  Visitá el polo.
                </h2>
                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-6">
                  Ruta Provincial 3, Km 1 · Zona Sur · San Luis, Argentina.
                </p>
                <p className="text-gray-400 text-[14px] leading-relaxed mb-8">
                  Abierto de lunes a sábados de 8:00 a 20:00 hs. Estacionamiento gratuito y amplio.
                </p>
                <Link to="/contacto">
                  <TextRollButton>Contactanos</TextRollButton>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Map />
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  )
}
