'use client'
import { motion } from 'framer-motion'

export function ParacelsusQuote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="px-6 my-12"
    >
      <div className="max-w-3xl mx-auto py-10 border-t border-b border-sage-400 bg-sage-50/50 text-center">
        <blockquote className="m-0">
          <p className="font-serif text-2xl italic text-sage-800 leading-relaxed mb-4 px-4">
            „Der ist ein Arzt, der um das Unsichtbare weiß, das keinen Namen hat, keine Materie und doch seine Wirkung.“
          </p>
          <footer className="font-sans text-sm tracking-widest text-rose-600 uppercase">
            — Paracelsus
          </footer>
        </blockquote>
      </div>
    </motion.section>
  )
}