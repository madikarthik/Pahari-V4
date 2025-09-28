// export default function AboutPage() {
//   return (
//     <section className="container-pg py-12">
//       <h1 className="text-2xl font-semibold tracking-tight pt-[30px] md:pt-[30px]">About Pahari Goodness</h1>
//       <p className="mt-3 text-gray-700">
//         We partner directly with Himalayan families to bring small-batch, traceable products to your table.
//         Every purchase supports community livelihoods and sustainable harvesting.
//       </p>
//     </section>
//   )
// }


export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-brand-100">
        <div className="container-pg pt-12 pb-6 md:pt-16 md:pb-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-900">
            About Us
          </h1>
          <p className="mt-2 text-brand-800/80 max-w-3xl">
            Take a little part of the Himalayas with you wherever you go.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-pg py-12 md:py-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
          {/* Image 1 */}
          <div className="order-2 md:order-1">
            <img
              src="/src/assets/about1.jpg"
              alt="Founders in the Himalayas"
              className="w-full rounded-2xl object-cover shadow-lift ring-1 ring-brand-100"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-900">
              Our Story
            </h2>
            <div className="mt-4 space-y-4 text-brand-900/90 leading-relaxed">
              <p>
                Pahari Goodness was founded by two sisters who grew up in the pristine, snow-clad Himalayas, where nature thrives in its purest form. The mountains shaped our values, teaching us simplicity, authenticity, and the deep connection between people and nature.
              </p>
              <p>
                An ode to the Himalayas, Pahari Goodness is born from the hearts of those raised in its embrace. But life led us away—into cities where the rhythm of the mountains became a distant memory. Yet, no matter how far we went, the Himalayas remained within us. And we weren’t alone. Those who had once stood beneath its towering peaks or wandered through its quiet valleys carried the same longing—a deep craving for its purity and warmth.
              </p>
              <p>
                This longing gave birth to Pahari Goodness—a way to bring the untouched gifts of the Himalayas to those who cherish them. Every jar, every product is more than just what’s inside; it is crafted from centuries of wisdom, enriched by time-honored traditions, and powered by the purity of the rarest Himalayan ingredients.
              </p>
              <p>
                You may not always find yourself in the Himalayas, but with Pahari Goodness, you can always take a piece of them with you.
              </p>

              <blockquote className="mt-4 border-l-4 border-gold-500 pl-4 italic text-brand-800">
                “Take a little part of the Himalayas with you wherever you go.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Image 2 / Video band */}
      <section className="bg-gradient-to-b from-white via-brand-50/60 to-white border-y border-brand-100">
        <div className="container-pg py-10 md:py-14">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-brand-100 shadow-soft">
            <video
                src="/src/assets/hero_v.mp4"
                poster="/about/media.jpg"   // optional thumbnail before play
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[250px] md:h-[420px] object-cover"
            />
            </div>
        </div>
        </section>


      {/* Purity Pledge */}
      <section className="container-pg py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-900">
            Purity Pledge
          </h2>
          <p className="mt-2 text-brand-800/80">
            “Centuries of Wisdom, Backed by Himalayas, Made for Today”
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Pillar 1 */}
          <article className="card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform">
            <img
              src="/src/assets/about2.jpg"
              alt="Pure Himalayan Ingredients"
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-brand-900">
                Pure Himalayan Ingredients
              </h3>
              <p className="mt-2 text-sm text-brand-800/90 leading-relaxed">
                Sourced from the untouched heights of 8,900+ ft, our ingredients thrive in their purest form. With minimal intervention, we preserve their natural integrity—honoring the rich traditions and cultures of the Himalayas. Each product is a true reflection of the land it comes from, bringing you nature in its most authentic essence.
              </p>
            </div>
          </article>

          {/* Pillar 2 */}
          <article className="card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform">
            <img
              src="/src/assets/about2.jpg"
              alt="Made by Pahari community"
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-brand-900">
                Made by Pahari Community
              </h3>
              <p className="mt-2 text-sm text-brand-800/90 leading-relaxed">
                Rooted in authenticity, our products are meticulously handcrafted by Pahari artisans using centuries-old techniques passed down through generations. We uphold these time-honored methods with minimal interference, ensuring every creation retains its original purity and craftsmanship. More than just products, we bring you a piece of our enduring Himalayan heritage.
              </p>
            </div>
          </article>

          {/* Pillar 3 */}
          <article className="card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform">
            <img
              src="/src/assets/about2.jpg"
              alt="Sustaining Nature, Supporting Communities"
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-brand-900">
                Sustaining Nature, Supporting Communities
              </h3>
              <p className="mt-2 text-sm text-brand-800/90 leading-relaxed">
                Our commitment extends beyond products—to the land and the people who nurture it. We embrace sustainable sourcing, support local farmers, and minimize waste with eco-conscious practices. By preserving traditions and protecting the environment, we ensure that every step we take benefits both nature and the communities that call the Himalayas home.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
