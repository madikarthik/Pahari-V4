import { useState } from 'react'
import { products, type Product } from '../store/products'
import ProductCard from '../ui/ProductCard'
import ProductDetailModal from '../ui/ProductDetailModal'

export default function FeaturedProducts() {
  const featured = products.slice(0, 4)
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section id="featured" className="container-pg py-5">
      {/* <div className="flex items-center justify-Center"> */}
        <h2 className="text-2xl md:text-2xl font-semibold text-brand-900 text-center">Straight from the Source. No Middlemen. No Nonsense</h2>
      {/* </div> */}
{/* <p className="text-sm font-light text-brand-900 text-center">Straight from the Source. No Middlemen. No Nonsense</p> */}
<p className="text-lg font-semibold text-brand-900 text-center">
    <a href="/products" className="text-lg text-brand-700 hover:text-brand-300 "><u>Shop More</u></a>
</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map(p => (
          <ProductCard key={p.id} product={p} openMode="modal" onOpen={setSelected} />
        ))}
      </div>

      {selected && (
        <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
