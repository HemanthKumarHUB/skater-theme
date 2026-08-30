import { useEffect, useRef } from 'react'
import { brand } from '../data/brand'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function Hero() {
  const visualRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const node = visualRef.current
    if (!node || reducedMotion) return undefined

    const onMove = (event) => {
      const rect = node.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      node.style.transform = `translate3d(${x * 18}px, ${y * 12}px, 0)`
    }

    const onLeave = () => {
      node.style.transform = 'translate3d(0, 0, 0)'
    }

    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
    return () => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', onLeave)
    }
  }, [reducedMotion])

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-10 pt-28 md:px-8 md:pb-12 lg:justify-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(199,255,0,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            AVAILABLE FOR PROJECTS
          </p>
          <h1 className="font-display text-[18vw] leading-[0.86] tracking-wide text-white sm:text-[14vw] lg:text-[8.4rem]">
            DESIGN
            <br />
            THAT
            <br />
            RIDES.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Creative skateboard graphics, visuals and digital experiences built
            for brands, riders and the culture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-accent px-6 py-3.5 text-sm font-semibold tracking-[0.16em] text-bg transition-transform duration-200 hover:scale-[1.03]"
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 text-sm font-semibold tracking-[0.16em] text-white transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              LET&apos;S WORK TOGETHER
            </a>
          </div>
          <p className="mt-8 text-xs tracking-[0.2em] text-muted">{brand.subtitle}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div ref={visualRef} className="transition-transform duration-200 ease-out">
            <img
              src="/images/hero-board.svg"
              alt="Skateboard deck graphic for Hemanth Creative"
              className={`mx-auto w-[70%] max-w-sm drop-shadow-2xl lg:w-[78%] ${reducedMotion ? '' : 'board-float'}`}
            />
          </div>
        </div>
      </div>

      <a
        href="#intro"
        className="relative z-10 mx-auto mt-12 flex items-end justify-center text-xs tracking-[0.22em] text-muted"
      >
        <span className={reducedMotion ? '' : 'scroll-nudge'}>SCROLL TO EXPLORE ↓</span>
      </a>
    </section>
  )
}
