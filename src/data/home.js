import { BedDouble, Church, Cross, GraduationCap, Landmark, Banknote, ShieldCheck, Users, Phone } from 'lucide-react'

/**
 * Home hero slides (rotate automatically). Use wide photos, ideally 1920px across.
 * Put the files in public/images/ and update the paths here.
 */
export const HERO_SLIDES = [
  { src: '/images/care-high-five.webp', alt: 'A VKQAV caregiver giving a child a high-five at home', pos: 'center 30%' },
  { src: '/images/family-picnic.webp', alt: 'A family laughing together on a picnic blanket', pos: 'center 35%' },
  { src: '/images/cleaner-elevator.webp', alt: 'A cleaner in uniform working in a commercial building', pos: 'center 40%' },
]

/** Who we serve. `division` is the division id the card links to. */
export const INDUSTRIES = [
  { icon: Users, title: 'Families & Homes', text: 'Care, childcare and household help.', division: 'domestic' },
  { icon: GraduationCap, title: 'Schools & Institutions', text: 'Upkeep, cleaning and pest control.', division: 'facility' },
  { icon: Cross, title: 'Hospitals & Clinics', text: 'Hygiene and building maintenance.', division: 'facility' },
  { icon: BedDouble, title: 'Hotels & Hospitality', text: 'Maintenance, cleaning and catering.', division: 'facility' },
  { icon: Church, title: 'Churches & Event Centers', text: 'Facility care and event catering.', division: 'procurement' },
  { icon: Landmark, title: 'Banks & Corporate Offices', text: 'Reliable upkeep for working premises.', division: 'facility' },
]

/** Confirm each of these with VKQAV: they are promises to customers. */
export const STANDARD = [
  {
    icon: ShieldCheck,
    title: 'Thoroughly vetted and trained staff',
    text: 'Identity and reference checks before anyone works for you, and a briefing on standards and conduct.',
  },
  {
    icon: Banknote,
    title: 'Transparent pricing',
    text: 'We agree the scope and the price with you before any work starts.',
  },
  {
    icon: Phone,
    title: 'Single point of contact',
    text: 'One team, one number and one quote form cover every service we offer.',
  },
]

/**
 * Replace with real client reviews, then delete `sample: true`.
 * Samples show a "Sample, replace" badge on the page. Do not publish invented reviews as real ones.
 */
// export const HOME_TESTIMONIALS = [
//   { sample: true, quote: 'A short quote from a Lagos homeowner about the care or household service they received.', name: 'Client name', role: 'Lagos homeowner' },
//   { sample: true, quote: 'A short quote from a school administrator about maintenance or cleaning work at their school.', name: 'Client name', role: 'School administrator' },
//   { sample: true, quote: 'A short quote from a construction manager about materials supply or after-construction cleaning.', name: 'Client name', role: 'Construction manager' },
// ]
