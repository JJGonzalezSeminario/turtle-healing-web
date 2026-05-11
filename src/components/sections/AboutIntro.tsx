'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutIntro() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* HINWEIS: Hier ein schönes Portrait von dir hochladen */}
          <Image 
            src="/images/portrait-ximena.jpg" 
            alt="Dr. med. Ximena Martínez-Micus" 
            fill 
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-rose-600 font-medium tracking-widest uppercase text-sm">
            Ihre Fachärztin
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mt-4 mb-6">
            Ximena Martínez-Micus
          </h2>
          <p className="text-sage-600 text-lg leading-relaxed mb-6">
            Als Fachärztin für Orthopädie und Unfallchirurgie kombiniere ich fundiertes medizinisches Wissen mit jahrelanger Erfahrung in der TCM und energetischen Heilmethoden.
          </p>
          <p className="text-sage-600 text-lg leading-relaxed mb-8">
            Mein Ziel ist es, nicht nur Symptome zu behandeln, sondern Sie auf Ihrem ganz persönlichen Weg zur Heilung zu begleiten – mit Zeit, Empathie und einem ganzheitlichen Blick auf Ihre Gesundheit.
          </p>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-sage-50 rounded-lg text-sage-700 text-sm font-medium border border-sage-100">Orthopädie</div>
             <div className="px-4 py-2 bg-sage-50 rounded-lg text-sage-700 text-sm font-medium border border-sage-100">TCM</div>
             <div className="px-4 py-2 bg-sage-50 rounded-lg text-sage-700 text-sm font-medium border border-sage-100">Energetik</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}