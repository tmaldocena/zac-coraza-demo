import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Map from './Map'
import Reveal from './Reveal'

const contactInfo = [
  { emoji: '📍', label: 'Dirección', val: 'Ruta Provincial 3, Km 1 · Zona Sur · San Luis' },
  { emoji: '🕐', label: 'Horario', val: 'Lunes a Sábado · 8:00 a 20:00 hs' },
  { emoji: '📧', label: 'Email', val: 'info@zaccoraza.com.ar' },
  { emoji: '📱', label: 'Instagram', val: '@zaccoraza' },
]

const formFields = [
  { key: 'nombre', label: 'Nombre completo', placeholder: 'Juan García', type: 'text' },
  { key: 'empresa', label: 'Empresa / Marca', placeholder: 'Constructora San Luis S.A.', type: 'text' },
  { key: 'rubro', label: 'Rubro de interés', placeholder: 'Cerámicos, Herramientas, Gastronomía…', type: 'text' },
  { key: 'telefono', label: 'Teléfono', placeholder: '+54 266 400 0000', type: 'tel' },
  { key: 'email', label: 'Email', placeholder: 'juan@empresa.com', type: 'email' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ nombre: '', empresa: '', rubro: '', telefono: '', email: '' })
  const [formSent, setFormSent] = useState(false)

  function handleSubmit() {
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
    setFormData({ nombre: '', empresa: '', rubro: '', telefono: '', email: '' })
  }

  return (
      <section id="contacto" className="bg-brand-primary pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

          <Reveal>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-white text-brand-primary text-[11px] sm:text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
                5
              </div>
              <span className="text-[12px] sm:text-[13px] font-medium border border-brand-white/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-brand-white/80">
                Contacto y sumate al polo
              </span>
            </div>
          </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <Reveal delay={100}>
                <h2
                  className="font-bold text-brand-white leading-[1.08] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
              >
                ¿Querés tener<br />tu local en la ZAC?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                Sumate al primer polo comercial y logístico de San Luis. Más de 50 locales proyectados, tráfico de profesionales y familias de toda la provincia, y el respaldo del Grupo Coraza.
              </p>
            </Reveal>
            <Reveal delay={300}>
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
            <Reveal delay={350}>
              <Map />
            </Reveal>
            <Reveal delay={400}>
              <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 mt-6">
                <p className="text-[13px] text-brand-secondary font-semibold">Plan de expansión activo</p>
                <p className="text-[12px] text-gray-400 mt-1">
                  El polo suma nuevos locales con apoyo del gobierno provincial y municipal. Subsidios de empleo y desarrollo de infraestructura vial incluidos.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
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
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={formData[f.key as keyof typeof formData]}
                        onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-[14px] text-brand-white placeholder:text-gray-600 focus:outline-none focus:border-brand-primary/60 focus:bg-white/10 transition-all duration-300"
                      />
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
  )
}
