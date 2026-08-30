import SectionReveal from './SectionReveal'

export default function Intro() {
  return (
    <section id="intro" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <SectionReveal className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-accent">
          01 — ABOUT THE WORK
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl">
          VISUALS BUILT FOR THE SKATE CULTURE.
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          I create bold, distinctive visuals for skateboard brands, riders,
          creators and businesses. My focus is on graphics that look great,
          communicate quickly and feel authentic to the culture.
        </p>
      </SectionReveal>
    </section>
  )
}
