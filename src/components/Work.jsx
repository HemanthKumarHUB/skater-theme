import { useMemo, useState } from 'react'
import { filters, projects } from '../data/projects'
import ProjectModal from './ProjectModal'
import SectionReveal from './SectionReveal'

export default function Work() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((project) => project.filter === active)
  }, [active])

  const onFilterKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const index = filters.findIndex((filter) => filter.id === active)
    const offset = event.key === 'ArrowRight' ? 1 : -1
    const next = filters[(index + offset + filters.length) % filters.length]
    setActive(next.id)
    event.currentTarget
      .querySelector(`[data-filter="${next.id}"]`)
      ?.focus()
  }

  return (
    <section id="work" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">02 — PORTFOLIO</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-7xl">SELECTED WORK</h2>
          <p className="mt-4 max-w-xl text-muted">
            Skateboard graphics, brand systems, posters and social work — built for the culture.
          </p>
        </SectionReveal>

        <div
          className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter projects"
          onKeyDown={onFilterKeyDown}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              data-filter={filter.id}
              id={`filter-${filter.id}`}
              aria-selected={active === filter.id}
              aria-controls="project-grid"
              tabIndex={active === filter.id ? 0 : -1}
              onClick={() => setActive(filter.id)}
              className={`shrink-0 px-4 py-2 text-xs tracking-[0.16em] transition-colors duration-200 ${
                active === filter.id
                  ? 'bg-accent text-bg'
                  : 'border border-white/10 text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          id="project-grid"
          role="tabpanel"
          aria-labelledby={`filter-${active}`}
          key={active}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.length === 0 ? (
            <p className="text-muted">No projects in this category yet.</p>
          ) : (
            visible.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelected(project)}
                className="group relative overflow-hidden bg-card text-left reveal"
                aria-label={`Open project ${project.title}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="text-xs tracking-[0.18em] text-accent">{project.category}</p>
                  <h3 className="mt-1 font-display text-3xl tracking-wide">{project.title}</h3>
                </div>
                <div className="p-4 sm:hidden">
                  <p className="text-xs tracking-[0.18em] text-accent">{project.category}</p>
                  <h3 className="font-display text-2xl tracking-wide">{project.title}</h3>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
