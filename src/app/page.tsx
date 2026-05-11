import { Hero } from '@/components/sections/Hero'
import { ParacelsusQuote } from '@/components/sections/ParacelsusQuote'
import { AboutIntro } from '@/components/sections/AboutIntro'
import { Testimonial } from '@/components/sections/Testimonial'


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutIntro />
      <ParacelsusQuote />
      <Testimonial />
      
      {/* Hier könnte später noch eine Sektion mit den 
          Lehren der Schildkröte oder News kommen */}
    </div>
  )
}