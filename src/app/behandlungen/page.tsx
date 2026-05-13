'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

// --- DATEN FÜR DIAGNOSTIK ---
const diagnostics = [
  { 
    title: "Ganzheitliche körperliche Untersuchung", 
    icon: "/icons/body.svg",
    description: "Ich erfahre das Körper-System wie eine Einheit, deshalb werde ich nicht nur das betroffene Gelenk oder Organ untersuchen, sondern insgesamt die Regulations-Fähigkeit und die Stabilität. Auffälligkeiten werden anschließend behoben. Die Heilung bringt dann der Körper selbst, wenn beide Funktionen reaktiviert wurden. Oft ist die Ursache für bestimmte Beschwerden nämlich ganz woanders, als wahrgenommen." 
  },
  { 
    title: "Bildgebung", 
    icon: "/icons/mri.svg",
    description: "Moderne Bildgebungsverfahren erlauben uns einen präzisen Blick ins Innere. So können wir strukturelle Veränderungen an Knochen, Gelenken und Gewebe exakt lokalisieren, um eine zielgerichtete und schonende Therapie zu planen." 
  },
  { 
    title: "Blutdiagnostik", 
    icon: "/icons/blood.svg",
    description: "Das Blut ist der Spiegel unserer Gesundheit. Durch gezielte Laboranalysen decken wir Mangelzustände, Entzündungsherde und hormonelle Dysbalancen auf, die oft die unsichtbare Ursache für orthopädische Beschwerden sind." 
  },
  { 
    title: "Urindiagnostik", 
    icon: "/icons/urine.svg",
    description: "Die Urindiagnostik liefert uns wichtige Hinweise auf die Stoffwechsellage, den Säure-Basen-Haushalt und die Funktionstüchtigkeit der Nieren – essentielle Faktoren für ein ganzheitliches Heilungskonzept." 
  },
  { 
    title: "Herzratenvariabilität", 
    icon: "/icons/heart.svg",
    description: "Die Herzratenvariabilität (HRV) ist ein Maß dafür, wie sich die Zeitintervalle zwischen aufeinanderfolgenden Herzschlägen innerhalb eines bestimmten Zeitraums verändern. Sie zeigt uns, wie gut Ihr vegetatives Nervensystem mit Stress umgehen kann." 
  },
  { 
    title: "Sonografie", 
    icon: "/icons/ultrasound.svg",
    description: "Sonografie, auch bekannt als Ultraschalluntersuchung, ist ein strahlungsfreies, bildgebendes Verfahren. Wir verwenden Schallwellen, um weiche Strukturen wie Muskeln, Sehnen und Bänder in Echtzeit und Bewegung sichtbar zu machen." 
  },
  { 
    title: "Darm- und Stuhldiagnostik", 
    icon: "/icons/stomach.svg",
    description: "Ein gesunder Darm ist das Zentrum des Immunsystems. Stuhlproben enthalten wichtige Informationen über die Gesundheit des Verdauungstrakts und die Zusammensetzung Ihres Mikrobioms, welches direkten Einfluss auf Entzündungsprozesse im Körper hat." 
  }
]

