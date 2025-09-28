export default function Values() {
  const items = [
    { title: 'Authentic & Traceable', desc: 'Direct from Pahari families we work with, batch IDs on every product.' },
    { title: 'Sustainable', desc: 'Small‑scale harvesting that protects forests and biodiversity.' },
    { title: 'Personal Touch', desc: 'Thoughtfully packed with tasting notes and farmer stories in every box.' },
  ]
  return (
    <section id="story" className="container-pg py-5">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card p-5">
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}