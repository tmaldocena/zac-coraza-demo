import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import allBrands, { filterTabs } from '../data/brands'
import Reveal from './Reveal'
import TextRollButton from './TextRollButton'
import BrandCard from './BrandCard'

export default function Directory() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  const flatBrands = activeFilter === 'all'
    ? Object.values(allBrands).flat()
    : (allBrands[activeFilter] ?? [])

  return (
      <section id="locales" className="bg-brand-primary/5 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

          <Reveal>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary text-brand-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
                2
              </div>
              <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
                Directorio de locales
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14 lg:mb-16">
            <Reveal delay={100}>
              <h2
                className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.75rem, 7vw, 4.2rem)' }}
            >
              Nuestros locales
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <TextRollButton dark small onClick={() => navigate('/locales')}>Ver todos los locales</TextRollButton>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="flex flex-wrap gap-2 mb-8">
            {filterTabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveFilter(t.key)}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    activeFilter === t.key
                      ? 'bg-brand-primary text-brand-white shadow-sm'
                      : 'bg-brand-white text-gray-600 border border-gray-200 hover:border-brand-primary/40'
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {flatBrands.map((brand, i) => (
            <BrandCard key={`${brand.name}-${i}`} brand={brand} delay={i * 35} />
          ))}
        </div>

          <Reveal delay={300}>
            <div className="mt-8 rounded-2xl bg-brand-black text-brand-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🚀</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Próximas aperturas · Plan maestro 2026</p>
              <p className="text-[13px] text-gray-400 mt-0.5">
                Cadenas multinacionales de comida rápida · Cines · Más servicios profesionales · Hasta 50 locales totales
              </p>
            </div>
            <TextRollButton small>
              Reservá tu local
            </TextRollButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
