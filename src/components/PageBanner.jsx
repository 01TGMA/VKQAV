import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Dark page header with breadcrumb. `crumbs` are the labels between Home and the page title. */
export default function PageBanner({ title, crumbs = [], icon: Icon }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand to-[#1D5A4A]">
      {Icon && (
        <Icon
          aria-hidden
          className="absolute -right-6 top-1/2 hidden h-48 w-48 -translate-y-1/2 text-white/5 sm:block md:right-24 md:h-64 md:w-64"
          strokeWidth={1}
        />
      )}
      <div className="container-x relative py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[11px] text-white/70">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {c}
            </span>
          ))}
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{title}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h1>
      </div>
    </section>
  )
}
