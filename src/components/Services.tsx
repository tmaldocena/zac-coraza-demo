import services from '../data/services'
import Reveal from './Reveal'

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

        <Reveal>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary text-brand-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
              3
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Servicios e infraestructura
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <Reveal delay={100}>
            <h2
              className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              No solo comprás.<br />
              <span className="text-brand-secondary">Vivís la experiencia.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group bg-gray-50 hover:bg-brand-primary rounded-2xl p-6 border border-gray-100 hover:border-brand-primary transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-default h-full">
                <div className="text-2xl mb-4">{s.icon}</div>
                <h3 className="text-[15px] font-semibold text-brand-black group-hover:text-brand-white mb-2 transition-colors duration-500">{s.title}</h3>
                <p className="text-[13px] text-gray-500 group-hover:text-brand-white/70 leading-relaxed transition-colors duration-500">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <Reveal delay={100}>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group cursor-default">
              <img
                src="https://elchorrillero.com/nota/wp-content/uploads/2026/01/BLAS-62-2048x1365.jpg"
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
                src="https://agenciasanluis.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-16-at-2.03.24-PM.jpeg"
                alt="Carrefour Max"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">USD 15M · 5.000 m²</span>
                <h3 className="text-white font-bold text-xl mt-1">Carrefour Max</h3>
                <p className="text-gray-300 text-[13px] mt-1">8.000 referencias · +100 puestos de trabajo generados</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
