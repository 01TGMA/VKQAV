import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle2, Clock, FileText, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { FREQUENCIES, PREFILL, QUOTE_OPTIONS } from '../data/pages'
import { SITE } from '../data/site'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20'

const choiceClass =
  'flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-700/50 has-[:checked]:border-brand-700 has-[:checked]:bg-mint has-[:checked]:font-semibold has-[:checked]:text-brand has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent'

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  )
}

/** Turns whatever the visitor selected on another page into the form's starting values. */
function initialValues(state) {
  const fromTitle = state?.service ? PREFILL[state.service] || [] : []
  const fromList = (state?.services || []).filter((s) => QUOTE_OPTIONS.includes(s))
  return {
    services: [...new Set([...fromTitle, ...fromList])],
    frequency: FREQUENCIES.includes(state?.frequency) ? state.frequency : '',
    details: '',
    name: '',
    phone: state?.phone || '',
    email: '',
    location: '',
  }
}

export default function Quote() {
  const { state } = useLocation()
  const [values, setValues] = useState(() => initialValues(state))
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = `Request a  Quote | ${SITE.fullName}`
    window.scrollTo({ top: 0 })
  }, [])

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const toggleService = (label) => {
    setValues((v) => ({
      ...v,
      services: v.services.includes(label) ? v.services.filter((s) => s !== label) : [...v.services, label],
    }))
    setErrors((er) => ({ ...er, services: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!values.services.length) er.services = 'Choose at least one service'
    if (!values.frequency) er.frequency = 'Tell us how often you need it'
    if (!values.name.trim()) er.name = 'Please enter your name'
    if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) er.phone = 'Enter a valid phone number'
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) er.email = 'Enter a valid email address'
    if (!values.location.trim()) er.location = 'Tell us where the service is needed'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    // TODO: send `values` to Web3Forms when hosting and forms are set up.
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const reset = () => {
    setValues(initialValues(null))
    setSubmitted(false)
  }

  const waMessage = encodeURIComponent(
    `Hello VKQAV, I would like a quote for ${values.services.join(', ') || 'your services'} (${values.frequency || 'frequency to be agreed'}). Location: ${values.location || 'to be confirmed'}.`,
  )
  const waLink = `${SITE.whatsapp.split('?')[0]}?text=${waMessage}`

  return (
    <>
      <PageBanner title="Request a  quote" crumbs={['Contact Us']} icon={FileText} />

      <section className="py-12 lg:py-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Form or confirmation */}
          <div id="quote-form" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
            {submitted ? (
              <div role="status" className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-brand-700" />
                <h2 className="mt-4 text-2xl font-extrabold">Thank you, {values.name.trim().split(' ')[0]}.</h2>
                <p className="mx-auto mt-2 max-w-md text-slate-600">
                  We received your request for {values.services.join(', ')} and will call you on {values.phone}{' '}
                  shortly.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-dark px-6 py-3">
                    <MessageCircle className="h-4 w-4" /> Also message us on WhatsApp
                  </a>
                  <button type="button" onClick={reset} className="btn-outline px-6 py-3">
                    Send another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                {/* Step 1 */}
                <fieldset aria-describedby={errors.services ? 'err-services' : undefined}>
                  <legend className="flex items-baseline gap-2 text-sm font-bold text-brand">
                    1. Select service type
                    <span className="text-xs font-normal text-slate-500">Select all that apply</span>
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {QUOTE_OPTIONS.map((o) => (
                      <label key={o} className={choiceClass}>
                        <input
                          type="checkbox"
                          checked={values.services.includes(o)}
                          onChange={() => toggleService(o)}
                          className="h-4 w-4 shrink-0 accent-brand-700"
                        />
                        {o}
                      </label>
                    ))}
                  </div>
                  <FieldError id="err-services" message={errors.services} />
                </fieldset>

                {/* Step 2 */}
                <fieldset className="mt-8" aria-describedby={errors.frequency ? 'err-frequency' : undefined}>
                  <legend className="text-sm font-bold text-brand">2. How often?</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {FREQUENCIES.map((f) => (
                      <label key={f} className={choiceClass}>
                        <input
                          type="radio"
                          name="frequency"
                          value={f}
                          checked={values.frequency === f}
                          onChange={set('frequency')}
                          className="h-4 w-4 shrink-0 accent-brand-700"
                        />
                        {f}
                      </label>
                    ))}
                  </div>
                  <FieldError id="err-frequency" message={errors.frequency} />
                </fieldset>

                {/* Step 3 */}
                <div className="mt-8">
                  <label htmlFor="q-details" className="text-sm font-bold text-brand">
                    3. Specific details or requirements
                  </label>
                  <textarea
                    id="q-details"
                    rows={5}
                    placeholder="Tell us what you need, the size of the job, and any dates that matter."
                    value={values.details}
                    onChange={set('details')}
                    className={`${inputClass} mt-3`}
                  />
                </div>

                {/* Step 4 */}
                <fieldset className="mt-8">
                  <legend className="text-sm font-bold text-brand">4. Your contact details</legend>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-name" className="sr-only">Full name</label>
                      <input id="q-name" type="text" autoComplete="name" placeholder="Full name" value={values.name}
                        onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
                        className={inputClass} />
                      <FieldError id="err-name" message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="q-phone" className="sr-only">Phone number</label>
                      <input id="q-phone" type="tel" autoComplete="tel" placeholder="Phone number" value={values.phone}
                        onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined}
                        className={inputClass} />
                      <FieldError id="err-phone" message={errors.phone} />
                    </div>
                    <div>
                      <label htmlFor="q-email" className="sr-only">Email address (optional)</label>
                      <input id="q-email" type="email" autoComplete="email" placeholder="Email address (optional)" value={values.email}
                        onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
                        className={inputClass} />
                      <FieldError id="err-email" message={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="q-location" className="sr-only">Location</label>
                      <input id="q-location" type="text" autoComplete="address-level2" placeholder="Location, e.g. Ikoyi, Lagos" value={values.location}
                        onChange={set('location')} aria-invalid={!!errors.location} aria-describedby={errors.location ? 'err-location' : undefined}
                        className={inputClass} />
                      <FieldError id="err-location" message={errors.location} />
                    </div>
                  </div>
                </fieldset>

                <button type="submit" className="btn-accent mt-8 w-full py-4 text-base">
                  Send my request
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  We use your details only to respond to this request.
                </p>
              </form>
            )}
          </div>

          {/* Side column */}
          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-brand-900 p-7 text-white">
              <h2 className="text-xl font-bold text-white">Prefer to talk now?</h2>
              <ul className="mt-5 divide-y divide-white/10 text-sm">
                <li className="flex gap-3 py-3.5">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-white/60">WhatsApp</p>
                    <p className="font-bold">{SITE.phone}</p>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-white/60">Call us</p>
                    <a href={SITE.phoneHref} className="font-bold hover:underline">{SITE.phone}</a>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-white/60">Email</p>
                    <a href={`mailto:${SITE.email}`} className="font-bold hover:underline">{SITE.email}</a>
                  </div>
                </li>
                <li className="flex gap-3 py-3.5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-white/60">Hours</p>
                    <p className="font-bold">{SITE.hours}</p>
                  </div>
                </li>
              </ul>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-3 w-full bg-[#25D366] py-3 text-white hover:bg-[#1FB457]"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'We review your request and call you back.',
                  'We agree the scope and price with you.',
                  'The right team is assigned and the work begins.',
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-brand-700">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <MapPin className="h-5 w-5 text-brand-700" /> Visit our office
              </h2>
              <p className="mt-2 text-sm text-slate-600">{SITE.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border-b-2 border-accent pb-0.5 text-sm font-bold text-brand"
              >
                Get directions
              </a>
            </div>

            <p className="px-1 text-center text-xs text-slate-500">
              Prefer to browse first?{' '}
              <Link to="/services" className="font-semibold text-brand-700 underline">
                See our services
              </Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
