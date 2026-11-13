import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SERVICE_LINKS, SITE } from '../data/site'

/** Fallback for routes outside the 3 built pages, so nav links never dead-end. */
export default function ComingSoon() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <section className="bg-mint py-24">
      <div className="container-x max-w-2xl text-center">
        <p className="eyebrow justify-center">VKQAV</p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">This page is coming soon</h1>
        <p className="mt-3 text-slate-600">
          {SITE.motto} In the meantime, explore our services or reach us directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SERVICE_LINKS.slice(1).map((s) => (
            <Link key={s.to} to={s.to} className="btn-outline">
              {s.label}
            </Link>
          ))}
        </div>
        <a href={SITE.phoneHref} className="btn-accent mt-6">
          Call {SITE.phone}
        </a>
        <div className="mt-6">
          <Link to="/services/procurement-catering" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            <ArrowLeft className="h-4 w-4" /> Back to services
          </Link>
        </div>
      </div>
    </section>
  )
}
