import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s cubic-bezier(0.32,0.72,0,1) ${delay}ms, transform 0.75s cubic-bezier(0.32,0.72,0,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
