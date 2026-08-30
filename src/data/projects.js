/**
 * Portfolio projects — edit titles, images, and copy here.
 * image: files in /public/images/ — e.g. "/images/your-file.jpg"
 * filter: "graphics" | "branding" | "posters" | "social"
 */
export const filters = [
  { id: 'all', label: 'ALL' },
  { id: 'graphics', label: 'SKATEBOARD GRAPHICS' },
  { id: 'branding', label: 'BRANDING' },
  { id: 'posters', label: 'POSTERS' },
  { id: 'social', label: 'SOCIAL MEDIA' },
]

export const projects = [
  {
    id: 1,
    title: 'Urban Motion',
    category: 'Skateboard Graphic',
    filter: 'graphics',
    image: '/images/project-01.svg',
    description:
      'A high-energy deck graphic built around speed, type, and street motion — made to read from the park and on camera.',
    details: ['Full-board graphic', 'Print-ready files'],
  },
  {
    id: 2,
    title: 'Concrete Dreams',
    category: 'Board Design',
    filter: 'graphics',
    image: '/images/project-02.svg',
    description:
      'Raw concrete texture meeting sharp graphic marks for a full-board layout with grit and contrast.',
    details: ['Texture-led direction', 'Deck + grip study'],
  },
  {
    id: 3,
    title: 'Street Lines',
    category: 'Brand Visual',
    filter: 'branding',
    image: '/images/project-03.svg',
    description:
      'A tight visual system of lines, marks, and type for a skate-led brand that stays consistent across decks and merch.',
    details: ['Mark + system', 'Brand applications'],
  },
  {
    id: 4,
    title: 'Night Ride',
    category: 'Poster Design',
    filter: 'posters',
    image: '/images/project-04.svg',
    description:
      'Nocturnal poster energy with bold type and a single graphic hit — built for night sessions and drop nights.',
    details: ['A2 poster', 'Social crop'],
  },
  {
    id: 5,
    title: 'Grip Tape Study',
    category: 'Skateboard Graphic',
    filter: 'graphics',
    image: '/images/project-05.svg',
    description:
      'Grain, grit, and contrast as the main visual language — a deck that feels like the street it rides.',
    details: ['Deck graphic', 'Grit overlays'],
  },
  {
    id: 6,
    title: 'Drop Signal',
    category: 'Social Media',
    filter: 'social',
    image: '/images/project-06.svg',
    description:
      'Square and story-ready graphics for a product drop announcement, locked to one visual system.',
    details: ['Feed + stories', 'Drop sequence'],
  },
  {
    id: 7,
    title: 'Park Language',
    category: 'Brand Visual',
    filter: 'branding',
    image: '/images/project-07.svg',
    description:
      'A mark and supporting assets inspired by park geometry and flow — simple enough to stamp, strong enough to own.',
    details: ['Logo suite', 'Supporting marks'],
  },
  {
    id: 8,
    title: 'After Hours',
    category: 'Poster Design',
    filter: 'posters',
    image: '/images/project-08.svg',
    description:
      'Event poster for a night session: loud type, dark field, one accent. Built to work on walls and in stories.',
    details: ['Campaign poster', 'Event lockup'],
  },
  {
    id: 9,
    title: 'Rail Cut',
    category: 'Skateboard Graphic',
    filter: 'graphics',
    image: '/images/project-09.svg',
    description:
      'A split-composition deck graphic with a hard diagonal cut — aggressive, readable, and print-friendly.',
    details: ['Split composition', 'Production files'],
  },
  {
    id: 10,
    title: 'Session Notes',
    category: 'Social Media',
    filter: 'social',
    image: '/images/project-10.svg',
    description:
      'A repeating content system for Instagram covers and posts so every session still looks like the same brand.',
    details: ['Template system', 'Cover set'],
  },
]
