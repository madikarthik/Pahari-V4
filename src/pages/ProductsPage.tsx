import { useState } from 'react'
import { products, type Product } from '../store/products'
import ProductCard from '../ui/ProductCard'
import ProductDetailModal from '../ui/ProductDetailModal'

export default function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section className="container-pg py-16">
      <h1 className="text-2xl md:text-3xl font-semibold text-brand-900">All Products</h1>
        <p className="text-sm text-gray-600">Authentic Himalayan goodness — small batch, hand‑picked.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onOpen={setSelected} />
        ))}
      </div>

      {selected && (
        <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
