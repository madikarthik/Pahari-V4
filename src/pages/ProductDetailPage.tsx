import { useMemo, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products, type Benefit } from '../store/products'
import { MessageCircle, Mail, Star, Leaf, Shield, Heart, Droplet } from 'lucide-react'
import { waLink, mailLink } from '../utils/share'
import { reviewsByProduct, addReview, type ProductReviews } from '../store/reviews'

const iconMap: Record<Benefit['icon'], React.ComponentType<{ className?: string }>> = {
  Leaf, Shield, Star, Heart, Droplet
}

type Comment = {
  id: string; name: string; text: string; date: string; rating: number
}

function RatingStars({ value, size = 18 }: { value: number; size?: number }) {
  const stars = [1,2,3,4,5]
  return (
    <div className="flex items-center gap-0.5">
      {stars.map(i => (
        <Star key={i} size={size} className={i <= Math.round(value) ? 'fill-gold-500 text-gold-500' : 'text-brand-200'} />
      ))}
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const nav = useNavigate()
  const product = useMemo(() => products.find(p => p.id === id), [id])

  const images = useMemo<string[]>(
    () => (product?.images?.length ? product.images : product ? [product.image] : []),
    [product]
  )
  const [index, setIndex] = useState(0)

  // ⭐️ Pull ratings/comments from the store
  const initialPR: ProductReviews | undefined = id ? reviewsByProduct[id] : undefined
  const [avgRating, setAvgRating] = useState<number>(initialPR?.avgRating ?? 0)
  const [comments, setComments] = useState<Comment[]>(initialPR?.reviews ?? [])

  useEffect(() => { if (!product) nav('/products') }, [product, nav])
  useEffect(() => {
    if (id) {
      const pr = reviewsByProduct[id]
      setAvgRating(pr?.avgRating ?? 0)
      setComments(pr?.reviews ?? [])
    }
  }, [id])

  if (!product) return null

  const recommend = products.filter(p => p.id !== product.id).slice(0, 4)

  // add comment (updates the store & local state)
  const [yourName, setYourName] = useState('')
  const [yourText, setYourText] = useState('')
  const [yourRating, setYourRating] = useState(5)
  const submitComment = () => {
    if (!yourName.trim() || !yourText.trim() || !id) return
    const updated = addReview(id, { name: yourName, text: yourText, rating: yourRating })
    setAvgRating(updated.avgRating)
    setComments(updated.reviews)
    setYourName(''); setYourText(''); setYourRating(5)
  }

  return (
    <section className="container-pg py-6 md:py-10">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-brand-800/70">
        <button onClick={() => nav(-1)} className="hover:underline">Back</button> · <span>Product</span>
      </div>

      <div className="grid md:grid-cols-[1.15fr_1fr] gap-8">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-brand-100 select-none">
            <img src={images[index]} alt={`${product.name} image ${index+1}`} className="h-full w-full object-cover" />
            {images.length > 1 && (
              <>
                <button className="hidden md:block absolute inset-y-0 left-0 w-1/3" onClick={() => setIndex(i => (i-1+images.length)%images.length)} />
                <button className="hidden md:block absolute inset-y-0 right-0 w-1/3" onClick={() => setIndex(i => (i+1)%images.length)} />
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`aspect-square overflow-hidden rounded-lg ring-2 transition ${i === index ? 'ring-gold-500' : 'ring-brand-100 hover:ring-brand-200'}`}
                >
                  <img src={src} alt={`thumb ${i+1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-brand-900">{product.name}</h1>
          <p className="mt-1 text-sm text-brand-800/80">{product.tagline}</p>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-xl font-semibold text-gold-500">₹{product.price}</span>
            <div className="flex items-center gap-2">
              <RatingStars value={avgRating} />
              <span className="text-sm text-brand-800/70">{avgRating.toFixed(1)} · {comments.length} reviews</span>
            </div>
          </div>

          <p className="mt-4 text-brand-800 leading-relaxed">
            {product.description}
          </p>

          {product.benefits?.length > 0 && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.benefits.map((b, i) => {
                const Icon = iconMap[b.icon]
                return (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-brand-100 p-3">
                    <Icon className="h-5 w-5 text-gold-500 mt-0.5" />
                    <p className="text-sm text-brand-900">{b.text}</p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={waLink(product.name)} target="_blank" rel="noreferrer" className="btn btn-primary px-5 py-2">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp us
            </a>
            <a href={mailLink(product.name)} className="btn btn-white px-5 py-2">
              <Mail className="mr-2 h-5 w-5" /> Email us
            </a>
            {/* Share removed for now */}
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="mt-10 grid md:grid-cols-[1.15fr_1fr] gap-8">
        <div>
          <h2 className="text-xl font-semibold text-brand-900">Customer Reviews</h2>
          <div className="mt-4 space-y-4">
            {comments.map(c => (
              <div key={c.id} className="rounded-xl border border-brand-100 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-brand-900">{c.name}</div>
                  <div className="text-xs text-brand-800/60">{c.date}</div>
                </div>
                <div className="mt-1"><RatingStars value={c.rating} size={14} /></div>
                <p className="mt-2 text-sm text-brand-800">{c.text}</p>
              </div>
            ))}
            {comments.length === 0 && (
              <div className="text-sm text-brand-800/70">No reviews yet. Be the first to share your experience.</div>
            )}
          </div>

          {/* Add comment (writes to store in-memory) */}
          <div className="mt-6 rounded-xl border border-brand-100 p-4">
            <h3 className="font-semibold text-brand-900">Add your review</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <input value={yourName} onChange={e=>setYourName(e.target.value)} className="rounded-lg border border-brand-200 px-3 py-2" placeholder="Your name" />
              <select value={yourRating} onChange={e=>setYourRating(Number(e.target.value))} className="rounded-lg border border-brand-200 px-3 py-2">
                {[5,4,3,2,1].map(v => <option key={v} value={v}>{v} ⭐</option>)}
              </select>
            </div>
            <textarea value={yourText} onChange={e=>setYourText(e.target.value)} className="mt-3 w-full rounded-lg border border-brand-200 px-3 py-2" rows={4} placeholder="Share your experience..." />
            <button onClick={submitComment} className="mt-3 btn btn-primary px-5 py-2">Submit review</button>
          </div>
        </div>

        {/* Recommended products */}
        <div>
          <h2 className="text-xl font-semibold text-brand-900">You may also like</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {recommend.map(p => (
              <a key={p.id} href={`/product/${p.id}`} className="card overflow-hidden hover:shadow-lift transition">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="text-sm font-medium text-brand-900 line-clamp-1">{p.name}</div>
                  <div className="text-xs text-brand-800/80 line-clamp-1">{p.tagline}</div>
                  <div className="mt-1 text-sm font-semibold text-gold-500">₹{p.price}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}