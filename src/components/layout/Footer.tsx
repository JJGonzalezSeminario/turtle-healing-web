'use client'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#2D3A3A] text-white pt-16 md:pt-24 pb-6">
      
      {/* 1. Organische Welle oben */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-full leading-none">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-[40px] md:h-[80px] block" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#2D3A3A" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* DAS KORRIGIERTE LAYOUT (Schildkröte dominiert jetzt) */}
        {/* Wir wechseln auf lg:grid-cols-6, damit die erste Spalte breiter werden kann */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-12 gap-y-10 items-start mb-16">
          
          {/* Spalte 1 (LOGO): Jetzt lg:col-span-2 (nimmt 1/3 des Platzes ein) */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-2">
            
            {/* Spalte 1 (LOGO): Absolut zentriert durch Flexbox */}
          <div className="flex flex-col items-center lg:col-span-2">
            
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-5">
              <Image 
                src="/images/turtle-logo-no-text.svg" 
                alt="Turtle Healing Logo" 
                fill 
                className="object-contain brightness-0 invert" 
                priority
              />
            </div>
            
            {/* Hier ist der Fix: Zwei getrennte Spans in einem zentrierten Flex-Container */}
            <div className="flex flex-col items-center justify-center font-sans font-bold text-lg md:text-xl leading-tight tracking-widest uppercase">
              <span>TURTLE</span>
              <span>HEALING</span>
            </div>
          </div>
          </div>

          {/* Spalte 2: Kontakt (lg:col-span-1) */}
          <div className="text-center lg:text-left pt-2 lg:pt-6">
            <h4 className="font-sans font-bold text-white mb-4 text-sm tracking-wide">Telefon & E-Mail</h4>
            <div className="flex flex-col space-y-1.5">
              <a href="tel:+493078890654" className="text-[#C58695] hover:text-white transition-colors text-sm font-medium">
                +49 (0) 30 7889 0654
              </a>
              <a href="mailto:praxis@turtle-healing.com" className="text-[#C58695] hover:text-white transition-colors text-sm font-medium">
                praxis@turtle-healing.com
              </a>
            </div>
          </div>

          {/* Spalte 3: Adresse (lg:col-span-1) */}
          <div className="text-center lg:text-left pt-2 lg:pt-6">
            <h4 className="font-sans font-bold text-white mb-4 text-sm tracking-wide">Adresse</h4>
            <div className="text-[#C58695] text-sm font-medium leading-relaxed">
              <a 
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1678505500693!2d13.431671977239384!3d52.51231653715877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e4663e2672b%3A0xc3911f938b826b2b!2sFranz-Mehring-Platz%201%2C%2010243%20Berlin!5e0!3m2!1ses!2sde!4v1709923845000!5m2!1ses!2sde1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Pariser Straße 21<br />
              10707 Berlin
              </a>
              
              
            </div>
          </div>

          {/* Spalte 4: Öffnungszeiten (lg:col-span-1) */}
          <div className="text-center lg:text-left pt-2 lg:pt-6">
            <h4 className="font-sans font-bold text-white mb-4 text-sm tracking-wide">Öffnungszeiten</h4>
            <div className="text-white text-sm leading-relaxed opacity-90">
              Mo, Di, Do: 9 - 18 Uhr<br />
              Mi: 9 - 15 Uhr<br />
              Fr: 9 - 13 Uhr<br />
              <span className="opacity-70 text-xs">(und nach Vereinbarung)</span>
            </div>
          </div>

          {/* Spalte 5: Button (lg:col-span-1) */}
          <div className="flex justify-center lg:justify-start pt-6 lg:pt-8">
            <Link 
              href="https://www.doctolib.de/privatpraxis/berlin/turtle-healing-privatpraxis-fuer-energetische-medizin-und-ganzheitliche-heilkunde" 
              target="_blank"
              className="border border-white text-white px-7 py-2.5 rounded-full hover:bg-white hover:text-[#2D3A3A] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Termin buchen
            </Link>
          </div>

        </div>

        {/* Die Abschlussleiste unten (Copyright & Links) */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {currentYear} Turtle Healing</p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <span>|</span>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/turtle.healing/" target="_blank" className="hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}