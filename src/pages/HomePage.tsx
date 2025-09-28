import Hero from '../sections/Hero'
import AboutShort from '../sections/AboutShort'
// import Values from '../sections/Values'
import PromiseGrid from '../sections/PromiseGrid'
import Testimonials from '../sections/Testimonials' 
import FeaturedProducts from '../sections/FeaturedProducts'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutShort />
      <PromiseGrid />  
      <Testimonials /> 
      {/* <Values /> */}
      
    </>
  )
}