import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowUpDown } from 'lucide-react'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import Reveal from '../components/Reveal'
import TextRollButton from '../components/TextRollButton'
import LocalesCard from '../components/LocalesCard'
import StoreMap from '../components/StoreMap'
import allBrands, { filterTabs, type Brand } from '../data/brands'
import type { StoreMapMarker } from '../components/StoreMap'

const CENTER: [number, number] = [-33.31988, -66.32718]

function getPosition(local: string): { lat: number; lng: number } {
  const [baseLat, baseLng] = CENTER
  const type = local.split('-')[0]
  const n = parseInt(local.split('-')[1]) || 0

  if (type === 'L') {
    if (n <= 10) return { lat: baseLat - 0.00025, lng: baseLng - 0.00050 + (n - 1) * 0.00015 }
    if (n <= 19) return { lat: baseLat, lng: baseLng - 0.00050 + (n - 11) * 0.00015 }
    return { lat: baseLat + 0.00025, lng: baseLng - 0.00050 + (n - 20) * 0.00015 }
  }
  if (type === 'G') {
    const col = (n - 1) % 2
    const row = Math.floor((n - 1) / 2)
    return { lat: baseLat - 0.00010 + row * 0.00020, lng: baseLng - 0.00080 + col * 0.00015 }
  }
  if (type === 'H') return { lat: baseLat + 0.00030, lng: baseLng + 0.00150 }
  if (type === 'S') return { lat: baseLat + 0.00040, lng: baseLng - 0.00060 }
  return { lat: baseLat, lng: baseLng }
}

const flatBrands: (Brand & { lat: number; lng: number })[] = Object.values(allBrands).flat().map(b => {
  const pos = getPosition(b.local || '')
  return { ...b, ...pos }
})

export default function LocalesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [tagFilter, setTagFilter] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [showMap, setShowMap] = useState(false)

  const allTags = useMemo(() => {
    const set = new Set<string>()
    flatBrands.forEach(b => b.tags?.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [])

  const filtered = useMemo(() => {
    let list = activeFilter === 'all' ? flatBrands : flatBrands.filter(b => {
      for (const [key, brands] of Object.entries(allBrands)) {
        if (brands.some(bb => bb.name === b.name)) return key === activeFilter
      }
      return false
    })
    if (tagFilter) {
      list = list.filter(b => b.tags?.includes(tagFilter))
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(b => b.name.toLowerCase().includes(q) || b.cat.toLowerCase().includes(q))
    }
    list = [...list]
    switch (sortBy) {
      case 'name-desc': list.sort((a, b) => b.name.localeCompare(a.name)); break
      case 'local': list.sort((a, b) => (a.local || '').localeCompare(b.local || '')); break
      case 'name':
      default: list.sort((a, b) => a.name.localeCompare(b.name)); break
    }
    return list
  }, [activeFilter, search, tagFilter, sortBy])

  const mapMarkers: StoreMapMarker[] = useMemo(
    () => filtered.map(b => ({ name: b.name, cat: b.cat, local: b.local || '', color: b.color, lat: b.lat, lng: b.lng })),
    [filtered],
  )

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    Object.entries(allBrands).forEach(([key, brands]) => { counts[key] = brands.length })
    return counts
  }, [])

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
              Locales
            </h1>
            <p
              className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
            >
              Directorio completo de marcas y servicios disponibles en la ZAC.
              Construcción, terminaciones, gastronomía y más en un solo lugar.
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
              Directorio
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-6 mb-10 sm:mb-14">
              <h2
                className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
              >
                Nuestras marcas.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-6">
              <div className="flex flex-wrap gap-2 flex-1">
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
                    <span className="ml-1.5 text-[11px] opacity-60">
                      {t.key === 'all' ? flatBrands.length : categoryCounts[t.key] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            <Reveal delay={120} className="flex-1">
              <div className="relative max-w-md">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por marca o categoría…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-[14px] text-brand-black placeholder:text-gray-400 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-white transition-all duration-300"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex items-center gap-2">
                <ArrowUpDown size={13} className="text-gray-400" />
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="text-[13px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-brand-black focus:outline-none focus:border-brand-primary/50 transition-colors duration-300 cursor-pointer"
                >
                  <option value="name">Nombre A-Z</option>
                  <option value="name-desc">Nombre Z-A</option>
                  <option value="local">N° de Local</option>
                </select>
              </div>
            </Reveal>
          </div>

          <Reveal delay={130}>
            <div className="flex flex-wrap gap-1.5 mb-6">
              <button
                onClick={() => setTagFilter('')}
                className={`text-[11px] font-medium rounded-full px-2.5 py-1 transition-all duration-300 ${
                  !tagFilter ? 'bg-brand-primary text-brand-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {allTags.map(t => (
                <button
                  key={t}
                  onClick={() => setTagFilter(t)}
                  className={`text-[11px] font-medium rounded-full px-2.5 py-1 transition-all duration-300 ${
                    tagFilter === t ? 'bg-brand-primary text-brand-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[13px] text-gray-500">
                {filtered.length} {filtered.length === 1 ? 'marca encontrada' : 'marcas encontradas'}
              </span>
              <button
                onClick={() => setShowMap(p => !p)}
                className="ml-auto text-[12px] font-medium text-brand-primary hover:text-[#002a52] transition-colors duration-300 underline underline-offset-2"
              >
                {showMap ? 'Ocultar mapa' : 'Ver en mapa'}
              </button>
            </div>
          </Reveal>

          {showMap && (
            <Reveal delay={100}>
              <div className="mb-10">
                <StoreMap markers={mapMarkers} />
              </div>
            </Reveal>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((brand, i) => (
              <LocalesCard key={`${brand.name}-${i}`} brand={brand} delay={i * 30} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-[15px]">No se encontraron marcas con ese filtro.</p>
            </div>
          )}

          <Reveal delay={300}>
            <div className="mt-10 rounded-2xl bg-brand-black text-brand-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🚀</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Próximas aperturas · Plan maestro 2026</p>
                <p className="text-[13px] text-gray-400 mt-0.5">
                  Cadenas multinacionales de comida rápida · Cines · Más servicios profesionales · Hasta 50 locales totales
                </p>
              </div>
              <Link to="/contacto">
                <TextRollButton small>Reservá tu local</TextRollButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
