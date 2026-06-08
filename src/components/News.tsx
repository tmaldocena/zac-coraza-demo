import { Link } from 'react-router-dom'
import news from '../data/news'
import Reveal from './Reveal'
import TextRollButton from './TextRollButton'

export default function NewsSection() {
  return (
      <section id="noticias" className="bg-brand-primary/5 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">

          <Reveal>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary text-brand-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
                4
              </div>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
                Actualidad del polo
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
            <Reveal delay={100}>
              <h2
                className="font-bold text-brand-black leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
            >
              Noticias
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/noticias">
              <TextRollButton dark small>Ver todas las noticias</TextRollButton>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
                <div className="group bg-brand-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-t-brand-primary transition-all duration-500 cursor-pointer h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">{n.tag}</span>
                  <p className="text-[14px] font-semibold text-brand-black mt-2 leading-snug group-hover:text-brand-primary transition-colors duration-300 flex-1">{n.title}</p>
                  <p className="text-[12px] text-gray-400 mt-3">{n.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
