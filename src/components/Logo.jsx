import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { SITE } from '../data/site'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.fullName} home`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          light ? 'bg-white/10 ring-1 ring-white/30' : 'bg-brand'
        }`}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-brand-900">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      </span>
      <span className="leading-none">
        <span
          className={`block text-xl font-extrabold tracking-display ${
            light ? 'text-white' : 'text-brand'
          }`}
        >
          {SITE.name}
        </span>
        <span
          className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] ${
            light ? 'text-accent' : 'text-accent-600'
          }`}
        >
          {SITE.tagline}
        </span>
      </span>
    </Link>
  )
}
