import { brand, contact } from '../data/brand'
import { primaryNav } from '../data/nav'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-wide">{brand.name}</p>
          <p className="mt-2 text-sm text-muted">{brand.subtitle}</p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm tracking-[0.16em] text-muted">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-5 text-sm tracking-[0.16em] text-muted">
          <li>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
              Instagram
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              Email
            </a>
          </li>
          <li>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs text-muted">
        © {brand.year} {brand.legalName}. All rights reserved.
      </p>
    </footer>
  )
}
