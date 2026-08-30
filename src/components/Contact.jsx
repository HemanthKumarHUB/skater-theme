import { useState } from 'react'
import { AtSign, Mail, MessageCircle } from 'lucide-react'
import { contact } from '../data/brand'
import {
  budgets,
  isValidEmail,
  projectTypes,
  sendInquiry,
  whatsappHref,
} from '../lib/inquiry'

const emptyForm = {
  name: '',
  email: '',
  projectType: 'Skateboard Graphics',
  budget: 'Custom',
  message: '',
  company: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (form.company) {
      setStatus('sent')
      return
    }

    if (!form.name.trim() || form.message.trim().length < 12) {
      setError('Add your name and a short project note (at least 12 characters).')
      setStatus('error')
      return
    }

    if (!isValidEmail(form.email)) {
      setError('Enter a valid email so I can reply.')
      setStatus('error')
      return
    }

    setStatus('sending')
    const link = whatsappHref(form)

    try {
      const result = await sendInquiry(form)
      setWhatsappLink(link)
      setStatus('sent')
      setForm(emptyForm)
      if (result.method === 'mailto') {
        setError('')
      }
    } catch {
      setWhatsappLink(link)
      setError('Email send failed. Use WhatsApp below or write me directly.')
      setStatus('error')
    }
  }

  const fieldClass =
    'mt-2 w-full appearance-none border border-white/10 bg-bg px-4 py-3 text-white outline-none transition-colors focus:border-accent'

  return (
    <section id="contact" className="border-t border-white/5 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent">09 — CONTACT</p>
          <h2 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Tell me about your project. Submit the form to open a pre-filled email, or message me
            on Instagram and WhatsApp.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-accent"
              >
                <AtSign size={18} />
                {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 text-white hover:text-accent"
              >
                <Mail size={18} />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-accent"
              >
                <MessageCircle size={18} />
                {contact.whatsappLabel}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-card p-6 md:p-8" noValidate>
          <div className="sr-only" aria-hidden="true">
            <label>
              Company
              <input
                tabIndex={-1}
                autoComplete="off"
                name="company"
                value={form.company}
                onChange={onChange}
              />
            </label>
          </div>
          <label className="block text-xs tracking-[0.16em] text-muted">
            NAME
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              className={fieldClass}
              autoComplete="name"
            />
          </label>
          <label className="mt-5 block text-xs tracking-[0.16em] text-muted">
            EMAIL
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className={fieldClass}
              autoComplete="email"
            />
          </label>
          <label className="mt-5 block text-xs tracking-[0.16em] text-muted">
            PROJECT TYPE
            <select
              name="projectType"
              value={form.projectType}
              onChange={onChange}
              className={fieldClass}
            >
              {projectTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 block text-xs tracking-[0.16em] text-muted">
            BUDGET
            <select name="budget" value={form.budget} onChange={onChange} className={fieldClass}>
              {budgets.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 block text-xs tracking-[0.16em] text-muted">
            MESSAGE
            <textarea
              required
              name="message"
              rows="5"
              minLength={12}
              value={form.message}
              onChange={onChange}
              className={`${fieldClass} resize-y`}
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-7 w-full bg-accent py-4 text-sm font-semibold tracking-[0.18em] text-bg transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60"
          >
            {status === 'sending' ? 'SENDING…' : 'SEND PROJECT REQUEST'}
          </button>
          {status === 'sent' ? (
            <p className="mt-4 text-sm leading-relaxed text-muted" role="status">
              Inquiry ready — your email app should open with the message filled in. Prefer chat?{' '}
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Continue on WhatsApp
                </a>
              ) : null}
            </p>
          ) : error ? (
            <p className="mt-4 text-sm leading-relaxed text-red-400" role="alert">
              {error}{' '}
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  WhatsApp
                </a>
              ) : null}
            </p>
          ) : (
            <p className="mt-4 text-sm text-muted">
              Submitting opens a pre-filled email to {contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
