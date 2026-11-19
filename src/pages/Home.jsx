import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Mail, MessageCircle, Phone, Star } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import DivisionShowcase from '../components/DivisionShowcase'
import CtaBanner from '../components/CtaBanner'
import { HERO_SLIDES, HOME_TESTIMONIALS, INDUSTRIES, STANDARD } from '../data/home'
import { DIVISIONS, servicesIn } from '../data/serviceDetails'
import { SITE } from '../data/site'

export default function Home() {
  const { hash } = useLocation()
  const total = DIVISIONS.reduce((n, d) => n + servicesIn(d.id).length, 0)

  const stats = [
    [String(total), 'Specialised services'],
    ['Vetted', '& verified staff'],
    ['Residential', '& corporate clients'],
    ['24/7', 'Lagos support'],
  ]

  useEffect(() => {
    document.title = `${SITE.fullName} | Providing value for whatever you pay for`
  }, [])

  // Support links such as /#why-choose-us or /#division-facility from anywhere on the site.
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.startsWith('#division-') ? 'services' : hash.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      {/* 1. Hero */}
      <HeroSlider slides={HERO_SLIDES}>
        <div className="container-x pb-8 pt-14 sm:pt-20 lg:pt-24">
          <div className="max-w-2xl">
            
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Providing value for whatever you pay for.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              From vetted domestic caregivers and catering to institutional facility management, procurement, real
              estate and logistics across Lagos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="btn-accent px-7 py-3.5 text-base">
                Book a service
              </Link>
              <a
                href="#services"
                className="btn border border-white/50 bg-white/10 px-7 py-3.5 text-base text-white backdrop-blur-sm hover:bg-white hover:text-brand"
              >
                Explore services
              </a>
            </div>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <li
                key={label}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md"
              >
                <p className="text-2xl font-extrabold text-white">{value}</p>
                <p className="mt-0.5 text-sm text-white/75">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </HeroSlider>

      {/* 2. Tabbed divisions and all 14 services */}
      <DivisionShowcase />

      {/* 3. Who we serve */}
      <section id="who-we-serve" className="scroll-mt-24 bg-mint py-16 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Who we serve</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Homes and institutions across Lagos.</h2>
            </div>
            <p className="max-w-sm text-base text-slate-600">
              From a single household to a hospital or a bank branch, the standard stays the same.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(({ icon: Icon, title, text, division }) => (
              <li key={title}>
                <Link
                  to={`/#division-${division}`}
                  className="group flex h-full items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-700/50 hover:shadow-md"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint text-brand-700 transition group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-brand">{title}</span>
                    <span className="mt-0.5 block text-sm text-slate-600">{text}</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 group-hover:gap-2.5">
                      See services <ArrowRight className="h-3.5 w-3.5 transition-all" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. The VKQAV standard */}
      <section id="why-choose-us" className="scroll-mt-24 bg-brand-900 py-16 text-white lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-accent">The VKQAV standard</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Every service backed by integrity, speed and accountability.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              We serve everyone, young and old, corporate and residential. Whether it is a nanny for your family
              or a maintenance crew for your school, we put the same care into who we send and how the work is
              done.
            </p>
            <Link to="/about" className="btn-accent mt-8 px-6 py-3">
              About VKQAV
            </Link>
          </div>
          <ul className="space-y-4">
            {STANDARD.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-5 rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-brand-900">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Testimonials */}
      {HOME_TESTIMONIALS.length > 0 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Client reviews</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">What our clients say</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {HOME_TESTIMONIALS.map((t, i) => (
                <figure key={i} className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  {t.sample && (
                    <span className="absolute right-4 top-4 rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Sample, replace
                    </span>
                  )}
                  <div className="flex gap-0.5 text-accent" role="img" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span className="block font-bold text-brand">{t.name}</span>
                    {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. One company, one contact */}
      <section className="bg-mint py-16 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <p className="eyebrow">One company, one contact</p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Whichever service you choose, you reach the same team.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              One phone number, one WhatsApp line and one quote form cover every division, so you never have to
              guess who to call.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              [MessageCircle, 'WhatsApp', SITE.phone, SITE.whatsapp],
              [Phone, `Call us, ${SITE.hours.toLowerCase()}`, SITE.phone, SITE.phoneHref],
              [Mail, 'Email', SITE.email, `mailto:${SITE.email}`],
            ].map(([I, label, value, href]) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-brand-700/50"
                >
                  <I className="h-5 w-5 text-brand-700" />
                  <span>
                    <span className="block text-xs text-slate-500">{label}</span>
                    <span className="block font-bold text-brand">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. CTA banner */}
      <CtaBanner />
    </>
  )
}
