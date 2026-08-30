import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand } from '../data/brand'
import { primaryNav } from '../data/nav'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useLockBodyScroll(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerClass = open
    ? 'fixed inset-0 z-[55] flex flex-col bg-bg'
    : `fixed inset-x-0 top-0 z-[55] transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-bg/80 backdrop-blur-md'
          : 'bg-transparent'
      }`

  return (
    <header className={headerClass}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-white md:text-xl"
        >
          {brand.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm tracking-[0.18em] text-muted lg:flex">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden bg-accent px-4 py-2 text-xs font-semibold tracking-[0.16em] text-bg transition-transform duration-200 hover:scale-[1.03] lg:inline-flex"
        >
          LET&apos;S WORK
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-bg px-6 py-10 lg:hidden"
        >
          <ul className="flex flex-col gap-6">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-5xl tracking-wide text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex w-full items-center justify-center bg-accent py-4 text-sm font-semibold tracking-[0.18em] text-bg"
            onClick={() => setOpen(false)}
          >
            LET&apos;S WORK
          </a>
        </div>
      )}
    </header>
  )
}
