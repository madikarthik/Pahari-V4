export default function BlogsPage() {
  const posts = [
    { id: 'traceability', title: 'How We Keep Products Traceable', blurb: 'From batch IDs to farmer profiles.' },
    { id: 'gucchi', title: 'Gucchi (Morels): The Forager’s Treasure', blurb: 'Why these wild mushrooms are so special.' },
  ]
  return (
    <section className="container-pg py-12">
      <h1 className="text-2xl font-semibold tracking-tight  pt-[30px] md:pt-[30px]">Blogs</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map(p => (
          <article key={p.id} className="card p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
            <button className="mt-3 btn btn-ghost text-sm">Read</button>
          </article>
        ))}
      </div>
    </section>
  )
}
