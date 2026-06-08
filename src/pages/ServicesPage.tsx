import { Link } from 'react-router-dom'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import Reveal from '../components/Reveal'
import TextRollButton from '../components/TextRollButton'
import services from '../data/services'

export default function ServicesPage() {
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
              Servicios
            </h1>

            <p
              className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
            >
              Infraestructura, logística, espacios de trabajo y más.
              Todo lo que la ZAC ofrece para construir, trabajar y compartir.
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
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Infraestructura
            </span>
            <h2
              className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] mt-6 mb-5"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              Todo lo que necesitás en un solo polo.
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl mb-12">
              La ZAC fue diseñada como un ecosistema completo. Cada servicio está pensado para que
              profesionales, empresas y familias encuentren soluciones sin salir del predio.
            </p>
          </Reveal>

          <div className="flex flex-col gap-8 sm:gap-12">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}>
                  <div className="flex-1 w-full">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <span className="text-3xl mb-3 block">{s.icon}</span>
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-brand-black mb-3">{s.title}</h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-4">
                      {s.details}
                    </p>
                    <ul className="space-y-1.5">
                      {s.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-gray-500">
                          <span className="text-brand-secondary mt-0.5 flex-shrink-0">●</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary/5 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Proyectos destacados
            </span>
            <h2
              className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] mt-6 mb-10"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              Obras que transforman el predio.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={100}>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-default">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
                  alt="Patio de Sabores"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">Inaugurado · Enero 2026</span>
                  <h3 className="text-white font-bold text-xl mt-1">Patio de Sabores</h3>
                  <p className="text-gray-300 text-[13px] mt-1">Café Puntano · Lo de Filippo · Club de la Pizza · Charlie's Candy</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-default">
                <img
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=900&q=80"
                  alt="Carrefour Maxi"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">USD 15M · 5.000 m²</span>
                  <h3 className="text-white font-bold text-xl mt-1">Carrefour Maxi</h3>
                  <p className="text-gray-300 text-[13px] mt-1">8.000 referencias · 100 puestos de trabajo directos</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <Reveal>
              <div>
                <span className="text-[12px] sm:text-[13px] font-medium border border-brand-white/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-white/80">
                  Contacto
                </span>
                <h2
                  className="font-bold text-brand-white leading-[1.08] tracking-[-0.03em] mt-6 mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                >
                  ¿Querés ser parte de la ZAC?
                </h2>
                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed max-w-lg">
                  Descubrí cómo sumar tu negocio al polo comercial más grande de San Luis.
                  Consultá por locales disponibles, servicios y condiciones.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/contacto">
                <TextRollButton>Contactanos</TextRollButton>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  )
}
