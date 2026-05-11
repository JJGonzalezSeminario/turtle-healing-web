'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DoctolibCTA } from './DoctolibCTA'

export function Hero() {
  return (
    <section className="relative pt-24 pb-8 px-6 min-h-[90vh] flex flex-col justify-center items-center bg-[#FDFDFC]">

      {/* Titel */}
      <div className="max-w-5xl mx-auto text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-3xl md:text-5xl text-[#2D3A3A] mb-4 leading-tight">
            Privatpraxis für ganzheitliche Orthopädie <br className="hidden md:block" />
            & Akademie für energetische Medizin
          </h1>
          <p className="text-lg md:text-xl text-[#2D3A3A] font-medium">
            Charlottenburg-Berlin | Ximena Martínez-Micus
          </p>
        </motion.div>
      </div>

      {/* NEU: Willkommenstext */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-2xl mx-auto text-center mb-8"
      >
        <p className="text-base md:text-lg text-[#5C6E6E] leading-relaxed">
          Herzlich willkommen bei Turtle Healing - Wir begleiten Sie ganzheitlich auf Ihrem persönlichen Weg zu mehr Gesundheit und Wohlbefinden.
        </p>
      </motion.div>

      {/* 3-Spalten Layout: Praxis - Logo - Akademie */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full">

        {/* Spalte 1: Praxis */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative w-full lg:w-1/3 h-[280px] md:h-[360px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/praxis-bg.jpg"
            alt="Behandlungsraum Praxis"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-center items-center">
            <h2 className="font-serif text-2xl mb-2">Praxis</h2>
            <p className="text-white/90 mb-5 text-xs md:text-sm italic">
              Wo schulmedizinische Expertise auf tiefgreifende energetische Heilmethoden trifft. Wir begleiten Sie individuell auf Ihrem Weg zu schmerzfreier Beweglichkeit und innerer Balance.
            </p>
            <Link
              href="/behandlungen"
              className="border-2 border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#2D3A3A] transition-all duration-300 shadow-lg"
            >
              Praxis entdecken
            </Link>
          </div>
        </motion.div>

        {/* Spalte 2: Logo & CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center w-full lg:w-1/3 order-first lg:order-none mb-8 lg:mb-0"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
            <Image
              src="/images/turtle-logo.svg"
              alt="Turtle Healing Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <DoctolibCTA variant="hero" />
        </motion.div>

        {/* Spalte 3: Akademie */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group relative w-full lg:w-1/3 h-[280px] md:h-[360px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/akademie-bg.jpg"
            alt="Turtle Wisdom Akademie"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-center items-center">
            <h2 className="font-serif text-2xl mb-2">Akademie</h2>
            <p className="text-white/90 mb-5 text-xs md:text-sm italic">
              Erfahre die transformierende Kraft der energetischen Medizin. In unseren Ausbildungen vermitteln wir fundiertes Wissen für deine persönliche und berufliche Weiterentwicklung.
            </p>
            <Link
              href="/akademie"
              className="border-2 border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#2D3A3A] transition-all duration-300 shadow-lg"
            >
              Akademie besuchen
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}