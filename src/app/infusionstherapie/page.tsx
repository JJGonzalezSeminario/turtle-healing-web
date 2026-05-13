'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// --- DATENSTRUKTUR FÜR DIE INFUSIONEN ---
const infusions = [
  { id: 'immun', 
    title: 'Immun Boost', 
    shortDesc: 'Stärkung für die körpereigene Abwehr.',
    description: 'Die perfekte Infusion für Ihr Immunsystem. Unsere Immun Boost Infusion wurde speziell für die Stärkung des Immunsystems entwickelt.  Alle Inhaltsstoffe sind optimal, um Infektionen, Entzündungen und oxidativen Stress zu mindern oder sogar zu verhindern. (Auch in der Akutphase einer Erkältung einsetzbar)',
    ingredients: 'Inhaltsstoffe: 7,5 G Vitamin C, 1 g L-Carnitin, 2 g L-Lysin, , 500 mg L-Arginin, & L- Ornithin, 200 mg L-Citrullin und  L-Taurin, 750 mg L-Methionin',
    duration: 'ca. 30 min',
    price: 'ca. 215€'
   },
  { id: 'amino', 
    title: 'Amino Essential Drip', 
    shortDesc: 'Bausteine für Regeneration und Zellaufbau.',
    description: 'Hierbei handelt es sich um eine essentielle Infusion, welche die Bausteine des Lebens beinhalten. Diese essentiellen Aminosäuren, die der Körper nicht selbst synthetisieren kann und die daher über die Nahrung aufgenommen werden müssen, sind praktisch an jedem Aufbau- und Stoffwechselprozess beteiligt. Sie bilden das Fundament für einen gesunden Körper. Es gibt insgesamt 8 essentielle Aminosäuren, und jede von ihnen hat spezifische Funktionen im Körper. Leucin = Muskelaufbau, Isoleucin = Energieproduktion, Valin: Muskelregeneration und -reperatur, Lysin = Enzymproduktion + Kollagenose, Methionin = Radikalfänger + Entgiftung, Phenylalanin = Neurotransmitter + Wohlbefinden, Threonin = Immunsystem + Antikörperproduktion, Tryptophan = Appetit + Serotoninproduktion',
    ingredients: 'Inhaltsstoffe: L-Isoleucin 800 mg, L-Leucin 1000 mg, L-Lysin HCI 1000 mg (entspr. L-Lysin 800 mg), L-Methionin 400 mg, L-Phenylalanin 700 mg, L-Taurin 500 mg, L-Threonin 600 mg, L-Tryptophan 200 mg, L-Valin 900 mg,Natriumhydroxid.',
    duration: 'ca. 30 min',
    price: 'ca. 132€'
   },
  { id: 'detox', 
    title: 'Detox Drip', 
    shortDesc: 'Sanfte Unterstützung der Ausleitungsorgane.' ,
    description:'Diese Detox Infusion wurde für eine schonende Ausleitung konzipiert und enthält eine sorgfältige Kombination aus Vitaminen, Mineralstoffen, Antioxidantien und anderen Nährstoffen. Diese Inhaltsstoffe zielen darauf ab, den Stoffwechsel zu fördern und die natürlichen Entgiftungsprozesse des Körpers zu unterstützen. Zu den möglichen Vorteilen gehören die Entgiftung von Schadstoffen, die Stärkung des Immunsystems, ein gesteigertes Energieniveau, die Förderung der Hautgesundheit sowie die Unterstützung der Verdauung.',
    ingredients:' Elektrolyt-Injektionslösung (Magnesiumchlorid 40 mg, Calciumchlorid 45 mg, Kaliumchlorid 15 mg, 1 g Glycin, 750 mg L-Methionin, AOCT = 500 mg Arginin , 500 mg Ornithin, 200 mg Cystein, 200 mg Taurin, 2 g L-Lysin-HCl,  1,5 g L-Alanyl-L-Glutamin, 1 g L-Carnitin.',
    duration:'a. 30 min',
    price:'ca. 215€'
  },
  { 
    id: 'glutathion', 
    title: 'Glutathion Drip', 
    shortDesc: 'Der "Entgiftungs-Spezialist" unter den Detox-Infusionen.',
    description: 'Die Zusammensetzung dieser Infusion ist ideal, um oxidativen Stress entgegenzuwirken und schon entstandene Gewebeschäden durch Radikale zu regenerieren. Gleichzeitig unterstützen die Inhaltsstoffe die Entgiftungsfähigkeit.',
    ingredients: 'L-Arginin-HCl 2000 mg, L-Lysin-HCl, L-Glutamin, Taurin, Glycin jew. 1000 mg, Glutathion 600 mg, L-Methionin 500 mg, Wasser.',
    duration: 'ca. 30 min',
    price: 'ca. 132€'
  },
  { id: 'recovery', 
    title: 'Recovery Base', 
    shortDesc: 'Schnelle Erholung nach Erschöpfung.',
    description:'Die Basen Infusion ist eine ideale Alternative für eine schnellere Genesung nach körperlichen und mentalen Belastungen. Sie liefert insbesondere Elektrolyte in Form von Magnesium, Natriumbihydrogencarbonat und ein Lokalanästhetikum, welches die Säurelast minimiert, Schmerzen lindert und die Regeneration anregt. Dein Säure-Basen-Haushalt wird wieder ins Gleichgewicht gebracht. ',
    ingredients:'Natriumbihydrogencarbonat 40-120 ml, 5-15 ml 1%Procain, 1-2 g Magnesium',
    duration:'ca. 30-60 min',
    price:'ca. 102€'
  },
  { id: 'anti-stress', 
    title: 'Anti Stress', 
    shortDesc: 'Beruhigung für das vegetative Nervensystem.', 
    description:'Diese Antistress-Infusion ist darauf ausgelegt, den Körper und Geist zu entspannen und Stress abzubauen. Sie enthält eine Kombination aus Vitaminen, Mineralstoffen und beruhigenden Inhaltsstoffen, die das Nervensystem unterstützen und die Stimmung verbessern. Diese Infusion kann helfen, das allgemeine Wohlbefinden zu steigern und die Resilienz gegenüber stressigen Situationen zu fördern.',
    ingredients:'250 mg  L-Phenylalanin,  1 g Glycin, 1 g Taurin,  L-Arginin 2g, 42 mg Magnesiumchlorid 42 mg, 41 mg Calciumchlorid, 20 mg Kaliumchlorid 500 mg N-Acetyl-L-Tyrosin, 1 g  L-Carnitin.',
    duration:'ca. 30 min',
    price:'ca. 113€'
  },
  { id: 'nad', 
    title: 'NAD / Longevity 200mg', 
    shortDesc: 'Zelluläre Verjüngung und Energieproduktion.',
    description:'Die Basen Infusion ist eine ideale Alternative für eine schnellere Genesung nach körperlichen und mentalen Belastungen. Sie liefert insbesondere Elektrolyte in Form von Magnesium, Natriumbihydrogencarbonat und ein Lokalanästhetikum, welches die Säurelast minimiert, Schmerzen lindert und die Regeneration anregt. Dein Säure-Basen-Haushalt wird wieder ins Gleichgewicht gebracht. ',
    ingredients:'NAD+ (Nicotinamid-Adenin-Dinukleotid) 250 mg',
    duration:'ca. 30-60 min',
    price:'ca. 130€'
   },
  { id: 'beauty', 
    title: 'Inner Beauty', 
    shortDesc: 'Strahlkraft und Feuchtigkeit von innen heraus.',
    description:'Optimaler Beauty Boost von innen. Die Beauty Infusion ist das Mittel der Wahl um deine Haut, Haare und Nägel im Wachstum zu unterstützen. Eine ideale Ergänzung zu einem gesunden Lebensstil für dein Äußeres.',
    ingredients:'7,5 g Vitamin C, 3 g Prolin, 2 g L-Arginin, 750 mg L-Methionin, 1 g Taurin, 1 g Lysin, 5 mg Biotin, Elektrolyte (40 mg, Magnesiumchlorid, Calciumchlorid 45 mg, Glycin 1g)',
    duration:'ca. 30-40 min',
    price:'ca. 205€'
  },
  { id: 'neuro', 
    title: 'Neuro Protect', 
    shortDesc: 'Schutz und Nahrung für Nerven und Gehirn.',
    description:'Diese Infusion ist ein spezieller Cocktail aus Aminosäuren, B-Vitaminen und Mineralstoffen, welche genau für die Bedürfnisse eines gut funktionierenden Nervensystems unterstützt werden. Themen, die mit dieser Infusion daher behandelt werden können, sind Brain Fog, Neuropathien aber auch Neuro-Inflammation insgesamt. Bei mentaler Stress kann diese Infusion ebenfalls ihr Potenzial entfalten.',
    ingredients:'L-Glutamin, Taurin, jew. 1000 mg, L-Phenylalanin, L-Methionin jew. 500 mg, L-Tryptophan 300 mg, Wasser',
    duration:'ca. 30 min',
    price:'ca. 130€'
  },
  { id: 'premium', 
    title: 'Premium Drip', 
    shortDesc: 'Die All-in-One Nährstoffversorgung.',
    description:'Das ultimative Allrounder-Paket, wenn es um Nährstoffe geht. Das ist die perfekte Infusion gegen allgemeine Müdigkeit sowie Antriebslosigkeit. Diese Formulierung ist eine der nährstoffreichsten Infusionen auf dem Markt. Sie enthält Mineralien, Aminosäuren aber auch B-Vitamine in bioaktiver Form, welche die Kraftwerke -”die Mitochondrien”- der Zellen regelrecht boosten.',
    ingredients:'1200 mg Glutathion, 7,5g Vitamin C,  1000 mg L-Carnitin, 2000 mg L-Arginin, 1000 mg L-Lysin, 500 mg L-Carnosin, 500 mg N-Acetyl- L-Tyrosin,  500 mg Kalium- DL',
    duration:'ca. 60 min',
    price:'ca. 235€'
   },
  { id: 'hangover',
    title: 'Hang Over/Minerals', 
    shortDesc: 'Elektrolyt-Balance und tiefe Rehydrierung.',
    description:'',
    ingredients:'',
    duration:'',
    price:''
   },
  { id: 'vitc-double', 
    title: 'Vitamin C Double', 
    shortDesc: 'Hochdosis-Therapie für akute Phasen.',
    description:'Diese Hangover oder auch ”Meyer Cocktail” ist eine optimale Zusammensetzung aus Mineralien und Vitamin B12, welcher die Folgen von ausgiebigen Partynächten regeneriert. Er liefert alle essentiellen Nährstoffe, um leere Mineralien- Depots aufzufüllen und einem Kater entgegenzuwirken.',
    ingredients:'Magnesiumchlorid-Hexahydrat 585 mg, Calciumchlorid-Dihydrat 160 mg, Kalium-DL-hydrogenaspartat-0,5-Wasser  20 mg, Manganchlorid-Tetrahydrat  900 µg, Kupfer-(II)-chlorid-Dihydrat 800 µg, Ammoniummolybdat-Tetrahydrat  247 µg, Natriumselenit  153 µg, Chrom-(III)-Chlorid Hexahydrat  53 µg, Adenosylcobalamin 1 mg, Methylcobalamin 1 mg, Wasser',
    duration:'ca. 30 min',
    price:'ca. 125€'
  },
  { id: 'vitc-single', 
    title: 'Vitamin C Single', 
    shortDesc: 'Der klassische Zellschutz.',
    description:'Vitamin C ist ein absolutes “Powerhouse”. Es ist an über 15.000 Stoffwechselprozessen beteiligt. Eine Hochdosis Vitamin C ist hilfreich in den Bereichen: Stärkung des Immunsystems, Wundheilung, Kollagenbildung, Senkung von oxidativen Stress, Erhöhung des allgemeinen Wohlbefindens sowie ein höheres Energielevel.',
    ingredients:'7,5 g Vitamin C',
    duration:'ca. 30 min',
    price:'85€'
  },
  { id: 'ozon', 
    title: 'Ozonisierte Kochsalzlösung', 
    shortDesc: 'Sauerstoff-Therapie zur Durchblutungsförderung.',
    description:'',
    ingredients:'',
    duration:'',
    price:''
  },
  { id: 'eisen', 
    title: 'Eiseninfusion Aufwandspauschale', 
    shortDesc: 'Auffüllung der Eisenspeicher direkt über das Blut.',
    description:'Diese “Spezial- Infusion” hat den Namen Booster verdient. Für die Herstellung bedarf es medizinischen Ozons, welches 10 min lang per Dauerbegasung in die Kochsalzlösung gepresst wird. Dabei entsteht ein Ozon-Sauerstoff-Gemisch, welches zahlreiche positive Effekte für den gesamten Körper mit sich bringt. Sobald das Gemisch in Kontakt mit dem Blut kommt, entstehen nach kurzer Zeit 100te Wasserstoffperoxidverbindungen bzw. Ozonide. Durch diesen zuerst oxidativen Reiz wird das körpereigene Immunsystem aktiviert. Die Mikrozirkulation wird gesteigert, Entgiftungsprozesse aktiviert und ihr allgemeines Wohlbefinden erhöht.  ',
    ingredients:'Ozon-Sauerstoff- Gemisch im Verhältnis 2%/98% + Kochsalzlösung 250ml.',
    duration:'ca. 30 min',
    price:'ca. 133€'
  },
]