// --- DATEN FÜR BEHANDLUNGEN (Korrigierte Dateiendungen) ---
const treatments = [
  {
    title: "Osteopathie & Manuelle Medizin",
    description: "Strukturelle Heilung für den Bewegungsapparat: Wir kombinieren Osteopathie und Manuelle Therapie mit der Autonomen Haltungsregulation nach Norbert Fuhr (AHNF). Durch spezifische Handgriffe lösen wir Gelenkblockaden und regulieren das autonome Nervensystem, um das Zusammenspiel von Muskeln und Gelenken nachhaltig zu optimieren.",
    image: "/behandlungen/1.png" // War vorher .jpg, ist in deinem Ordner aber ein .png
  },
  {
    title: "Regenerative Medizin & Infusionen",
    description: "Zelluläre Erneuerung von innen: Unsere Infusionstherapien nutzen Mikronährstoffe, Ozon und Chelatbildner zur Entgiftung und Stärkung. Die Ozon-Therapie (Eigenblutbehandlung) verbessert die Sauerstoffversorgung und Zellfunktion, während CO₂-Trockenbäder den Stoffwechsel anregen und die Wundheilung fördern.",
    image: "/behandlungen/2.jpg"
  },
  {
    title: "Traditionelle Chinesische Medizin",
    description: "Harmonisierung des Qi: Basierend auf der Yin-Yang-Lehre nutzen wir Akupunktur, Kräutermedizin und Moxibustion. Durch das Setzen feiner Nadeln entlang der Meridiane lösen wir energetische Blockaden und stellen das natürliche Gleichgewicht im Körper wieder her.",
    image: "/behandlungen/3.png"
  },
  {
    title: "Ganzheitliche Körperarbeit",
    description: "Tiefe Lösung auf allen Ebenen: Therapeutische Massagen, Kraniosakrale Therapie und Wärmetherapie verschmelzen zu einer Einheit. Wir harmonisieren den Liquorpuls und lösen physische sowie emotionale Traumata im Gewebe, um die Selbstheilungskräfte zu aktivieren.",
    image: "/behandlungen/4.jpg"
  },
  {
    title: "Energetische Medizin",
    description: "Heilung durch Schwingung: Mittels Reiki, Reconnective Healing und Aurareinigung klären wir das feinstoffliche Energiefeld. Das kinesiologische Austesten dient uns dabei als Bio-Feedback, um individuelle Stressfaktoren und energetische Ungleichgewichte präzise zu identifizieren.",
    image: "/behandlungen/5.png"
  },
  {
    title: "Mentale Transformation",
    description: "Befreiung von inneren Blockaden: Wir nutzen Hypnose, Logosynthese und systemische Aufstellungen, um belastende Gedankenmuster und Traumata aufzulösen. Unterstützt durch Gebetsheilung und Mantras lenken wir Energie neu, um positive Veränderungen im Fühlen und Handeln zu ermöglichen.",
    image: "/behandlungen/6.png" // War vorher .jpg, ist in deinem Ordner aber ein .png
  },
  {
    title: "Neuraltherapie",
    description: "Regulation des Nervensystems: Durch gezielte Injektionen lokaler Betäubungsmittel an Störfeldern oder Narben normalisieren wir gestörte Regulationskreisläufe. Diese Methode dient als effektive Brücke zur Behandlung chronischer Schmerzen und Entzündungen über das vegetative Nervensystem.",
    image: "/behandlungen/7.png"
  }
]

