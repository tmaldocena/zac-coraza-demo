import { useNavigate } from 'react-router-dom'
import Reveal from './Reveal'
import TextRollButton from './TextRollButton'
import StatCounter from './StatCounter'
import { detailStats } from '../data/stats'

export default function AboutSection() {
  const navigate = useNavigate()
  return (
    <section id="el-polo" className="bg-brand-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

        <Reveal>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary text-brand-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
              1
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-brand-primary/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
              Introduciendo la ZAC
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-bold text-brand-black leading-[1.12] tracking-[-0.02em] mb-12 sm:mb-16 lg:mb-28"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
          >
            Estrategia, logística y experiencia, / todo en 8 hectáreas / en la Ruta 3 de San Luis.
          </h2>
        </Reveal>

        <div className="lg:hidden">
          <Reveal delay={150}>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-brand-black mb-6">
              A través de un modelo one-stop-shop industrial, la ZAC centraliza marcas líderes de la construcción, terminaciones, herramientas y servicios. Más gastronomía y espacios de esparcimiento para toda la familia.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mb-8">
              <TextRollButton outline onClick={() => navigate('/el-polo')}>Conocé el proyecto</TextRollButton>
            </div>
          </Reveal>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Reveal delay={250} className="sm:w-[45%]">
              <div className="aspect-[438/346] rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="https://pxbcdn.eldiariodelarepublica.com/republica/102023/1697714497659.webp?cw=770&ch=440&extw=jpg"
                  alt="Polo de la Construcción ZAC"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={300} className="sm:w-[55%]">
              <div className="aspect-[900/600] rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="/zac-preview.webp"
                  alt="Interior ZAC"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
          <Reveal delay={100} className="self-end">
            <div className="aspect-[438/346] rounded-2xl overflow-hidden">
              <img
                src="https://pxbcdn.eldiariodelarepublica.com/republica/102023/1697714497659.webp?cw=770&ch=440&extw=jpg"
                alt="Polo de la Construcción ZAC"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
            </div>
          </Reveal>

          <Reveal delay={200} className="self-start flex justify-end">
            <div className="max-w-[320px]">
              <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-brand-black mb-6 whitespace-nowrap">
                A través de investigación,<br />
                pensamiento creativo<br />
                e iteración comercial,<br />
                la ZAC ayuda a marcas<br />
                líderes a maximizar<br />
                su potencial en San Luis.
              </p>
              <TextRollButton outline onClick={() => navigate('/el-polo')}>Sobre el proyecto</TextRollButton>
            </div>
          </Reveal>

          <Reveal delay={150} className="self-end">
            <div className="aspect-[3/2] rounded-2xl overflow-hidden">
              <img
                src="/zac-preview.webp"
                alt="Interior ZAC"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 lg:mt-20">
          {detailStats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <StatCounter value={s.value} label={s.label} sub={s.sub} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
