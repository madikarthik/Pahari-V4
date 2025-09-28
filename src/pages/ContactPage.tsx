export default function ContactPage() {
  return (
    <section className="container-pg py-12">
      <h1 className="text-2xl font-semibold tracking-tight  pt-[30px] md:pt-[30px]">Contact us</h1>
      <p className="mt-3 text-gray-700">We’d love to help you pick the right Himalayan products.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <a className="card p-5 hover:shadow" href="mailto:hello@paharigoodness.in">Email<br/><span className="text-sm text-gray-600">hello@paharigoodness.in</span></a>
        <a className="card p-5 hover:shadow" href="tel:+91XXXXXXXXXX">Phone<br/><span className="text-sm text-gray-600">+91-XXXXXXXXXX</span></a>
        <a className="card p-5 hover:shadow" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">WhatsApp<br/><span className="text-sm text-gray-600">Chat with our Himalayan Guide</span></a>
      </div>
    </section>
  )
}