export default function BehandlungenPage() {
  const [activeDiag, setActiveDiag] = useState(0)
  const diagListRef = useRef<HTMLDivElement>(null)

  const [selectedTreat, setSelectedTreat] = useState<number | null>(null)

  useEffect(() => {
    if (diagListRef.current) {
      const activeElement = diagListRef.current.children[activeDiag] as HTMLElement;
      if (activeElement) {
        diagListRef.current.scrollTo({
          top: activeElement.offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
  }, [activeDiag])

  useEffect(() => {
    if (selectedTreat !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedTreat])

  return (
    <main className="min-h-screen bg-[#FDFDFC] pt-40 pb-24 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D3A3A] mb-8"
        >
          Diagnose & Behandlungen
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-[#C58695] mx-auto rounded-full"
        />
      </div>

      {/* ==================================================== */}
      {/* 1. DIAGNOSTIK SECTION (Interaktives Split-Layout)      */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#2D3A3A] mb-16">
          Diagnose-Möglichkeiten
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div 
            ref={diagListRef}
            className="lg:w-5/12 flex flex-col gap-3 lg:h-[600px] overflow-y-auto pr-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {diagnostics.map((item, index) => {
              const isActive = activeDiag === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveDiag(index)}
                  className={`group relative flex items-center gap-6 p-5 rounded-3xl transition-all duration-500 text-left overflow-hidden ${
                    isActive ? 'bg-[#2D3A3A] shadow-xl translate-x-2' : 'bg-white/50 hover:bg-white hover:shadow-md border border-transparent hover:border-neutral-100'
                  }`}
                >
                  <div className={`relative w-10 h-10 shrink-0 transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                    <Image src={item.icon} alt={item.title} fill sizes="40px" className={`object-contain transition-all duration-500 ${isActive ? 'brightness-0 invert' : ''}`} />
                  </div>
                  <h3 className={`font-serif text-lg transition-colors duration-500 z-10 ${isActive ? 'text-white' : 'text-[#2D3A3A]'}`}>
                    {item.title}
                  </h3>
                  {isActive && (
                    <motion.div layoutId="activeDiagIndicator" className="absolute inset-0 bg-[#2D3A3A] rounded-3xl -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </button>
              )
            })}
          </div>

          <div className="lg:w-7/12 relative">
            <div className="sticky top-40 bg-white rounded-[40px] p-10 md:p-14 shadow-xl border border-neutral-100 min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeDiag} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}>
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mb-8 opacity-20">
                     <Image src={diagnostics[activeDiag].icon} alt={diagnostics[activeDiag].title} fill sizes="(max-width: 768px) 96px, 112px" className="object-contain" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#2D3A3A] mb-8 leading-tight">{diagnostics[activeDiag].title}</h3>
                  <div className="w-16 h-1 bg-[#C58695] mb-8 rounded-full" />
                  <p className="text-lg text-[#5C6E6E] leading-relaxed font-light">{diagnostics[activeDiag].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. BEHANDLUNGEN SECTION                                */}
      {/* ==================================================== */}
      <section className="bg-[#F9FAFA] py-32 px-6 rounded-[50px] mx-4 md:mx-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-[#2D3A3A] mb-20">
            Mögliche Behandlungen
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                layoutId={`card-${index}`}
                onClick={() => setSelectedTreat(index)}
                className="group cursor-pointer relative h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <motion.div className="absolute inset-0" layoutId={`image-${index}`}>
                  {/* HIER WURDE "relative" HINZUGEFÜGT */}
                  <div className="relative w-full h-full bg-[#E5EAE7]">
                     <Image 
                       src={treatment.image} 
                       alt={treatment.title} 
                       fill 
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                       className="object-cover transition-transform duration-700 group-hover:scale-105" 
                     />
                  </div>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A3A]/90 via-[#2D3A3A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div layoutId={`title-${index}`} className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white leading-snug">
                    {treatment.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. DAS "WOW" MODAL                                     */}
      {/* ==================================================== */}
      <AnimatePresence>
        {selectedTreat !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreat(null)}
              className="fixed inset-0 bg-[#2D3A3A]/60 backdrop-blur-md z-[100] cursor-pointer"
            />

            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedTreat}`}
                className="bg-white rounded-[40px] overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto"
              >
                <motion.div layoutId={`image-${selectedTreat}`} className="relative w-full md:w-5/12 h-64 md:h-auto shrink-0 bg-[#E5EAE7]">
                   <Image 
                     src={treatments[selectedTreat].image} 
                     alt={treatments[selectedTreat].title} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover" 
                   />
                </motion.div>

                <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col relative overflow-y-auto bg-[#FDFDFC]">
                  
                  <button
                    onClick={() => setSelectedTreat(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-[#C58695] hover:text-white transition-colors"
                  >
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <motion.h3 layoutId={`title-${selectedTreat}`} className="font-serif text-3xl md:text-4xl text-[#2D3A3A] mb-8 pr-10 leading-tight">
                    {treatments[selectedTreat].title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-16 h-1 bg-[#C58695] mb-8 rounded-full" />
                    <p className="text-lg text-[#5C6E6E] leading-relaxed font-light">
                      {treatments[selectedTreat].description}
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </main>
  )
}