import { brand, contact } from '../data/brand'

export const projectTypes = [
  'Skateboard Graphics',
  'Branding',
  'Poster',
  'Social Media',
  'Other',
]

export const budgets = [
  'Under ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000+',
  'Custom',
]

export function buildInquiryBody(form) {
  return [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Project type: ${form.projectType}`,
    `Budget: ${form.budget}`,
    '',
    form.message.trim(),
  ].join('\n')
}

export function mailtoHref(form) {
  const subject = encodeURIComponent(`Project inquiry — ${form.projectType}`)
  const body = encodeURIComponent(buildInquiryBody(form))
  return `mailto:${contact.email}?subject=${subject}&body=${body}`
}

export function whatsappHref(form) {
  const greeting = `Hi ${brand.firstName}, I have a project inquiry.`
  const text = encodeURIComponent(`${greeting}\n\n${buildInquiryBody(form)}`)
  const base = contact.whatsappUrl.replace(/\?.*$/, '')
  return `${base}?text=${text}`
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export async function sendInquiry(form) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        projectType: form.projectType,
        budget: form.budget,
        message: form.message,
        _subject: `Project inquiry — ${form.projectType}`,
      }),
    })

    if (!response.ok) {
      throw new Error('Could not send the inquiry.')
    }

    return { method: 'endpoint' }
  }

  window.location.assign(mailtoHref(form))
  return { method: 'mailto' }
}