// --- EIGENE ACCORDION KOMPONENTE (Shadcn-Style) ---
const AccordionItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-[#2D3A3A]/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between group focus:outline-none"
      >
        <div className="text-left pr-4">
          <h3 className={`font-serif text-2xl transition-colors duration-300 ${isOpen ? 'text-[#C58695]' : 'text-[#2D3A3A] group-hover:text-[#C58695]'}`}>
            {item.title}
          </h3>
          {!isOpen && item.shortDesc && (
            <p className="text-[#5C6E6E] mt-1 text-sm font-light opacity-80">{item.shortDesc}</p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'border-[#C58695] bg-[#C58695] text-white rotate-180' : 'border-[#2D3A3A]/20 text-[#2D3A3A] group-hover:border-[#C58695] group-hover:text-[#C58695]'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/></svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2">
              {item.description ? (
                <div className="space-y-6 bg-white p-6 md:p-8 rounded-[30px] border border-[#2D3A3A]/5 shadow-sm">
                  <p className="text-lg text-[#5C6E6E] leading-relaxed font-light">
                    {item.description}
                  </p>
                  
                  {/* Edle Badges für die harten Fakten */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#2D3A3A]/5">
                    {item.ingredients && (
                      <div className="md:col-span-2 bg-[#F9FAFA] p-4 rounded-2xl">
                        <span className="block text-xs uppercase tracking-widest text-[#C58695] font-bold mb-2">Inhaltsstoffe</span>
                        <p className="text-[#2D3A3A] text-sm leading-relaxed">{item.ingredients}</p>
                      </div>
                    )}
                    {item.duration && (
                      <div className="bg-[#F9FAFA] p-4 rounded-2xl flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#C58695]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <div>
                          <span className="block text-xs uppercase tracking-widest text-[#C58695] font-bold">Dauer</span>
                          <span className="text-[#2D3A3A] text-sm font-medium">{item.duration}</span>
                        </div>
                      </div>
                    )}
                    {item.price && (
                      <div className="bg-[#F9FAFA] p-4 rounded-2xl flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#C58695]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11V7a5 5 0 0110 0v4m-5 8v-4m-4 4h8a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"/></svg>
                        <div>
                          <span className="block text-xs uppercase tracking-widest text-[#C58695] font-bold">Kosten</span>
                          <span className="text-[#2D3A3A] text-sm font-medium">{item.price}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-[#F9FAFA] p-6 rounded-[20px] text-[#5C6E6E] italic text-center text-sm">
                  Weitere Details zu dieser Infusion folgen in Kürze. Bitte sprechen Sie uns direkt an.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function InfusionstherapiePage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('glutathion')
  const [isClient, setIsClient] = useState(false)

  // Verhindert Hydration-Errors
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <main className="min-h-screen bg-[#FBF9F6] pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HERO SECTION (Auf Umsatz & Conversion optimiert) --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#C58695]/10 text-[#C58695] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  ★ Beliebteste Behandlung
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2D3A3A] leading-tight">
                Maximale Energie. <br/><span className="italic">Sofort spürbar.</span>
              </h1>
            </div>
            
            <div className="w-20 h-[1px] bg-[#C58695]/40" />

            <div className="space-y-4 text-lg text-[#5C6E6E] font-light leading-relaxed">
              <p>
                Gönnen Sie sich das Upgrade für Ihre Zellen. Unsere maßgeschneiderten Premium-Infusionen laden Ihre leeren Speicher in nur 30 Minuten wieder komplett auf.
              </p>
              <ul className="space-y-3 mt-6 text-[#2D3A3A] font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#C58695]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  100% Bioverfügbarkeit direkt in der Zelle
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#C58695]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Sofortige Revitalisierung & Immun-Boost
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#C58695]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Entspannen in unserer exklusiven Drip-Lounge
                </li>
              </ul>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.doctolib.de" // <-- HIER DEINEN ECHTEN DOCTOLIB-LINK EINTRAGEN
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D3A3A] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#C58695] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center flex items-center justify-center"
              >
                Drip-Termin sichern
              </a>
              <button 
                onClick={() => {
                  const menu = document.getElementById('drip-menu');
                  if(menu) menu.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-2xl font-medium text-[#2D3A3A] bg-transparent border border-[#2D3A3A]/20 hover:border-[#C58695] hover:text-[#C58695] transition-all text-center"
              >
                Zum Infusions-Menü
              </button>
            </div>
          </motion.div>

          {/* Der Container für das neue, luxuriöse Verkaufs-Bild */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[500px] lg:h-[650px] rounded-[60px] overflow-hidden shadow-2xl group"
          >
            <Image 
              src="/images/infusion-bestseller.png" // Dateiname von deinem hochgeladenen Bild
              alt="Premium Infusionstherapie Lounge in Berlin" 
              fill 
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2D3A3A]/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Trust Element direkt auf dem Bild */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FBF9F6] rounded-full flex items-center justify-center text-[#C58695]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-[#2D3A3A]">Nur 30-45 Minuten</p>
                  <p className="text-sm text-[#5C6E6E]">Für Ihre Gesundheitspause</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- INFUSIONSMENÜ (ACCORDION) MIT NEUER ID --- */}
        <motion.div 
          id="drip-menu"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#2D3A3A] mb-6">Unser Drip-Menü</h2>
            <p className="text-[#5C6E6E] font-light">Finden Sie die passende Infusion für Ihre individuellen Bedürfnisse. Wir beraten Sie gerne.</p>
          </div>

          <div className="bg-white rounded-[50px] p-8 md:p-12 shadow-xl border border-neutral-100">
            {infusions.map((infusion) => (
              <AccordionItem 
                key={infusion.id}
                item={infusion}
                isOpen={openAccordion === infusion.id}
                onClick={() => setOpenAccordion(openAccordion === infusion.id ? null : infusion.id)}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  )
}