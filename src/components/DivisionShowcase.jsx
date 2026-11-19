import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { DIVISIONS, servicesIn } from '../data/serviceDetails'

/** Fades and lifts its content in whenever it mounts (the parent remounts it on tab change). */
function Reveal({ children }) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <div
      className={`transition duration-500 motion-reduce:transition-none ${
        on ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

/** Four-tab showcase: pick a division to see its overview and every service in it. */
export default function DivisionShowcase() {
  const { hash } = useLocation()
  const fromHash = () => DIVISIONS.find((d) => hash === `#division-${d.id}`)?.id
  const [active, setActive] = useState(() => fromHash() || DIVISIONS[0].id)
  const tabRefs = useRef([])

  useEffect(() => {
    const id = fromHash()
    if (id) setActive(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  const onKeyDown = (e) => {
    const i = DIVISIONS.findIndex((d) => d.id === active)
    let next = null
    if (e.key === 'ArrowRight') next = (i + 1) % DIVISIONS.length
    if (e.key === 'ArrowLeft') next = (i - 1 + DIVISIONS.length) % DIVISIONS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = DIVISIONS.length - 1
    if (next === null) return
    e.preventDefault()
    setActive(DIVISIONS[next].id)
    tabRefs.current[next]?.focus()
  }

  const division = DIVISIONS.find((d) => d.id === active)
  const services = servicesIn(active)

  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Our services</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">Our core service divisions</h2>
          <p className="mt-3 text-base text-slate-600">
            Select a division below to explore how we serve your home or organisation.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Service divisions"
          onKeyDown={onKeyDown}
          className="mt-9 flex flex-wrap justify-center gap-2.5"
        >
          {DIVISIONS.map((d, i) => {
            const on = d.id === active
            return (
              <button
                key={d.id}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`tab-${d.id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`panel-${d.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(d.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  on
                    ? 'border-brand bg-brand text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-brand-700 hover:text-brand'
                }`}
              >
                {d.title}
              </button>
            )
          })}
        </div>

        {/* Panel */}
        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10">
          <Reveal key={active}>
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.05fr_1fr]">
              <div className="relative min-h-[260px] lg:min-h-[380px]">
                <img
                  src={division.image}
                  alt={division.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-900">
                  Division {division.no}
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <h3 className="text-2xl font-extrabold sm:text-3xl">{division.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{division.overview}</p>
                <ul className="mt-5 space-y-2.5">
                  {division.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link to="/quote" state={{ services: division.quoteOptions }} className="btn-dark px-6 py-3">
                    Request division quote
                  </Link>
                  <Link
                    to={division.to}
                    className="inline-flex items-center gap-2 border-b-2 border-accent pb-0.5 text-sm font-bold text-brand hover:gap-3"
                  >
                    View division page <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </div>
              </div>
            </div>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-brand-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 text-base font-bold leading-snug text-brand">
                      <Link to={`/services/${s.slug}`} className="hover:underline">
                        {s.title}
                      </Link>
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm">
                      <Link to={`/services/${s.slug}`} className="font-semibold text-slate-600 hover:text-brand">
                        Learn more
                      </Link>
                      <Link
                        to="/quote"
                        state={{ services: [s.quoteOption] }}
                        className="inline-flex items-center gap-1.5 font-bold text-brand-700 hover:gap-2.5"
                      >
                        Get quote <ArrowRight className="h-4 w-4 transition-all" />
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
