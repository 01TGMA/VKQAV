import { useEffect } from 'react'
import { Users } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import PlaceholderImage from '../components/PlaceholderImage'
import TrustGrid from '../components/TrustGrid'
import CtaBanner from '../components/CtaBanner'
import { Link } from 'react-router-dom'
import { TEAM, VALUES, VETTING } from '../data/pages'
import { SITE } from '../data/site'

export default function About() {
  useEffect(() => {
    document.title = `About Us | ${SITE.fullName}`
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <PageBanner title="About VKQAV" crumbs={['About Us']} icon={Users} />

      {/* Company profile */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <PlaceholderImage icon={Users} label="VKQAV team at work" tone="teal" ratio="aspect-[4/3]" />
          <div>
            <p className="eyebrow">Company profile</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Serving everyone, young and old, rich and poor.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {SITE.fullName} was built on one idea: good service should not depend on who you are. We bring
              caregiving, facility management, catering, procurement, real estate and logistics together under
              one roof in Lagos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our motto guides every job: we provide value for whatever you are paying for.
            </p>
            <Link to="/quote" className="btn-dark mt-7 px-6 py-3">
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-mint py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Our core values</h2>
            <p className="max-w-sm text-base text-slate-600">
              What every client can expect, from a single errand to a long-term facility contract.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-brand-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and vetting */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Safety and vetting</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Who comes into your home matters.</h2>
            </div>
            <p className="max-w-sm text-base text-slate-600">
              Our process for everyone we send to a home, school, hospital or office.
            </p>
          </div>
          <ol className="relative mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <span
              aria-hidden
              className="absolute left-6 right-0 top-6 hidden border-t border-dashed border-brand-700/30 lg:block"
            />
            {VETTING.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white ring-8 ring-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] font-bold tracking-[0.18em] text-brand-700">STEP {i + 1}</p>
                <h3 className="mt-1 text-base font-bold">{title}</h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-900 py-14 text-white lg:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-accent">Why choose us</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              One team. Clear standards.
            </h2>
            <p className="mt-4 text-base text-white/70">Four commitments we make to every client.</p>
          </div>
          <TrustGrid />
        </div>
      </section>

      {/* Team */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Meet the team</h2>
            <p className="max-w-sm text-base text-slate-600">The people behind the work.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <div key={i}>
                <PlaceholderImage icon={Users} label="portrait" tone={i % 2 ? 'forest' : 'teal'} ratio="aspect-[4/5]" />
                <p className="mt-4 text-base font-bold text-brand">{m.name}</p>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="bg-mint py-14 lg:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Company details</h2>
            <p className="mt-3 text-base text-slate-600">Registered, reachable and open around the clock.</p>
          </div>
          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-7">
            {[
              ['Registered name', SITE.fullName],
              ['RC number', '[add CAC number]'],
              ['Address', SITE.address],
              ['Hours', SITE.hours],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col justify-between gap-1 py-4 text-sm sm:flex-row">
                <dt className="font-bold text-brand">{k}</dt>
                <dd className="text-slate-600 sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
