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

// --- DATEN FÜR BEHANDLUNGEN ---
const treatments = [
  {
    title: "Infusion",
    description: "Infusionen sind Lösungen, die in den Körper eingebracht werden, um bestimmte Medikamente oder Nährstoffe zu verabreichen. Es wird bei einer Vene im Arm oder in der Hand gelegt. Je nach Behandlungsziel nutzen wir Infusionen mit Mikronährstoffen, Ozon, Chelatbildnern, homöopathischen Mitteln, Basenmischungen oder Procain (Lokalanästhetikum).",
    image: "/images/behandlung-1.jpg"
  },
  {
    title: "Ozon-Therapie",
    description: "Die Ozontherapie ist eine alternative medizinische Behandlungsmethode, bei der medizinisches Ozon zur Behandlung von verschiedenen Gesundheitsproblemen eingesetzt wird. Als Eigenblutbehandlung wird dem Patienten Blut entnommen, mit einem Ozon-Sauerstoffgemisch versetzt und intravenös zurückgespritzt. Bei Verletzungen wird Blut entnommen, mit Ozon vermengt und injiziert. Die Therapie verbessert die Sauerstoffversorgung, stärkt das Immunsystem und reduziert Entzündungen.",
    image: "/images/behandlung-2.jpg"
  },
  {
    title: "CO₂-Bad",
    description: "Das CO₂-Bad ist auch als CO₂-Trockenbad-Therapie (CAT) bekannt. Dabei wird die Haut mit Kohlendioxid (CO₂) angereichertem Gas behandelt – also trocken gebadet. Diese Behandlung fördert die Durchblutung, regt den Stoffwechsel an und hat positive Effekte auf das Herz-Kreislauf-System. Es wird zur Entspannung, zur Heilung von Wunden oder zur Linderung von Hauterkrankungen eingesetzt.",
    image: "/images/behandlung-3.jpg"
  },
  {
    title: "Ganzheitliche Therapeutische Massage",
    description: "Entspannungs- und lösende Massagetechniken werden mit energetischer Mobilisation und der Anwendung von Bachblüten kombiniert. Sie unterstützt das körperliche und energetische Gleichgewicht in einem ganzheitlich betreuenden Umfeld.",
    image: "/images/behandlung-4.jpg"
  },
  {
    title: "Manuelle Therapie",
    description: "Die Manuelle Therapie ist eine spezialisierte Form der physiotherapeutischen Behandlung, die darauf abzielt, Funktionsstörungen des Bewegungsapparates zu diagnostizieren, zu behandeln und zu verbessern. Es werden spezifische Handgriffe eingesetzt, um Gelenkblockaden, Muskelverspannungen sowie Bewegungseinschränkungen zu lösen und Schmerzen zu lindern.",
    image: "/images/behandlung-5.jpg"
  },
  {
    title: "Akupunktur",
    description: "Akupunktur ist eine Behandlungsmethode der Traditionellen Chinesischen Medizin (TCM), bei der feine Nadeln an Akupunkturpunkten platziert werden. Durch das Setzen der Nadeln wird der Energiefluss im Körper reguliert, Blockaden gelöst und das Gleichgewicht von Yin und Yang wiederhergestellt. Sie wird zur Behandlung von Schmerzen, Stress, Schlafstörungen und vielem mehr eingesetzt.",
    image: "/images/behandlung-6.jpg"
  },
  {
    title: "Traditionelle Chinesische Medizin (TCM)",
    description: "Die TCM ist ein ganzheitliches System, das auf dem Gleichgewicht des Qi (Lebensenergie) im Körper basiert. Sie nutzt Prinzipien wie Yin und Yang sowie die Fünf-Elemente-Theorie. Zu den Behandlungsmethoden gehören Akupunktur, Kräutermedizin, Moxibustion und Ernährungstherapie. Die Diagnose erfolgt über Puls, Zunge und Anamnese.",
    image: "/images/behandlung-7.jpg"
  },
  {
    title: "AHNF",
    description: "Die Autonome Haltungsregulation nach Norbert Fuhr (AHNF) ist eine spezifische Methode zur Behandlung von muskulären Dysbalancen und Haltungsproblemen. Die Methode konzentriert sich darauf, das autonome Nervensystem zu regulieren, um das Zusammenspiel von Muskeln, Gelenken und dem Nervensystem zu optimieren. Es sind Techniken aus manueller Therapie, Osteopathie und Akupressur enthalten.",
    image: "/images/behandlung-8.jpg"
  },
  {
    title: "Kinesiologisches Austesten",
    description: "Beim kinesiologischen Austesten handelt es sich um eine Technik, bei der Muskeltests verwendet werden, um Informationen über den energetischen Zustand des Körpers zu erhalten. Durch das Erfassen unbewusster Veränderungen im Muskeltonus können wir erfahren, welche Substanzen, Situationen oder Objekte gut oder schlecht für das eigene System sind.",
    image: "/images/behandlung-9.jpg"
  },
  {
    title: "Neuraltherapie",
    description: "Die Neuraltherapie beruht auf der Annahme, dass Störungen im vegetativen Nervensystem zu Beschwerden führen. Durch gezielte Injektionen eines lokalen Betäubungsmittels an Störfeldern oder Narben wird die elektrische Spannung reguliert. Sie zielt darauf ab, gestörte Regulationskreisläufe zu normalisieren und das vegetative Nervensystem zu harmonisieren.",
    image: "/images/behandlung-10.jpg"
  },
  {
    title: "Logosynthese",
    description: "Logosynthese ist eine Therapiemethode, die darauf abzielt, belastende Gedanken, Emotionen und Blockaden durch das gezielte Lenken von Energie mithilfe von Worten aufzulösen. Es werden spezifische Sätze verwendet, um fixierte Energien zu transformieren und loszulassen. Dies ermöglicht positive Veränderungen im Denken, Fühlen und Handeln.",
    image: "/images/behandlung-11.jpg"
  },
  {
    title: "Hypnose",
    description: "Hypnose ist ein Zustand erhöhter Aufmerksamkeit, Konzentration und suggestibler Trance, der durch tiefe Entspannung erreicht wird. In diesem Zustand ist das Unterbewusstsein besonders empfänglich für positive Veränderungen. Hypnose ist keine Kontrolle des Geistes, sondern eine geführte Technik zur Erreichung mentaler Entspannung und Heilung.",
    image: "/images/behandlung-12.jpg"
  },
  {
    title: "Reiki",
    description: "Der Begriff 'Reiki' stammt aus dem Japanischen und bedeutet 'universelle Lebensenergie'. Die Energie wird über die Hände der Praktizierenden an den Empfänger geleitet. Durch sanftes Auflegen der Hände auf Körperregionen oder Chakras werden die Energien harmonisiert, Blockaden gelöst und das Gleichgewicht von Körper, Geist und Seele wiederhergestellt.",
    image: "/images/behandlung-13.jpg"
  },
  {
    title: "Kraniosakrale Therapie",
    description: "Eine sanfte, manuelle Behandlungsmethode, die das craniosakrale System harmonisiert und Blockaden im Schädel-, Wirbelsäulen- und Kreuzbeinbereich löst. Sie unterstützt den Fluss der Hirn- und Rückenmarksflüssigkeit, um Selbstheilungskräfte zu aktivieren. Sie wird bei Kopfschmerzen, Rückenschmerzen, Stress oder Traumata eingesetzt.",
    image: "/images/behandlung-14.jpg"
  },
  {
    title: "Aurareinigung",
    description: "Die Aurareinigung ist ein spiritueller Prozess, bei dem energetische Blockaden oder Störungen in der menschlichen Aura, dem feinstofflichen Energiefeld um den Körper herum, gelöst und gereinigt werden. Anschließend wird die Aura wieder mit frischer Energie aufgeladen.",
    image: "/images/behandlung-15.jpg"
  },
  {
    title: "Gebetsheilung",
    description: "Die Gebetsheilung, auch Besprechen genannt, ist eine Form der Energie- und Informations-Übertragung durch Gebete aus verschiedenen Weltreligionen. In der Regel hält die Behandlerin dabei die Hand auf die erkrankte Stelle und rezitiert leise das Heilgebet, dessen Energie über die Hände weitergegeben wird.",
    image: "/images/behandlung-16.jpg"
  },
  {
    title: "Aufstellungen",
    description: "Aufstellungen werden eingesetzt, um tiefere Einsichten zu gewähren, Hindernisse zu lösen und emotionale Heilung zu unterstützen. Im Rahmen der Therapie werden Schmerzen, Blockaden oder Konflikte als Energiefeld dargestellt. Hiermit können wir abstrakte Probleme greifbar machen, um sie zu verstehen und aufzulösen.",
    image: "/images/behandlung-17.jpg"
  },
  {
    title: "Mantras",
    description: "Mantras sind heilige Silben, Wörter oder Klänge. Wir nutzen sie als indische Heiltechnik, bei der man vedische Gebete singt oder rezitiert, um eine bestimmte Energie oder Information in den Körper zu geben. Die Übertragung wird meistens zwischen den Augenbrauen durch die Finger geleitet.",
    image: "/images/behandlung-18.jpg"
  },
  {
    title: "Reconnective Healing",
    description: "Bei Reconnective Healing wird durch die Übertragung von hochfrequenten Energie- und Lichtschwingungen eine Heilungsreaktion ausgelöst. Energetische Schwingungen werden erzeugt, bis der Behandelte in Verbindung mit der eigenen ursprünglichen Schwingung steht. Dies ermöglicht ein tiefes Gefühl des Geordnet-Seins und der Balance.",
    image: "/images/behandlung-20.jpg"
  },
  {
    title: "Osteopathie",
    description: "Die Osteopathie ist eine alternative Methode, die die Gesundheit durch manuelle Manipulation von Muskeln, Gelenken und Geweben verbessert. Sie basiert auf der Idee, dass Struktur und Funktion eng verbunden sind. Das Ziel ist es, das Gleichgewicht im Körper wiederherzustellen und die Selbstheilungskräfte zu aktivieren.",
    image: "/images/behandlung-21.jpg"
  }
]

