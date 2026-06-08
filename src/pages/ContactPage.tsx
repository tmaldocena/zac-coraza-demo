import { useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from 'shaders/react'
import Reveal from '../components/Reveal'
import Map from '../components/Map'

const contactInfo = [
  { emoji: '📍', label: 'Dirección', val: 'Ruta Provincial 3, Km 1 · Zona Sur · San Luis' },
  { emoji: '🕐', label: 'Horario', val: 'Lunes a Sábado · 8:00 a 20:00 hs' },
  { emoji: '📧', label: 'Email', val: 'info@zaccoraza.com.ar' },
  { emoji: '📱', label: 'Instagram', val: '@zaccoraza' },
  { emoji: '📞', label: 'Teléfono', val: '+54 266 400 0000' },
]

const socialLinks = [
  { label: 'Instagram', handle: '@zaccoraza', url: '#' },
  { label: 'Facebook', handle: 'ZAC San Luis', url: '#' },
  { label: 'LinkedIn', handle: 'ZAC — Zona de Actividad Comercial', url: '#' },
]

const formFields = [
  { key: 'nombre', label: 'Nombre completo', placeholder: 'Juan García', type: 'text' },
  { key: 'empresa', label: 'Empresa / Marca', placeholder: 'Constructora San Luis S.A.', type: 'text' },
  { key: 'rubro', label: 'Rubro de interés', placeholder: 'Cerámicos, Herramientas, Gastronomía…', type: 'text' },
  { key: 'telefono', label: 'Teléfono', placeholder: '+54 266 400 0000', type: 'tel' },
  { key: 'email', label: 'Email', placeholder: 'juan@empresa.com', type: 'email' },
  { key: 'mensaje', label: 'Mensaje', placeholder: 'Contanos cómo podemos ayudarte…', type: 'textarea' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ nombre: '', empresa: '', rubro: '', telefono: '', email: '', mensaje: '' })
  const [formSent, setFormSent] = useState(false)

  function handleSubmit() {
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
    setFormData({ nombre: '', empresa: '', rubro: '', telefono: '', email: '', mensaje: '' })
  }

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
              Contacto
            </h1>

            <p
              className="text-gray-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mb-10"
              style={{ opacity: 0, animation: 'fadeUp 0.9s cubic-bezier(0.32,0.72,0,1) 0.55s forwards' }}
            >
              Sumate al primer polo comercial y logístico de San Luis.
              Consultanos por locales disponibles, servicios y condiciones.
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

      <section className="bg-brand-primary pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <Reveal>
                <h2
                  className="font-bold text-brand-white leading-[1.08] tracking-[-0.03em] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
                >
                  ¿Querés tener<br />tu local en la ZAC?
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                  Sumate al primer polo comercial y logístico de San Luis. Más de 50 locales proyectados, tráfico de profesionales y familias de toda la provincia, y el respaldo del Grupo Coraza.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-3 mb-8">
                  {contactInfo.map(item => (
                    <div key={item.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-white/10 border border-brand-white/15">
                      <span className="text-base flex-shrink-0 mt-0.5">{item.emoji}</span>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">{item.label}</p>
                        <p className="text-[13px] text-gray-200 mt-0.5">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Redes sociales</p>
                  {socialLinks.map(s => (
                    <a
                      key={s.label}
                      href={s.url}
                      className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-brand-white/10 border border-brand-white/15 hover:bg-brand-white/15 transition-colors duration-300 group cursor-pointer"
                    >
                      <div>
                        <p className="text-[13px] text-gray-200">{s.handle}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{s.label}</p>
                      </div>
                      <ExternalLink size={13} className="text-gray-500 group-hover:text-brand-secondary transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <Map />
              </Reveal>

              <Reveal delay={180}>
                <div className="p-4 rounded-xl bg-brand-white/10 border border-brand-white/15 mt-6">
                  <p className="text-[13px] text-brand-secondary font-semibold">Plan de expansión activo</p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    El polo suma nuevos locales con apoyo del gobierno provincial y municipal. Subsidios de empleo y desarrollo de infraestructura vial incluidos.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="bg-brand-white/5 border border-brand-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-brand-white font-semibold text-lg mb-1">Formulario de contacto</h3>
                <p className="text-gray-400 text-[13px] mb-6">Completá tus datos y te contactamos en menos de 24 horas.</p>

                {formSent ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <p className="text-brand-white font-semibold">¡Mensaje enviado!</p>
                    <p className="text-gray-400 text-[13px] text-center max-w-xs">El equipo de la ZAC se comunicará con vos a la brevedad.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {formFields.map(f => (
                      <div key={f.key}>
                        <label className="block text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1.5">{f.label}</label>
                        {f.type === 'textarea' ? (
                          <textarea
                            placeholder={f.placeholder}
                            value={formData[f.key as keyof typeof formData]}
                            onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                            rows={3}
                            className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-[14px] text-brand-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary/60 focus:bg-white/10 transition-all duration-300 resize-none"
                          />
                        ) : (
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            value={formData[f.key as keyof typeof formData]}
                            onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                            className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-[14px] text-brand-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary/60 focus:bg-white/10 transition-all duration-300"
                          />
                        )}
                      </div>
                    ))}
                    <button
                      onClick={handleSubmit}
                      className="group w-full mt-2 bg-brand-primary hover:bg-[#002a52] text-brand-white rounded-full pl-5 pr-2 py-2.5 text-[13px] font-medium flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] active:scale-[0.98]"
                    >
                      <span>Enviar consulta</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                        <ArrowRight size={13} />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Preguntas frecuentes
            </span>
            <h2
              className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em] mt-6 mb-10"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              Información útil.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { q: '¿Cuáles son los horarios de la ZAC?', a: 'La ZAC abre de lunes a sábados de 8:00 a 20:00 hs. Los locales gastronómicos del Patio de Sabores extienden su horario hasta la medianoche.' },
              { q: '¿Hay estacionamiento?', a: 'Sí, la ZAC cuenta con estacionamiento gratuito y amplio para vehículos particulares, con capacidad para más de 200 autos.' },
              { q: '¿Cómo puedo alquilar un local?', a: 'Completá el formulario de contacto y el equipo de Coraza se comunicará con vos en menos de 24 horas para coordinar una visita y evaluar disponibilidad.' },
              { q: '¿Qué rubros pueden instalarse?', a: 'La ZAC está abierta a construcción, terminaciones, instalaciones, gastronomía, tecnología, moda, servicios profesionales y más.' },
              { q: '¿Hay transporte público hasta la ZAC?', a: 'Sí, líneas de colectivo urbano tienen parada en Ruta 3 y Av. Costantera, a 200 metros del ingreso principal.' },
              { q: '¿La ZAC tiene planes de expansión?', a: 'Sí. ZAC 2 está en construcción e incorporará gimnasio, tecnología, indumentaria y farmacia. ZAC 3 está proyectado para fin de 2026.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-primary/20 transition-all duration-500 h-full">
                  <h3 className="text-[14px] font-semibold text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
