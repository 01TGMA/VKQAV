import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, Clock, MapPin, ShieldCheck } from 'lucide-react'
import QuoteMiniForm from '../components/QuoteMiniForm'
import HowItWorks from '../components/HowItWorks'
import CtaBanner from '../components/CtaBanner'
import PlaceholderImage from '../components/PlaceholderImage'
import ComingSoon from './ComingSoon'
import { SITE } from '../data/site'
import { getDivision, getService, servicesIn } from '../data/serviceDetails'

function Banner({ service, division }) {
  const Icon = service.icon
  const img = service.image
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand to-[#1D5A4A]">
      {img ? (
        <>
          <img
            src={img.src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: img.pos || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-900/25" />
        </>
      ) : (
        <Icon
          aria-hidden
          className="absolute -right-6 top-1/2 hidden h-48 w-48 -translate-y-1/2 text-white/5 sm:block md:right-24 md:h-72 md:w-72"
          strokeWidth={1}
        />
      )}
      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-[11px] text-white/70">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={division.to} className="hover:text-white">{division.title}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{service.title}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{service.title}</h1>
        <p className="mt-3 max-w-xl text-base text-white/80 sm:text-lg">{service.tagline}</p>
        <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white">
          {[
            [ShieldCheck, service.facts?.[0] || 'Vetted team'],
            [Clock, SITE.hours],
            [MapPin, 'Lagos'],
          ].map(([I, t]) => (
            <li key={t} className="flex items-center gap-2">
              <I className="h-4 w-4 text-accent" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  useEffect(() => {
    if (service) document.title = `${service.title} | ${SITE.fullName}`
    window.scrollTo({ top: 0 })
  }, [service])

  if (!service) return <ComingSoon />

  const division = getDivision(service.division)
  const related = servicesIn(service.division).filter((s) => s.slug !== service.slug)
  const quoteState = { services: [service.quoteOption] }

  return (
    <>
      <Banner service={service} division={division} />

      {/* Intro + sticky quote form */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div>
            <p className="eyebrow">{division.title}</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">{service.headline}</h2>
            {service.intro.map((p) => (
              <p key={p} className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Who this is for</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {service.audience.map((a) => (
                <span key={a} className="pill">{a}</span>
              ))}
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <QuoteMiniForm serviceName={service.title} />
          </aside>
        </div>
      </section>

      {/* What is included */}
      <section className="bg-mint py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-extrabold sm:text-4xl">{service.includesTitle}</h2>
            <p className="max-w-sm text-base text-slate-600">
              Tell us what matters most and we will shape the service around it.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we choose / our standard */}
      {service.standards && (
        <section className="bg-white py-14 lg:py-20">
          <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PlaceholderImage
              icon={service.icon}
              label={service.standards.image?.alt || service.title}
              src={service.standards.image?.src}
              tone={service.tone}
              ratio="aspect-[4/3]"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
                {service.standards.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{service.standards.title}</h2>
              <p className="mt-3 text-base text-slate-600">{service.standards.text}</p>
              <ul className="mt-6 space-y-3">
                {service.standards.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold text-brand hover:gap-3"
              >
                Read our vetting process <ArrowRight className="h-4 w-4 transition-all" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Options */}
      {service.options && (
        <section className="bg-mint py-14 lg:py-20">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-3xl font-extrabold sm:text-4xl">{service.options.title}</h2>
              <p className="max-w-sm text-base text-slate-600">{service.options.text}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.options.items.map((o) => (
                <div
                  key={o.title}
                  className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
                    o.featured ? 'border-brand-700 shadow-lg shadow-brand-700/10' : 'border-slate-200'
                  }`}
                >
                  {o.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-900">
                      Most requested
                    </span>
                  )}
                  <h3 className="text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.text}</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.5} /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/quote"
                    state={quoteState}
                    className={`mt-6 ${o.featured ? 'btn-dark' : 'btn-outline'} w-full`}
                  >
                    Request a quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <HowItWorks />

      {/* FAQ */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Questions you may have</h2>
          <div className="mt-8 max-w-3xl space-y-3">
            {service.faq.map(([q, a], i) => (
              <details key={q} open={i === 0} className="group rounded-xl border border-slate-200 bg-white px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-brand [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden className="text-xl leading-none text-brand-700 group-open:hidden">+</span>
                  <span aria-hidden className="hidden text-xl leading-none text-brand-700 group-open:inline">&minus;</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-mint py-14 lg:py-20">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-3xl font-extrabold sm:text-4xl">More from {division.title}</h2>
              <Link
                to={division.to}
                className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-bold text-brand"
              >
                See the division page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => {
                const I = s.icon
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-700/50 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-brand-700">
                      <I className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 group-hover:gap-2.5">
                        View service <ArrowRight className="h-3.5 w-3.5 transition-all" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
