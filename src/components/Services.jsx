import { ArrowUpRight, Layers, Megaphone, Palette, Smartphone } from 'lucide-react'
import { services } from '../data/services'
import SectionReveal from './SectionReveal'

const icons = {
  palette: Palette,
  layers: Layers,
  megaphone: Megaphone,
  smartphone: Smartphone,
}

export default function Services() {
  return (
    <section id="services" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">03 — SERVICES</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-7xl">WHAT I DO</h2>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article
                key={service.number}
                className="group border border-white/8 bg-card p-6 transition-colors duration-300 hover:border-accent/40 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <p className="text-xs tracking-[0.2em] text-accent">SERVICE {service.number}</p>
                  {Icon ? <Icon className="text-muted" size={22} aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-8 font-display text-3xl tracking-wide md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-muted">{service.text}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.16em] text-white transition-colors hover:text-accent"
                >
                  START A PROJECT
                  <ArrowUpRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
