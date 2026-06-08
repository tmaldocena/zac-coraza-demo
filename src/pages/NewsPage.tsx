import { Link } from 'react-router-dom'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import Reveal from '../components/Reveal'
import TextRollButton from '../components/TextRollButton'
import news from '../data/news'

export default function NewsPage() {
  const featured = news[0]
  const rest = news.slice(1)

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
              Noticias
            </h1>

            <p
              className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
            >
              Toda la actualidad de la Zona de Actividad Comercial de San Luis.
              Inversiones, inauguraciones, expansión y más.
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

      <section className="bg-brand-white pt-16 sm:pt-20 lg:pt-28 pb-0">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Actualidad
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-6 mb-10 sm:mb-14">
              <h2
                className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
              >
                Últimas noticias.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[3/1] mb-12"
            >
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">
                    {featured.tag}
                  </span>
                  <span className="text-[11px] text-gray-400">{featured.date}</span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-snug mb-2 max-w-3xl">
                  {featured.title}
                </h3>
                <p className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed max-w-2xl mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[12px] text-brand-secondary font-medium">
                  <span>Leer en {featured.source}</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </a>
          </Reveal>

          <div className="flex flex-col divide-y divide-gray-100">
            {rest.map((n, i) => (
              <Reveal key={n.sortDate} delay={i * 60}>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row gap-5 sm:gap-6 py-6 sm:py-8 hover:bg-gray-50/50 -mx-5 sm:-mx-8 px-5 sm:px-8 transition-colors duration-300 rounded-none sm:rounded-2xl"
                >
                  <div className="sm:w-56 lg:w-72 flex-shrink-0">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden">
                      <img
                        src={n.img}
                        alt={n.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-primary">
                        {n.tag}
                      </span>
                      <span className="text-[11px] text-gray-400">{n.date}</span>
                    </div>
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-brand-black leading-snug group-hover:text-brand-primary transition-colors duration-300 mb-1.5">
                      {n.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-2">
                      {n.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-[12px] text-brand-primary font-medium">
                      <span>Leer en {n.source}</span>
                      <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 mb-16 sm:mb-20 lg:mb-28 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📬</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-brand-black">¿Tenés una noticia sobre la ZAC?</p>
                <p className="text-[13px] text-gray-500 mt-0.5">
                  Si querés compartir información o novedades del polo, escribinos y la sumamos al directorio.
                </p>
              </div>
              <Link to="/contacto">
                <TextRollButton small outline>Contactanos</TextRollButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}
