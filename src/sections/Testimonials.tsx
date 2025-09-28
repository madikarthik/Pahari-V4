import { Star, Quote } from 'lucide-react'

type Testimonial = {
  id: string
  name: string
  subtitle: string
  rating: number
  quote: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Meera Sharma',
    subtitle: 'Delhi · Verified Buyer',
    rating: 5,
    quote:
      'The honey tastes like real flowers — rich, layered, and not overly sweet. You can tell it’s unprocessed.',
    avatar: '/avatars/meera.jpg',
  },
  {
    id: 't2',
    name: 'Arjun Kapoor',
    subtitle: 'Mumbai · Verified Buyer',
    rating: 5,
    quote:
      'Sea buckthorn jam is a star at breakfast. Tangy, bright, and feels genuinely clean.',
    avatar: '/avatars/arjun.jpg',
  },
  {
    id: 't3',
    name: 'Naina Joshi',
    subtitle: 'Chandigarh · Verified Buyer',
    rating: 4,
    quote:
      'Packaging is thoughtful and minimal. Loved the farmer story card — feels personal.',
    avatar: '/avatars/naina.jpg',
  },
]

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            i <= Math.round(value)
              ? 'h-4 w-4 fill-gold-500 text-gold-500'
              : 'h-4 w-4 text-brand-200'
          }
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f7f7f9] to-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/60 to-white" />
      <div className="container-pg py-5 md:py-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-900">
            Loved by People Who Love the Mountains
          </h2>
          <p className="mt-2 text-sm md:text-base text-brand-800/80">
            Real experiences from real buyers — no fluff, no filters.
          </p>
        </div>

        {/* mobile scroll, desktop grid */}
        <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:overflow-visible">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="card p-5 relative overflow-hidden min-w-[85%] snap-center sm:min-w-0 hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <Quote
                className="absolute -right-2 -top-2 h-12 w-12 text-brand-100"
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar || '/avatars/placeholder.jpg'}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-brand-100"
                />
                <div>
                  <div className="font-medium text-brand-900">{t.name}</div>
                  <div className="text-xs text-brand-800/70">{t.subtitle}</div>
                </div>
              </div>

              <div className="mt-3">
                <Stars value={t.rating} />
              </div>
              <p className="mt-3 text-sm text-brand-900/90 leading-relaxed">
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm md:text-base font-medium text-brand-800">
          Mountain-grade goodness, customer-approved.
        </p>
      </div>
    </section>
  )
}
