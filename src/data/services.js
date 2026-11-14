import {
  Building,
  Building2,
  ChefHat,
  Banknote,
  Heart,
  Home,
  Key,
  MapPin,
  Search,
  Truck,
} from 'lucide-react'

export const PROCUREMENT_CATERING = {
  title: 'Procurement & Catering',
  heroIcon: ChefHat,
  headline: 'Good food and the right supplies, delivered.',
  intro:
    'Whether you are hosting an event, building a home or stocking a business, we source, prepare and deliver what you need.',
  audience: ['Event organisers', 'Home builders', 'Businesses'],
  services: [
    {
      title: 'Catering Services',
      icon: ChefHat,
      tone: 'gold',
      imageLabel: 'Nigerian dishes served for an event',
      image: '/images/nigerian-food.webp',
      summary: 'Private parties, corporate events and daily meal supply.',
      points: ['Private parties and events', 'Corporate and office catering', 'Daily meal supply'],
    },
    {
      title: 'Building Materials Procurement',
      icon: Building2,
      tone: 'bronze',
      imageLabel: 'building materials on site',
      summary: 'Sourcing quality cement, tiles, iron rods and finishings direct to site.',
      points: ['Quality-checked materials', 'Competitive sourcing', 'Delivered directly to site'],
    },
    {
      title: 'General Procurement',
      icon: Banknote,
      tone: 'teal',
      imageLabel: 'supplies and stock',
      summary: 'Bulk purchasing for corporate or domestic needs.',
      points: ['Office and household supplies', 'Bulk purchasing', 'Clear receipts and records'],
    },
  ],
}

export const FACILITY_MAINTENANCE = {
  title: 'Facility Management & Maintenance',
  heroIcon: Building2,
  headline: 'Clean, safe and well-maintained premises.',
  intro:
    'From routine upkeep to deep cleaning after building work, we keep institutions and commercial spaces running properly, so you can focus on your core business.',
  audience: ['Schools', 'Hospitals', 'Hotels', 'Banks', 'Churches', 'Commercial hubs'],
  services: [
    {
      title: 'Institutional Facility Management',
      icon: Building2,
      tone: 'teal',
      imageLabel: 'a cleaner working in a commercial building',
      image: '/images/cleaner-elevator.webp',
      summary: 'Routine building upkeep and structural maintenance.',
      points: ['Scheduled maintenance', 'Repairs and structural upkeep', 'Trained, supervised crews'],
    },
    {
      title: 'General Fumigation',
      icon: Search,
      tone: 'teal',
      imageLabel: 'fumigation technician',
      summary: 'Pest control for residential and commercial spaces.',
      points: ['Homes, offices and institutions', 'Safe, expert treatment', 'One-off or scheduled visits'],
    },
    {
      title: 'After-Construction Cleaning',
      icon: Building,
      tone: 'teal',
      imageLabel: 'a cleaner mopping a building lobby',
      image: '/images/cleaner-lobby.webp',
      summary: 'Deep cleaning for newly built or renovated sites.',
      points: ['Dust, debris and paint removal', 'Floors, glass and fittings', 'Ready-to-use handover'],
    },
  ],
}

export const REAL_ESTATE_LOGISTICS = {
  title: 'Real Estate & Logistics',
  heroIcon: Truck,
  headline: 'Find the right property and move what matters.',
  intro:
    'Buy, sell or rent with an agent who explains every step, and move goods safely across the city with a reliable team.',
  audience: ['Property seekers', 'Buyers and sellers', 'Businesses needing transport'],
  services: [
    {
      title: 'Real Estate Agency',
      icon: Key,
      tone: 'teal',
      imageLabel: 'a row of modern townhouses',
      image: '/images/townhouses.webp',
      summary: 'Buying, selling and renting residential and commercial property.',
      points: ['Residential and commercial listings', 'Viewings and negotiation', 'Guidance through documentation'],
    },
    {
      title: 'Logistics & Delivery',
      icon: Truck,
      tone: 'teal',
      imageLabel: 'a delivery truck unloading goods',
      image: '/images/delivery-truck.webp',
      summary: 'Local transport of goods, items and materials.',
      points: ['Same-city goods delivery', 'Safe handling of items', 'Scheduled or on-demand'],
    },
  ],
}

export const DOMESTIC_FAMILY_CARE = {
  title: 'Domestic & Family Care',
  heroIcon: Heart,
  headline: 'Dependable help at home, for every member of the family.',
  intro:
    'Busy schedules, growing children and ageing relatives all need support. Our caregivers, nannies and household staff are vetted, trained and matched to your needs.',
  audience: ['Busy professionals', 'Families', 'Elderly relatives'],
  services: [
    {
      title: 'Caregiving & Nannies',
      icon: Heart,
      tone: 'teal',
      imageLabel: 'a caregiver playing with a child at home',
      image: '/images/care-high-five.webp',
      summary: 'Hourly, daily or full-time residential support.',
      points: ['Elderly and companion care', 'Childcare and nanny support', 'Hourly, daily or live-in options'],
    },
    {
      title: 'Domestic Helps & Sales Reps',
      icon: Home,
      tone: 'teal',
      imageLabel: 'domestic staff at work',
      summary: 'Vetted house staff and retail personnel.',
      points: ['Housekeeping and cooking support', 'Retail and sales personnel', 'Background-checked staff'],
    },
    {
      title: 'Errands & Personal Market Shopping',
      icon: MapPin,
      tone: 'gold',
      imageLabel: 'market shopping delivery',
      summary: 'Doorstep delivery from local markets or supermarkets of your choice.',
      points: ['Market and supermarket shopping', 'Errands and pickups', 'Delivered to your door'],
    },
  ],
}
