import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import QuoteMiniForm from './QuoteMiniForm'
import HowItWorks from './HowItWorks'
import CtaBanner from './CtaBanner'
import PlaceholderImage from './PlaceholderImage'
import { SITE } from '../data/site'

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function ServiceRow({ service, index }) {
  const reverse = index % 2 === 1
  return (
    <section
      id={slug(service.title)}
      className={`scroll-mt-32 py-12 lg:py-16 ${reverse ? 'bg-mint' : 'bg-white'}`}
    >
      <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? 'lg:order-2' : ''}>
          <PlaceholderImage
            icon={service.icon}
            label={service.imageLabel}
            tone={service.tone}
            ratio="aspect-[16/10]"
          />
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <p className="text-[11px] font-bold tracking-[0.18em] text-brand-700">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{service.title}</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">{service.summary}</p>
          <ul className="mt-5 space-y-2.5">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 fill-brand-700 text-white" />
                {p}
              </li>
            ))}
          </ul>
          <Link
            to="/quote"
            state={{ service: service.title }}
            className="mt-6 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold text-brand hover:gap-3"
          >
            Request this service <ArrowRight className="h-4 w-4 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ServiceLayout({ page }) {
  const [active, setActive] = useState(page.services[0].title)

  useEffect(() => {
    document.title = `${page.title} | VKQAV Expert Essential Service Ltd`
    window.scrollTo({ top: 0 })
    setActive(page.services[0].title)
  }, [page])

  const jump = (title) => {
    setActive(title)
    document.getElementById(slug(title))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const HeroIcon = page.heroIcon

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand to-[#1D5A4A]">
        {HeroIcon && (
          <HeroIcon
            aria-hidden
            className="absolute -right-6 top-1/2 hidden h-48 w-48 -translate-y-1/2 text-white/5 sm:block md:right-24 md:h-64 md:w-64"
            strokeWidth={1}
          />
        )}
        <div className="container-x relative py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[11px] text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Our Services</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{page.title}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {page.title}
          </h1>
          <p className="mt-3 text-sm font-medium italic text-accent sm:text-base">
            &ldquo;{SITE.motto}&rdquo;
          </p>
        </div>
      </section>

      {/* Intro + sticky quote form */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div>
            <p className="eyebrow">{page.title}</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              {page.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">{page.intro}</p>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
              Who this is for
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {page.audience.map((a) => (
                <span key={a} className="pill">{a}</span>
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <QuoteMiniForm serviceName={page.title} />
          </aside>
        </div>
      </section>

      {/* Sub-service tabs */}
      <div className="bg-white pb-2">
        <div className="container-x">
          <div className="flex gap-2.5 overflow-x-auto pb-2" role="tablist" aria-label="Services in this category">
            {page.services.map((s) => {
              const on = s.title === active
              return (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => jump(s.title)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                    on
                      ? 'border-brand bg-brand text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-brand-700'
                  }`}
                >
                  {s.title}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Alternating service rows */}
      <div className="mt-6">
        {page.services.map((s, i) => (
          <ServiceRow key={s.title} service={s} index={i} />
        ))}
      </div>

      <HowItWorks />
      <CtaBanner />
    </>
  )
}
