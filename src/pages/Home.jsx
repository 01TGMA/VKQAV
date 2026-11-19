import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import TrustGrid from '../components/TrustGrid'
import { HOME_HERO_IMAGES } from '../data/pages'
import { DIVISIONS, servicesIn } from '../data/serviceDetails'
import { SITE } from '../data/site'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = `${SITE.fullName} | Reliable services for every need`
  }, [])

  // Support links like /#why-choose-us or /#services from other pages.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [hash])

  const total = DIVISIONS.reduce((n, d) => n + servicesIn(d.id).length, 0)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-900 via-brand to-[#1D5A4A]">
        <div className="container-x grid items-center gap-10 py-12 pb-24 lg:grid-cols-[1fr_520px] lg:gap-14 lg:py-14 lg:pb-28">
          <div>
            <p className="eyebrow text-accent">
              {SITE.name} &middot; {SITE.tagline}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              One company.
              <br />
              Every service you need.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {total} dependable services in four divisions, from home care and catering to facility management
              and real estate. Find yours below.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="btn-accent px-6 py-3">
                Find a service
              </a>
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

      {/* Division jump bar, overlapping the hero */}
      <div className="container-x relative z-10 -mt-14">
        <nav
          aria-label="Service divisions"
          className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-brand-900/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIVISIONS.map((d) => (
            <a
              key={d.id}
              href={`#division-${d.id}`}
              className="group border-b border-slate-100 px-6 py-5 transition hover:bg-mint sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-[11px] font-bold tracking-[0.18em] text-brand-700">{d.no}</p>
              <p className="mt-1.5 text-base font-bold leading-snug text-brand">{d.title}</p>
              <p className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-brand-700">
                {servicesIn(d.id).length} services <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </p>
            </a>
          ))}
        </nav>
      </div>

      {/* Every service, by division */}
      <div id="services" className="mt-14 scroll-mt-28">
        {DIVISIONS.map((d, i) => {
          const items = servicesIn(d.id)
          return (
            <section
              key={d.id}
              id={`division-${d.id}`}
              className={`scroll-mt-24 py-14 lg:py-20 ${i % 2 ? 'bg-mint' : 'bg-white'}`}
            >
              <div className="container-x grid items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
                <div>
                  <img
                    src={d.image}
                    alt={d.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                  <p className="mt-6 text-[11px] font-bold tracking-[0.18em] text-brand-700">DIVISION {d.no}</p>
                  <h2 className="mt-2 text-3xl font-extrabold leading-tight">{d.title}</h2>
                  <p className="mt-3 text-base text-slate-600">{d.description}</p>
                  <Link to={d.to} className="btn-dark mt-6 px-6 py-3">
                    View {d.short} division <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                  {items.map((s) => {
                    const Icon = s.icon
                    return (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="group flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-700/50 hover:shadow-md"
                        >
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint text-brand-700">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="text-base font-bold leading-snug">{s.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 group-hover:gap-2.5">
                              View service <ArrowRight className="h-4 w-4 transition-all" />
                            </span>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </section>
          )
        })}
      </div>

      {/* Why VKQAV */}
      <section id="why-choose-us" className="scroll-mt-28 bg-brand-900 py-14 text-white lg:py-20">
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

      {/* One company, one contact */}
      <section className="bg-white py-14 lg:py-20">
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
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-mint px-5 py-4 transition hover:border-brand-700/50"
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

      <CtaBanner />
    </>
  )
}
