type PromiseItem = {
  id: string
  title: string
  icon: string
  points: string[]
}

const promises: PromiseItem[] = [
  {
    id: 'p1',
    title: 'Pure & Natural 🌿',
    icon: '🌿',
    points: [
      'Purity Guaranteed',
      'Born in the Himalayas',
      'No Artificial Flavors, Colors, or Synthetic Fragrances',
      'Zero Sulphates, Parabens & Unnecessary Additives',
    ],
  },
  {
    id: 'p2',
    title: 'Handcrafted Quality 👐',
    icon: '👐',
    points: [
      'Handmade in Small Batches',
      'Batch-Made, Not Mass-Made',
      'Clean Ingredients',
      'No Heat or Chemical Processing (Retains Nutrients)',
    ],
  },
  {
    id: 'p3',
    title: 'Ethical & Sustainable 🤝',
    icon: '🤝',
    points: [
      'Ethically & Sustainably Sourced',
      'Supports Tribal & Local Himalayan Farmers',
      'Rooted in Real Communities',
      'Sustainable Harvesting Practices',
    ],
  },
  {
    id: 'p4',
    title: 'Traceable & Transparent 🔍',
    icon: '🔍',
    points: [
      'Full Traceability',
      'Honest, Direct Sourcing — No Middlemen',
      'Transparent Supply Chain',
      'Responsibly Packaged for Freshness',
    ],
  },
]

export default function PromiseGrid() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9f5f0] via-[#fdf8f3] to-white">
      <div className="container-pg py-5 md:py-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-900">
            What We’re Made Of (Besides Mountains &amp; Grit)
          </h2>
        </div>

        {/* Mobile scroller + Desktop grid */}
        <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible">
          {promises.map((p) => (
            <div
              key={p.id}
              className="card min-w-[85%] snap-center sm:min-w-0 p-6 hover:shadow-lg hover:-translate-y-1 transition-transform"
            >
              {/* <div className="text-3xl">{p.icon}</div> */}
              <h3 className="mt-3 font-medium text-md text-brand-900">
                {p.title}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-brand-800/80">
                {p.points.map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-10 text-center text-sm md:text-base font-medium text-brand-800">
          Real promises. No asterisk. No fine print. Just mountain truth.
        </p>
      </div>
    </section>
  )
}
