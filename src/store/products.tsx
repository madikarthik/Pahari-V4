export type Benefit = { icon: 'Leaf' | 'Shield' | 'Star' | 'Heart' | 'Droplet'; text: string }

export type Product = {
  id: string
  name: string
  tagline: string
  price: number
  image: string
  hoverImage?: string 
  images: string[]
  benefits: Benefit[]
  description: string
  inStock?: boolean  
}

export const products: Product[] = [
  {
    id: 'wild-honey',
    name: 'Wild Himalayan Honey',
    tagline: 'Raw, unfiltered — floral notes from alpine blossoms',
    price: 499,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505575972945-338c3fdde1be?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Raw, single-origin honey gathered by local foragers from wild alpine blossoms. Unheated and unfiltered to preserve enzymes, pollen, and micronutrients.',
    benefits: [
      { icon: 'Leaf',   text: '100% natural, no additives' },
      { icon: 'Shield', text: 'Immunity-supporting antioxidants' },
      { icon: 'Droplet',text: 'Unheated—enzymes preserved' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
  {
    id: 'sea-buckthorn',
    name: 'Sea Buckthorn Jam',
    tagline: 'Tart & bright — handpicked berries from cold deserts',
    price: 349,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
     images: [
      'https://images.unsplash.com/photo-1514511547084-2d3a79c2985a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Small-batch, low-sugar jam from handpicked sea buckthorn. Naturally rich in vitamin C and omega fatty acids.',
    benefits: [
      { icon: 'Star',  text: 'Vibrant, tart flavor' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
  {
    id: 'rajma',
    name: 'Pahari Rajma (Red Kidney Beans)',
    tagline: 'Slow‑cooked creamy texture with earthy aroma',
    price: 299,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
     images: [
      'https://images.unsplash.com/photo-1514511547084-2d3a79c2985a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Small-batch, low-sugar jam from handpicked sea buckthorn. Naturally rich in vitamin C and omega fatty acids.',
    benefits: [
      { icon: 'Star',  text: 'Vibrant, tart flavor' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
  {
    id: 'gucchi',
    name: 'Gucchi (Wild Morel Mushrooms)',
    tagline: 'Rare, smoky, premium — for special occasions',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
     images: [
      'https://images.unsplash.com/photo-1514511547084-2d3a79c2985a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Small-batch, low-sugar jam from handpicked sea buckthorn. Naturally rich in vitamin C and omega fatty acids.',
    benefits: [
      { icon: 'Star',  text: 'Vibrant, tart flavor' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
  {
    id: 'apricot-oil',
    name: 'Cold‑Pressed Apricot Oil',
    tagline: 'Skincare staple from stone fruit kernels',
    price: 699,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
     images: [
      'https://images.unsplash.com/photo-1514511547084-2d3a79c2985a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Small-batch, low-sugar jam from handpicked sea buckthorn. Naturally rich in vitamin C and omega fatty acids.',
    benefits: [
      { icon: 'Star',  text: 'Vibrant, tart flavor' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
  {
    id: 'organic-tea',
    name: 'Himalayan Herbal Tea Blend',
    tagline: 'Mint, tulsi, rhododendron — calming evening brew',
    price: 399,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1601924928408-8f4cdd76fd0c?q=80&w=1200&auto=format&fit=crop',
     images: [
      'https://images.unsplash.com/photo-1514511547084-2d3a79c2985a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop',
    ],
    description:
      'Small-batch, low-sugar jam from handpicked sea buckthorn. Naturally rich in vitamin C and omega fatty acids.',
    benefits: [
      { icon: 'Star',  text: 'Vibrant, tart flavor' },
      { icon: 'Heart', text: 'Vitamin C powerhouse' },
    ],
    inStock: true,
  },
]