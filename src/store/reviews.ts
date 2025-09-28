export type Review = {
  id: string
  name: string
  text: string
  date: string         // YYYY-MM-DD
  rating: number       // 1..5
}

export type ProductReviews = {
  avgRating: number
  reviews: Review[]
}

/** Maintain all product reviews here (edit this file to update data) */
export const reviewsByProduct: Record<string, ProductReviews> = {
  'wild-honey': {
    avgRating: 4.7,
    reviews: [
      { id: 'c1', name: 'Aarav', text: 'Rich flavour and feels authentic.', date: '2025-08-01', rating: 5 },
      { id: 'c2', name: 'Meera', text: 'Loved the aroma. Fast shipping.',   date: '2025-08-05', rating: 4 },
    ],
  },
  'sea-buckthorn': {
    avgRating: 4.5,
    reviews: [
      { id: 's1', name: 'Kabir', text: 'Tart and bright, great on toast.', date: '2025-08-10', rating: 5 },
    ],
  },
  'rajma': {
    avgRating: 4.5,
    reviews: [
      { id: 's1', name: 'Kabir', text: 'Tart and bright, great on toast.', date: '2025-08-10', rating: 5 },
    ],
  },
  'gucchi': {
    avgRating: 4.5,
    reviews: [
      { id: 's1', name: 'Kabir', text: 'Tart and bright, great on toast.', date: '2025-08-10', rating: 5 },
    ],
  },
  'apricot-oil': {
    avgRating: 4.5,
    reviews: [
      { id: 's1', name: 'Kabir', text: 'Tart and bright, great on toast.', date: '2025-08-10', rating: 5 },
    ],
  },
  'organic-tea': {
    avgRating: 4.5,
    reviews: [
      { id: 's1', name: 'Kabir', text: 'Tart and bright, great on toast.', date: '2025-08-10', rating: 5 },
    ],
  },
  
}

/** Helper to compute average */
function computeAvg(reviews: Review[]) {
  if (!reviews.length) return 0
  const sum = reviews.reduce((a, r) => a + r.rating, 0)
  return Number((sum / reviews.length).toFixed(1))
}

/** Optional runtime updater (in-memory). Useful for the form on product page. */
export function addReview(
  productId: string,
  input: { name: string; text: string; rating: number; date?: string }
): ProductReviews {
  const pr = reviewsByProduct[productId] ?? { avgRating: 0, reviews: [] }
  const review: Review = {
    id: Math.random().toString(36).slice(2),
    name: input.name,
    text: input.text,
    rating: input.rating,
    date: input.date ?? new Date().toISOString().slice(0, 10),
  }
  pr.reviews = [review, ...pr.reviews]
  pr.avgRating = computeAvg(pr.reviews)
  reviewsByProduct[productId] = pr
  return pr
}
