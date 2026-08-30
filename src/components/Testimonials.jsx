import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionReveal from './SectionReveal'

export default function Testimonials() {
  return (
    <section className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">08 — WORDS</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-7xl">TESTIMONIALS</h2>
          <p className="mt-4 max-w-xl text-muted">
            What collaborators say about the work — graphics, campaigns, and the files that ship.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="flex flex-col bg-card p-6">
              <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-lg leading-relaxed text-white">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-3">
                {item.image ? (
                  <img src={item.image} alt="" className="size-10 object-cover" />
                ) : (
                  <span
                    className="inline-flex size-10 items-center justify-center bg-surface text-xs tracking-[0.12em] text-muted"
                    aria-hidden="true"
                  >
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
