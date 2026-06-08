import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function TextRollButton({
  children,
  dark = false,
  small = false,
  fullWidth = false,
  outline = false,
  onClick,
}: {
  children: React.ReactNode
  dark?: boolean
  small?: boolean
  fullWidth?: boolean
  outline?: boolean
  onClick?: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const h = small ? 18 : 20

  const variantClass = outline
    ? 'border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-brand-white'
    : dark
      ? 'bg-brand-black text-brand-white hover:bg-[#1f0404]'
      : 'bg-brand-primary text-brand-white hover:bg-[#002a52]'

  const circleClass = outline
    ? `border-2 border-brand-secondary text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-white ${small ? 'w-5 h-5' : 'w-6 h-6'}`
    : small
      ? `w-5 h-5 ${dark ? 'bg-white/15' : 'bg-white/25'}`
      : `w-6 h-6 ${dark ? 'bg-white/15' : 'bg-white/25'}`

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group inline-flex items-center gap-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] active:scale-[0.98] ${
        small && !outline ? 'pl-4 pr-1.5 py-1.5 text-[13px] font-medium'
        : outline && small ? 'pl-3.5 pr-1.5 py-1.5 text-[13px] font-medium'
        : outline ? 'pl-5 pr-2 py-2 text-[13px] font-medium'
        : 'pl-5 pr-2 py-2 text-[13px] font-medium'
      } ${variantClass} ${fullWidth ? 'w-full justify-center' : ''}`}
    >
      <span
        className="overflow-hidden flex flex-col"
        style={{ height: `${h}px`, lineHeight: `${h}px` }}
      >
        <span
          style={{
            transform: hovered ? `translateY(-${h}px)` : 'translateY(0)',
            transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)',
            display: 'block',
          }}
        >
          {children}
        </span>
        <span
          style={{
            transform: hovered ? `translateY(-${h}px)` : 'translateY(0)',
            transition: 'transform 0.5s cubic-bezier(0.25,0.1,0.25,1)',
            display: 'block',
          }}
        >
          {children}
        </span>
      </span>
      <span
        className={`rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleClass}`}
      >
        <ArrowRight size={small ? 10 : 12} />
      </span>
    </button>
  )
}
