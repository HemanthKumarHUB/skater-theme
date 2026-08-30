import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const lastFocusRef = useRef(null)

  useLockBodyScroll(Boolean(project))

  useEffect(() => {
    if (!project) return undefined

    lastFocusRef.current = document.activeElement
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lastFocusRef.current?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-4 sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-white/10 bg-surface p-4 sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs tracking-[0.2em] text-accent">{project.category}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center text-white"
            aria-label="Close project"
          >
            <X size={22} />
          </button>
        </div>
        <img
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          className="mt-3 aspect-[4/5] w-full object-cover sm:aspect-[16/10]"
        />
        <h3 id="project-title" className="mt-5 font-display text-4xl tracking-wide">
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-muted">{project.description}</p>
        {project.details?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.details.map((item) => (
              <li
                key={item}
                className="border border-white/10 px-3 py-1 text-xs tracking-[0.14em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
