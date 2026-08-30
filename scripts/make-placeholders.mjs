import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
mkdirSync(dir, { recursive: true })

const decks = [
  { file: 'project-01.svg', bg: '#141414', a: '#C7FF00', b: '#ffffff', title: 'URBAN MOTION' },
  { file: 'project-02.svg', bg: '#1a1814', a: '#C7FF00', b: '#8a8a8a', title: 'CONCRETE' },
  { file: 'project-03.svg', bg: '#101014', a: '#ffffff', b: '#C7FF00', title: 'STREET LINES' },
  { file: 'project-04.svg', bg: '#0c0c12', a: '#C7FF00', b: '#3a3a3a', title: 'NIGHT RIDE' },
  { file: 'project-05.svg', bg: '#161616', a: '#9a9a9a', b: '#C7FF00', title: 'GRIP' },
  { file: 'project-06.svg', bg: '#111111', a: '#C7FF00', b: '#ffffff', title: 'DROP' },
  { file: 'project-07.svg', bg: '#12180f', a: '#C7FF00', b: '#ffffff', title: 'PARK' },
  { file: 'project-08.svg', bg: '#0e0e0e', a: '#ffffff', b: '#C7FF00', title: 'AFTER HOURS' },
  { file: 'project-09.svg', bg: '#17120f', a: '#C7FF00', b: '#ffffff', title: 'RAIL CUT' },
  { file: 'project-10.svg', bg: '#101010', a: '#C7FF00', b: '#666666', title: 'SESSION' },
]

function projectSvg(item, index) {
  const offset = index * 18
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img">
  <rect width="800" height="1000" fill="${item.bg}"/>
  <g opacity="0.18">
    <rect x="${-40 + offset}" y="80" width="900" height="8" fill="${item.a}" transform="rotate(${-12 + index} 400 500)"/>
    <rect x="${-80 + offset}" y="220" width="980" height="3" fill="${item.b}" transform="rotate(${8 - index} 400 500)"/>
  </g>
  <ellipse cx="400" cy="500" rx="210" ry="430" fill="#0a0a0a" stroke="${item.a}" stroke-width="10"/>
  <ellipse cx="400" cy="500" rx="186" ry="406" fill="#111"/>
  <polygon points="${200 + index * 8},180 ${620 - index * 6},320 ${580},820 ${220},740" fill="${item.a}" opacity="0.92"/>
  <text x="400" y="520" text-anchor="middle" fill="#080808" font-family="Anton, Impact, sans-serif" font-size="64">${item.title}</text>
  <text x="400" y="560" text-anchor="middle" fill="#080808" font-family="Inter, sans-serif" font-size="16" letter-spacing="6">PLACEHOLDER GRAPHIC</text>
  <circle cx="400" cy="170" r="18" fill="${item.b}"/>
  <circle cx="400" cy="830" r="18" fill="${item.b}"/>
</svg>`
}

decks.forEach((item, index) => {
  writeFileSync(join(dir, item.file), projectSvg(item, index))
})

const hero = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 980" role="img">
  <defs>
    <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a1a1a"/>
      <stop offset="1" stop-color="#0d0d0d"/>
    </linearGradient>
  </defs>
  <ellipse cx="210" cy="490" rx="168" ry="460" fill="url(#wood)" stroke="#C7FF00" stroke-width="8"/>
  <ellipse cx="210" cy="490" rx="148" ry="438" fill="#101010"/>
  <path d="M70 220 L350 310 L330 760 L90 690 Z" fill="#C7FF00"/>
  <text x="210" y="500" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="54" fill="#080808">RIDES</text>
  <text x="210" y="540" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" letter-spacing="4" fill="#080808">PLACEHOLDER DECK</text>
  <rect x="186" y="140" width="48" height="18" rx="9" fill="#2a2a2a"/>
  <rect x="186" y="822" width="48" height="18" rx="9" fill="#2a2a2a"/>
</svg>`

writeFileSync(join(dir, 'hero-board.svg'), hero)

const portrait = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" role="img">
  <rect width="640" height="800" fill="#111111"/>
  <rect x="0" y="0" width="12" height="800" fill="#C7FF00"/>
  <circle cx="320" cy="280" r="110" fill="#1c1c1c" stroke="#C7FF00" stroke-width="3"/>
  <rect x="180" y="420" width="280" height="260" rx="140" fill="#1c1c1c" stroke="#C7FF00" stroke-width="3"/>
  <text x="40" y="760" font-family="Anton, Impact, sans-serif" font-size="36" fill="#ffffff">PHOTO PLACEHOLDER</text>
</svg>`

writeFileSync(join(dir, 'about-portrait.svg'), portrait)

console.log('placeholders written')
