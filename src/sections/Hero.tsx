import { Link } from 'react-router-dom'

const handleScroll = () => {
  const el = document.querySelector('#story');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background image with cinematic overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[url(./assets/Hero.jpg)] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      <div className="container-pg text-center text-white">
        <p className="mb-4 text-sm md:text-base tracking-[0.25em] uppercase text-white/90 drop-shadow-xl">Nature’s Wisdom from Himalayan Peaks</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          <span className="block">Pahari</span>
          <span className="block">Goodness</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/95 text-lg md:text-xl leading-relaxed drop-shadow-xl">
          Pure, nutrient‑rich, time‑tested. Nothing added, nothing lost.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/products" className="btn btn-outline-white px-6 py-3 text-base md:text-lg">Discover Our Products</Link>
            <a href="about" className="btn btn-outline-white px-6 py-3 text-base md:text-lg">Our Story</a>
        </div>

      </div>

      {/* Scroll hint */}
      <button
      type="button"
      onClick={handleScroll}
      className="group absolute bottom-6 left-1/2 -translate-x-1/2 text-center focus:outline-none"
      aria-label="Scroll to explore"
    >
      <div className="mx-auto h-10 w-10 rounded-full border border-white/60 grid place-items-center text-white/90 bg-white/10 backdrop-blur-sm transition group-hover:bg-white/20">
        {/* Chevron (SVG) */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 animate-float">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="mt-2 text-[10px] tracking-[0.2em] text-white/80">
        SCROLL TO EXPLORE
      </div>
    </button>
    </section>
  )
}