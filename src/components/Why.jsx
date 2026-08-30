import { points } from '../data/why'
import SectionReveal from './SectionReveal'

export default function Why() {
  return (
    <section className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">04 — WHY</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-7xl">WHY WORK WITH ME</h2>
        </SectionReveal>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {points.map((point) => (
            <article
              key={point.number}
              className="grid gap-3 py-8 md:grid-cols-[8rem_1fr_1.2fr] md:items-baseline"
            >
              <p className="text-accent">{point.number}</p>
              <h3 className="font-display text-3xl tracking-wide md:text-4xl">{point.title}</h3>
              <p className="text-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
