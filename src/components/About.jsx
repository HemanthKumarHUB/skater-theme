import { brand } from '../data/brand'
import SectionReveal from './SectionReveal'

const tags = ['SKATEBOARD DESIGN', 'GRAPHIC DESIGN', 'VISUAL CREATIVE', 'SOCIAL MEDIA']

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <img
            src="/images/about-portrait.svg"
            alt={`${brand.firstName} — skateboard designer portrait`}
            className="aspect-[4/5] w-full max-w-md object-cover"
          />
        </SectionReveal>
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">06 — ABOUT</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
            THE PERSON BEHIND THE WORK
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Hi, I&apos;m {brand.firstName} — a creative designer passionate about skateboard
            graphics, visual design and digital creativity.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I believe good design should have personality. My goal is to create visuals that
            feel bold, memorable and authentic.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 px-3 py-1.5 text-xs tracking-[0.16em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex bg-accent px-6 py-3 text-sm font-semibold tracking-[0.16em] text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            CONTACT ME
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
