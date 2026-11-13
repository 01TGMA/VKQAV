import {
  Building,
  Building2,
  ChefHat,
  Banknote,
  Key,
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
      imageLabel: 'catering table at an event',
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
      imageLabel: 'maintenance crew in a building',
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
      imageLabel: 'cleaned interior after construction',
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
      imageLabel: 'modern building exterior',
      summary: 'Buying, selling and renting residential and commercial property.',
      points: ['Residential and commercial listings', 'Viewings and negotiation', 'Guidance through documentation'],
    },
    {
      title: 'Logistics & Delivery',
      icon: Truck,
      tone: 'teal',
      imageLabel: 'delivery van loading',
      summary: 'Local transport of goods, items and materials.',
      points: ['Same-city goods delivery', 'Safe handling of items', 'Scheduled or on-demand'],
    },
  ],
}
