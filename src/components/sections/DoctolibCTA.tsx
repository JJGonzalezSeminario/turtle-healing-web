'use client'
import Link from 'next/link'

export function DoctolibCTA({ variant = 'hero' }: { variant?: 'header' | 'hero' | 'footer' }) {
  const doctolibUrl = "https://www.doctolib.de/privatpraxis/berlin/turtle-healing-privatpraxis-fuer-energetische-medizin-und-ganzheitliche-heilkunde"

  // Die exakte Hintergrundfarbe deines Footers: #2D3A3A
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300"
  const colorStyles = "bg-[#2D3A3A] text-white hover:opacity-90 shadow-md"

  if (variant === 'header') {
    return (
      <Link href={doctolibUrl} target="_blank" className={`${baseStyles} ${colorStyles} text-xs px-6 py-2.5 whitespace-nowrap`}>
        Termin buchen
      </Link>
    )
  }

  if (variant === 'hero') {
    return (
      <Link href={doctolibUrl} target="_blank" className={`${baseStyles} ${colorStyles} text-sm px-8 py-3.5`}>
        Termin online buchen
      </Link>
    )
  }

  return (
    <Link href={doctolibUrl} target="_blank" className="text-[#2D3A3A] hover:text-[#C58695] font-medium underline underline-offset-4">
      Termin auf Doctolib buchen
    </Link>
  )
}