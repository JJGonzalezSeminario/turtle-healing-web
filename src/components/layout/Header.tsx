'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Navigation } from './Navigation'
import { DoctolibCTA } from '@/components/sections/DoctolibCTA'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  // Der Button taucht erst nach 100px scrollen auf
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
        : 'bg-white py-4 border-b border-sage-100 shadow-sm'} 
        /* ☝️ Hier ist die neue optische Trennung (border & shadow-sm), auch wenn man ganz oben ist */
    `}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO & TEXT: Exakte Proportionen wie bei Turtle Wisdom */}
        <Link href="/" className="flex items-center gap-4 group">
          
          {/* 1. Das Icon: Deutlich größer (w-20 h-20 auf Desktop) */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
            <Image
              src="/images/turtle-logo-no-text.svg"
              alt="Turtle Healing Icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* 2. Der Text: Im Verhältnis kleiner (text-xl), damit die Schildkröte dominant bleibt */}
          <span className="font-sans font-bold text-lg md:text-xl text-[#C58695] whitespace-nowrap tracking-wide uppercase">
            TURTLE HEALING
          </span>
        </Link>

        {/* MITTE: Menüpunkte - jetzt in einem viel weicheren Salbeigrün, nicht mehr schwarz! */}
        <div className="hidden lg:block text-sage-600 font-medium">
          <Navigation />
        </div>

        {/* RECHTS: Termin-Button - Garantiert unsichtbar auf den ersten Blick */}
        <div className={`flex items-center transition-opacity duration-300 ${
          scrolled ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
          <DoctolibCTA variant="header" />
        </div>

      </div>
    </header>
  )
}