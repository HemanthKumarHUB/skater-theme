import { AtSign } from 'lucide-react'
import { contact } from '../data/brand'
import SectionReveal from './SectionReveal'

export default function Follow() {
  return (
    <section className="border-t border-white/5 px-5 py-20 md:px-8 md:py-24">
      <SectionReveal className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.22em] text-accent">07 — SOCIAL</p>
        <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">FOLLOW THE WORK</h2>
        <p className="mt-4 max-w-xl text-muted">
          More creative work, experiments and new projects on Instagram.
        </p>
        <p className="mt-6 font-display text-4xl text-white sm:text-5xl">
          {contact.instagramHandle}
        </p>
        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white transition-colors hover:border-accent hover:text-accent"
        >
          <AtSign size={18} />
          FOLLOW ON INSTAGRAM
        </a>
      </SectionReveal>
    </section>
  )
}
