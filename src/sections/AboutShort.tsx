export default function AboutShort() {
  return (
    <section
      id="about-short"
      className="relative"
    >
      {/* soft sky→cream gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50 to-white" />

      <div className="container-pg py-5">
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Text */}
          <div className="text-center md:text-left max-w-xl mx-auto">
            <h2 className="text-2xl md:text-xl font-semibold tracking-tight mb-6 text-brand-800">
              About Us
            </h2>
            <p className="text-brand-800 leading-relaxed text-base md:text-lg">
              We were raised where snow melts into streams and wisdom grows on trees. 
              <strong className="font-semibold"> Pahari Goodness</strong> was born in the untouched Himalayas — where nature doesn’t just exist, it teaches.
              <br /><br />
              What started as a longing for purity, authenticity and tradition became a bridge between ancient mountain wisdom and mindful living today. 
              We bring you nutrient-rich, time-tested treasures — from cold-pressed oils to wild-grown dry fruits — made for people, not production lines.
              <br /><br />
              <span className="block italic">
                No unnecessary additives. No gimmicks. No shortcuts.
              </span>
              <br />
              Just pure, powerful goodness — straight from the source.
              <a href="/about" className="ml-1 text-brand-700 font-medium hover:underline">
                Read More..
              </a>
            </p>
          </div>

          {/* Image (hidden on mobile) */}
          <div className="hidden md:block">
            <img
              src="/src/assets/About_short.jpg"
                alt="About_Short"
              className="rounded-2xl shadow-lift object-cover w-full max-h-80 ring-1 ring-brand-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
