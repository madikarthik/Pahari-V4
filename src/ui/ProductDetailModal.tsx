import { useEffect, useMemo, useRef, useState } from 'react'
import type { Product, Benefit } from '../store/products'
import { X, Mail, MessageCircle, Leaf, Shield, Star, Heart, Droplet, Share2, Check } from 'lucide-react'
import { waLink, mailLink } from '../utils/share'

const iconMap: Record<Benefit['icon'], React.ComponentType<{ className?: string }>> = {
  Leaf, Shield, Star, Heart, Droplet
}

export default function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const startXRef = useRef<number | null>(null)
  const deltaXRef = useRef(0)
  const mainImgRef = useRef<HTMLDivElement | null>(null)

  const images = useMemo(() => product.images?.length ? product.images : [product.image], [product])

  const goPrev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex(i => (i + 1) % images.length)

  // lock background scroll + keyboard controls
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, images.length])

  // Touch swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
    deltaXRef.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startXRef.current == null) return
    deltaXRef.current = e.touches[0].clientX - startXRef.current
  }
  const onTouchEnd = () => {
    const threshold = 50 // px
    if (Math.abs(deltaXRef.current) > threshold) {
      if (deltaXRef.current < 0) goNext()
      else goPrev()
    }
    startXRef.current = null
    deltaXRef.current = 0
  }

  // Share / copy deep link
  const productUrl = `${window.location.origin}/products#${product.id}`
  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${product.name} — Pahari Goodness`,
          text: product.tagline || 'Check this out',
          url: productUrl,
        })
      } else {
        await navigator.clipboard.writeText(productUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 1400)
      }
    } catch {
      // fallback to copy if share fails or is cancelled
      try {
        await navigator.clipboard.writeText(productUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 1400)
      } catch {}
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      {/* Card */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-lift ring-1 ring-brand-100 overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full p-2 text-brand-800 hover:bg-brand-50"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-[1fr_1.15fr] gap-0">
          {/* Left: Image gallery */}
          <div className="bg-brand-50/60 p-4 md:p-5">
            {/* main image (swipeable) */}
            <div
              ref={mainImgRef}
              className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-brand-100 select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={images[index]}
                alt={`${product.name} image ${index + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* Prev / Next hotspots (desktop) */}
              {images.length > 1 && (
                <>
                  <button
                    className="hidden md:flex absolute inset-y-0 left-0 w-1/3 items-center justify-start text-white/70 hover:text-white"
                    onClick={goPrev}
                    aria-label="Previous image"
                  />
                  <button
                    className="hidden md:flex absolute inset-y-0 right-0 w-1/3 items-center justify-end text-white/70 hover:text-white"
                    onClick={goNext}
                    aria-label="Next image"
                  />
                </>
              )}
            </div>

            {/* thumbnails: keyboard accessible */}
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight') {
                        e.preventDefault(); goNext()
                      } else if (e.key === 'ArrowLeft') {
                        e.preventDefault(); goPrev()
                      } else if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault(); setIndex(i)
                      }
                    }}
                    tabIndex={0}
                    aria-label={`Show image ${i + 1} of ${images.length}`}
                    className={`aspect-square overflow-hidden rounded-lg ring-2 transition focus:outline-none ${
                      i === index
                        ? 'ring-gold-500'
                        : 'ring-brand-100 hover:ring-brand-200 focus:ring-brand-300'
                    }`}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Content */}
          <div className="py-4 md:p-8">
            <div className="flex items-start justify-between gap-3 ">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-brand-900">{product.name}</h3>
                <p className="mt-1 text-sm text-brand-800/80">{product.tagline}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-lg font-semibold text-gold-500">₹{product.price}</span>

              {/* OUT OF STOCK */}
              {!product.inStock && (
                <span className="text-xs rounded-full bg-brand-100 text-brand-800 px-2 py-1">
                  Out of stock
                </span>
              )}
             
            </div>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-brand-800">
              {product.description}
            </p>

            {/* benefits */}
            {product.benefits?.length > 0 && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((b, i) => {
                  const Icon = iconMap[b.icon]
                  return (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-brand-100 p-3">
                      <div className="mt-0.5">
                        <Icon className="h-5 w-5 text-gold-500" />
                      </div>
                      <p className="text-sm text-brand-900">{b.text}</p>
                    </div>
                  )
                })}
              </div>
            )}

            {/* actions */}
            {/* actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
                href={waLink(product.name)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-5 py-2"
            >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp us
            </a>

            <a
                href={mailLink(product.name)}
                className="btn btn-white px-5 py-2"
            >
                <Mail className="mr-2 h-5 w-5" />
                Email us
            </a>

            {/* Share / Copy */}
            <button
                onClick={onShare}
                className="btn btn-white px-5 py-2 flex items-center gap-2"
                aria-label="Share product or copy link"
                title={copied ? 'Copied!' : 'Share'}
            >
                {copied ? <Check className="h-5 w-5 text-gold-500" /> : <Share2 className="h-5 w-5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
