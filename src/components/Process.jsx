import { steps } from '../data/process'
import SectionReveal from './SectionReveal'

export default function Process() {
  return (
    <section id="process" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">05 — PROCESS</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-7xl">HOW IT WORKS</h2>
        </SectionReveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <span
            className="absolute top-5 hidden h-px bg-white/10 md:left-0 md:right-0 md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="relative z-10 mb-6 inline-flex size-10 items-center justify-center border border-accent bg-bg text-xs text-accent">
                {step.number}
              </span>
              <h3 className="font-display text-3xl tracking-wide">
                {step.number} — {step.title}
              </h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