export default function BehandlungenPage() {
  const [activeDiag, setActiveDiag] = useState(0)
  const diagListRef = useRef<HTMLDivElement>(null)

  // NEU: Zustand für das große Modal bei den Behandlungen
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

  // Scrollen auf der Seite deaktivieren, wenn das Modal offen ist
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
                    <Image src={item.icon} alt={item.title} fill className={`object-contain transition-all duration-500 ${isActive ? 'brightness-0 invert' : ''}`} />
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
                     <Image src={diagnostics[activeDiag].icon} alt={diagnostics[activeDiag].title} fill className="object-contain" />
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
      {/* 2. BEHANDLUNGEN SECTION (Magische Wow-Galerie)         */}
      {/* ==================================================== */}
      <section className="bg-[#F9FAFA] py-32 px-6 rounded-[50px] mx-4 md:mx-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-[#2D3A3A] mb-20">
            Mögliche Behandlungen
          </h2>

          {/* Das edle Bilder-Raster */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                layoutId={`card-${index}`} // Das ist das Geheimnis für die Flug-Animation
                onClick={() => setSelectedTreat(index)}
                className="group cursor-pointer relative h-[320px] rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <motion.div className="absolute inset-0" layoutId={`image-${index}`}>
                  {/* Platzhalter-Hintergrund, solange du noch keine Bilder hast */}
                  <div className="w-full h-full bg-[#E5EAE7]">
                     {/* Hier später einkommentieren, wenn du Bilder hast: */}
                     {/* <Image src={treatment.image} alt={treatment.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
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
      {/* 3. DAS "WOW" MODAL (Das aufklappende Fenster)          */}
      {/* ==================================================== */}
      <AnimatePresence>
        {selectedTreat !== null && (
          <>
            {/* Abgedunkelter Glas-Hintergrund */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreat(null)}
              className="fixed inset-0 bg-[#2D3A3A]/60 backdrop-blur-md z-[100] cursor-pointer"
            />

            {/* Das fliegende Fenster */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedTreat}`}
                className="bg-white rounded-[40px] overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row pointer-events-auto"
              >
                {/* Linke Seite: Das Bild */}
                <motion.div layoutId={`image-${selectedTreat}`} className="relative w-full md:w-5/12 h-64 md:h-auto shrink-0 bg-[#E5EAE7]">
                   {/* Hier später einkommentieren: */}
                   {/* <Image src={treatments[selectedTreat].image} alt={treatments[selectedTreat].title} fill className="object-cover" /> */}
                </motion.div>

                {/* Rechte Seite: Der Text, der weich einblendet */}
                <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col relative overflow-y-auto bg-[#FDFDFC]">
                  
                  {/* Schließen Button */}
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