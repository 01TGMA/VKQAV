import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronDown, Star } from 'lucide-react'
import HowItWorks from '../components/HowItWorks'
import CtaBanner from '../components/CtaBanner'
import TrustGrid from '../components/TrustGrid'
import {
  FREQUENCIES,
  HOME_HERO_IMAGES,
  HOME_SERVICES,
  QUOTE_OPTIONS,
  TESTIMONIALS,
  WHO_WE_SERVE,
} from '../data/pages'
import { SITE } from '../data/site'

const fieldClass =
  'w-full appearance-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none'

/** Quick request bar: hands what the visitor picked to the full quote page. */
function QuickRequest() {
  const navigate = useNavigate()
  const [service, setService] = useState('')
  const [frequency, setFrequency] = useState('')
  const [phone, setPhone] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/quote', {
      state: { services: service ? [service] : [], frequency, phone },
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-brand-900/15 md:grid-cols-[1.2fr_1fr_1fr_auto]"
    >
      <label className="relative block border-b border-slate-100 px-6 py-5 md:border-b-0 md:border-r">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Service type</span>
        <select value={service} onChange={(e) => setService(e.target.value)} className={`${fieldClass} mt-1.5 pr-6`}>
          <option value="">Select a service</option>
          {QUOTE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute bottom-6 right-5 h-4 w-4 text-slate-400" />
      </label>
      <label className="relative block border-b border-slate-100 px-6 py-5 md:border-b-0 md:border-r">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Frequency</span>
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className={`${fieldClass} mt-1.5 pr-6`}>
          <option value="">How often?</option>
          {FREQUENCIES.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute bottom-6 right-5 h-4 w-4 text-slate-400" />
      </label>
      <label className="block border-b border-slate-100 px-6 py-5 md:border-b-0 md:border-r">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">Phone number</span>
        <input
          type="tel"
          autoComplete="tel"
          placeholder="+234"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`${fieldClass} mt-1.5`}
        />
      </label>
      <button type="submit" className="btn-dark m-3 rounded-xl px-8 py-4 md:m-3">
        Request a quote <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = `${SITE.fullName} | Reliable services for every need`
  }, [])

  // Support links like /#why-choose-us from other pages.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [hash])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand to-[#1D5A4A]">
        <div className="container-x grid items-center gap-10 py-12 pb-24 lg:grid-cols-[1fr_540px] lg:gap-14 lg:py-16 lg:pb-28">
          <div>
            <p className="eyebrow text-accent">{SITE.tagline}</p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              Reliable services for every need, every day.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              From home care and domestic support to commercial facility management and real estate. One trusted
              team for families and institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-accent px-6 py-3">
                Explore our services
              </Link>
              <Link to="/quote" className="btn border border-white/60 px-6 py-3 text-white hover:bg-white hover:text-brand">
                Get a free quote
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <img
              src={HOME_HERO_IMAGES[0].src}
              alt={HOME_HERO_IMAGES[0].alt}
              width="678"
              height="452"
              className="col-span-2 aspect-[16/8] w-full rounded-2xl object-cover shadow-xl"
            />
            {HOME_HERO_IMAGES.slice(1).map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick request, overlapping the hero */}
      <div className="container-x relative z-10 -mt-14">
        <QuickRequest />
      </div>

      {/* Motto */}
      <section className="mt-14 border-y border-slate-100 bg-mint py-10 text-center">
        <p className="container-x text-xl font-extrabold tracking-display text-brand sm:text-2xl">
          Providing{' '}
          <span className="border-b-[3px] border-accent text-brand-700">value</span> for whatever you pay for.
        </p>
      </section>

      {/* Four service areas */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Four service areas,
                <br className="hidden sm:block" /> one dependable team.
              </h2>
            </div>
            <p className="max-w-sm text-base text-slate-600">
              Choose the area you need. Each one is run by people who do this work every day.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-700/40 hover:shadow-lg"
              >
                <img src={s.image} alt={s.alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-brand-700 group-hover:gap-3">
                    Explore services <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why VKQAV */}
      <section id="why-choose-us" className="scroll-mt-28 bg-brand-900 py-16 text-white lg:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-accent">Why VKQAV</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              The people you trust with your home should be vetted.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Whether it is a nanny for your family or a maintenance crew for your school, we put the same care
              into who we send and how the work is done.
            </p>
            <Link to="/about" className="btn-accent mt-7 px-6 py-3">
              About VKQAV
            </Link>
          </div>
          <TrustGrid />
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Who we serve</h2>
            <p className="max-w-sm text-base text-slate-600">
              From a single household to a hospital or a bank branch, the standard stays the same.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {WHO_WE_SERVE.map(({ icon: Icon, label, to }) => (
              <Link
                key={label}
                to={to}
                className="group rounded-2xl border border-slate-200 bg-white px-3 py-7 text-center transition hover:border-brand-700 hover:shadow-md"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mint text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-3 block text-sm font-bold text-brand">{label}</span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-700">
                  View services <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Testimonials */}
      {TESTIMONIALS.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-3xl font-extrabold sm:text-4xl">What our clients say</h2>
              <p className="max-w-sm text-base text-slate-600">
                Reviews from families and organisations we have worked with.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="relative rounded-2xl border border-slate-200 bg-white p-7">
                  {t.sample && (
                    <span className="absolute right-4 top-4 rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Sample, replace
                    </span>
                  )}
                  <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span className="block font-bold text-brand">{t.name}</span>
                    {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
