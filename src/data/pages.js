import {
  Award,
  BadgeCheck,
  Banknote,
  BedDouble,
  BookOpen,
  Church,
  Cross,
  Eye,
  FileCheck,
  GraduationCap,
  Landmark,
  LayoutGrid,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react'

/* ---------- Home ---------- */

export const HOME_HERO_IMAGES = [
  { src: '/images/care-high-five.webp', alt: 'A VKQAV caregiver giving a child a high-five at home' },
  { src: '/images/cleaner-elevator.webp', alt: 'A cleaner in uniform working in a commercial building' },
  { src: '/images/delivery-truck.webp', alt: 'A delivery truck unloading goods' },
]

export const HOME_SERVICES = [
  {
    no: '01',
    title: 'Domestic & Family Care',
    to: '/services/domestic-family-care',
    image: '/images/family-picnic.webp',
    alt: 'A family laughing together on a picnic blanket',
    points: ['Nannies & elderly caregiving', 'Domestic helps', 'Errands & personal shopping'],
  },
  {
    no: '02',
    title: 'Facility & Commercial Maintenance',
    to: '/services/facility-maintenance',
    image: '/images/cleaner-lobby.webp',
    alt: 'A cleaner mopping a building lobby',
    points: ['Schools, hospitals, hotels & banks', 'General fumigation', 'Post-construction cleaning'],
  },
  {
    no: '03',
    title: 'Catering & Procurement',
    to: '/services/procurement-catering',
    image: '/images/nigerian-food.webp',
    alt: 'A spread of Nigerian dishes including jollof rice',
    points: ['Event & corporate catering', 'Building materials supply', 'Bulk & general procurement'],
  },
  {
    no: '04',
    title: 'Real Estate & Logistics',
    to: '/services/real-estate-logistics',
    image: '/images/townhouses.webp',
    alt: 'A row of modern townhouses',
    points: ['Property sales & leasing', 'Goods delivery & transport'],
  },
]

export const TRUST = [
  { icon: ShieldCheck, title: 'Vetted professionals', text: 'Identity and background checks before anyone works for you.' },
  { icon: Banknote, title: 'Affordable solutions', text: 'Fair pricing for families and institutions alike.' },
  { icon: LayoutGrid, title: 'One-stop service hub', text: 'Home, property, food and logistics handled by one team.' },
  { icon: Award, title: 'Quality guaranteed', text: 'We stand behind the work, and put things right if needed.' },
]

export const WHO_WE_SERVE = [
  { icon: Users, label: 'Families', to: '/services/domestic-family-care' },
  { icon: GraduationCap, label: 'Schools', to: '/services/facility-maintenance' },
  { icon: Cross, label: 'Hospitals', to: '/services/facility-maintenance' },
  { icon: BedDouble, label: 'Hotels', to: '/services/facility-maintenance' },
  { icon: Church, label: 'Churches', to: '/services/facility-maintenance' },
  { icon: Landmark, label: 'Banks', to: '/services/facility-maintenance' },
]

/** Replace with real client reviews, then remove `sample: true`. */
export const TESTIMONIALS = [
  { sample: true, quote: 'Short quote from a family client about the care or domestic service they received.', name: 'Client name', role: 'Family client, Lagos' },
  { sample: true, quote: 'Short quote from a facility manager about maintenance or cleaning work.', name: 'Client name', role: 'Facility manager' },
  { sample: true, quote: 'Short quote from an event or corporate client about catering or procurement.', name: 'Client name', role: 'Corporate client' },
]

/* ---------- About ---------- */

export const VALUES = [
  { icon: BadgeCheck, title: 'Reliability', text: 'We show up when we say we will, every time.' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Honest pricing, honest advice, honest work.' },
  { icon: Banknote, title: 'Affordability', text: 'Good service should be within reach of everyone.' },
  { icon: Award, title: 'Excellence', text: 'Careful, finished work we are proud to put our name to.' },
]

/** Confirm each step with VKQAV before launch: this section is a promise to customers. */
export const VETTING = [
  { icon: FileCheck, title: 'Identity verification', text: 'Every caregiver, helper and field worker is identified and recorded.' },
  { icon: Search, title: 'Background and reference checks', text: 'We check past work and references before placement.' },
  { icon: BookOpen, title: 'Training and briefing', text: 'Staff are briefed on standards, safety and respectful conduct.' },
  { icon: Eye, title: 'Ongoing supervision', text: 'Our team follows up with clients and reviews the work.' },
]

export const TEAM = [
  { name: 'Full name', role: 'Managing Director' },
  { name: 'Full name', role: 'Operations Manager' },
  { name: 'Full name', role: 'Care Services Lead' },
  { name: 'Full name', role: 'Facilities Lead' },
]

/* ---------- Quote ---------- */

export const QUOTE_OPTIONS = [
  'Domestic & Family Care',
  'Facility Management',
  'Catering',
  'Procurement',
  'Real Estate',
  'Logistics & Delivery',
]

export const FREQUENCIES = ['One-time service', 'Daily', 'Weekly', 'Monthly contract']

/** Maps a page or sub-service title (sent from "Request this service") to quote options. */
export const PREFILL = {
  'Domestic & Family Care': ['Domestic & Family Care'],
  'Caregiving & Nannies': ['Domestic & Family Care'],
  'Domestic Helps & Sales Reps': ['Domestic & Family Care'],
  'Errands & Personal Market Shopping': ['Domestic & Family Care'],
  'Facility Management & Maintenance': ['Facility Management'],
  'Institutional Facility Management': ['Facility Management'],
  'General Fumigation': ['Facility Management'],
  'After-Construction Cleaning': ['Facility Management'],
  'Procurement & Catering': ['Catering', 'Procurement'],
  'Catering Services': ['Catering'],
  'Building Materials Procurement': ['Procurement'],
  'General Procurement': ['Procurement'],
  'Real Estate & Logistics': ['Real Estate', 'Logistics & Delivery'],
  'Real Estate Agency': ['Real Estate'],
  'Logistics & Delivery': ['Logistics & Delivery'],
}
