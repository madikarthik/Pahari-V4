import type { Product } from '../store/products'
import { waLink, mailLink } from '../utils/share'
import { Mail, MessageCircle } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { isMobile } from '../utils/device'

type OpenMode = 'modal' | 'link-auto' // 'modal' only used on desktop on Home

export default function ProductCard({
  product,
  onOpen,          // used only when OpenMode='modal' AND desktop
  openMode = 'link-auto',
}: {
  product: Product
  onOpen?: (p: Product) => void
  openMode?: OpenMode
}) {
  const nav = useNavigate()
  const loc = useLocation()

  const go = () => {
    const mobile = isMobile()
    if (openMode === 'modal' && !mobile && loc.pathname === '/') {
      onOpen?.(product)
    } else {
      nav(`/product/${product.id}`)
    }
  }

  return (
    <article
      className="group card overflow-hidden cursor-pointer"
      onClick={go}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && go()}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-0"
          loading="lazy"
        />
        {/* Hover image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternative view`}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-medium text-brand-900">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-brand-800/80">{product.tagline}</p>

        <div className="mt-3 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
          <span className="text-sm font-semibold text-gold-500">₹{product.price}</span>
          <div className="flex items-center gap-2">
            <a href={waLink(product.name)} target="_blank" rel="noreferrer" className="icon-btn" title="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={mailLink(product.name)} className="icon-btn" title="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
