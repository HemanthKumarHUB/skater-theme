import { useInView } from '../hooks/useInView'

export default function SectionReveal({ children, className = '' }) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} className={`${className} ${visible ? 'reveal' : 'opacity-0'}`}>
      {children}
    </div>
  )
}
