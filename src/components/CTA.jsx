import { contact } from '../data/brand'

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(199,255,0,0.12),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(199,255,0,0.06),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.22em] text-accent">LET&apos;S BUILD</p>
        <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.9] tracking-wide sm:text-7xl md:text-8xl">
          READY TO BUILD SOMETHING BOLD?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Have a skateboard project, brand idea or creative concept? Let&apos;s talk.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent px-7 py-4 text-sm font-semibold tracking-[0.18em] text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            START A PROJECT
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold tracking-[0.18em] text-white transition-colors hover:border-accent hover:text-accent"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  )
}
