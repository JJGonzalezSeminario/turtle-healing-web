'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { text: "Frau Martinez-Micus hat mir mit ihrer ganzheitlichen und sorgfältigen Behandlung sehr geholfen – meine Beschwerden sind fast vollständig verschwunden...", author: "Patientin" },
  { text: "Ich bin seit 2016 Patientin in der Praxis von Dr. Engelbert gewesen... Nunmehr bin ich Patientin bei seiner Nachfolgerin Frau Dr. Martinez...", author: "Nadine T." },
  { text: "Ich bin sehr dankbar für die Erfahrung die ich in dieser Praxis mit meiner Tochter machen durfte. Frau Martinez hat sich sehr viel Zeit genommen...", author: "Julia E." },
  { text: "Ich habe mich verlaufen und kam deshalb eine viertel Stunde zu spät... Frau Doktor Martinez hat alles super toll gemacht...", author: "Margret J." }
]

export function Testimonial() {
  const [index, setIndex] = useState(0)

  // Der Timer wechselt die Testimonials alle 8 Sekunden
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) 
    return () => clearInterval(timer)
  }, [index])

  return (
    <section className="py-24 bg-[#F9FAFA] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          
          <AnimatePresence mode="wait">
            {/* FIX: Wir animieren nur DIESES eine motion.div. 
               Darin befinden sich dann beide Karten. 
            */}
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[0, 1].map((offset) => {
                const currentIdx = (index + offset) % testimonials.length
                return (
                  <div
                    key={currentIdx}
                    className="bg-white p-10 rounded-[40px] shadow-sm border border-sand-200 flex flex-col justify-between min-h-[320px]"
                  >
                    <div>
                      {/* Rosa Anführungszeichen aus deinem Logo */}
                      <div className="text-[#C58695] text-5xl font-serif mb-4 leading-none select-none">“</div>
                      <p className="font-serif text-lg text-sage-800 italic leading-relaxed mb-8">
                        {testimonials[currentIdx].text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-px w-8 bg-[#d4d4d4]" />
                      <span className="font-sans font-bold text-sage-800 tracking-widest uppercase text-[10px]">
                        {testimonials[currentIdx].author}
                      </span>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Nav-Dots mit korrekter Rosa-Farbe */}
          <div className="flex justify-center items-center gap-3 mt-12 relative z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === index 
                    ? 'bg-[#C58695] w-8 h-2.5' // Aktiver Dot (Rosa aus Logo)
                    : 'bg-[#e4e7e5] w-2.5 h-2.5 hover:bg-[#C58695]/50'
                }`}
                aria-label={`Gehe zu Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}