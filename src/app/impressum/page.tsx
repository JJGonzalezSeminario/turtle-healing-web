'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#FBF9F6] pt-40 pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Edel und minimalistisch */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C58695] uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            Rechtliche Hinweise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-[#2D3A3A] mb-8 leading-tight"
          >
            Impressum
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-[1px] bg-[#C58695]/40 mx-auto"
          />
        </div>

        {/* Content-Bereich - Animiertes Einblenden */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_20px_80px_-20px_rgba(45,58,58,0.08)] space-y-12 text-[#5C6E6E] font-light leading-relaxed"
        >
          
          {/* 1. Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Turtle Healing - Privatpraxis für ganzheitliche Orthopädie & Integrative Medizin</strong><br />
              Ximena Martínez-Micus<br />
              Pariser Straße 21<br />
              10707 Berlin
            </p>
          </section>

          {/* 2. Kontakt */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:praxis@turtle-healing.com" className="text-[#005387] hover:text-[#C58695] transition-colors">praxis@turtle-healing.com</a><br />
              Website: <Link href="/" className="text-[#005387] hover:text-[#C58695] transition-colors">www.turtle-healing.com</Link>
            </p>
          </section>

          {/* 3. Berufsbezeichnung und Kammerzugehörigkeit */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              <strong>Gesetzliche Berufsbezeichnung:</strong><br />
              Fachärztin für Orthopädie und Unfallchirurgie (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="mt-4">
              <strong>Zuständige Kammer / Aufsichtsbehörde:</strong><br />
              Ärztekammer Berlin<br />
              Friedrichstraße 16<br />
              10969 Berlin<br />
              Website: <a href="https://www.aerztekammer-berlin.de" target="_blank" rel="noopener noreferrer" className="text-[#005387] hover:text-[#C58695] transition-colors">www.aerztekammer-berlin.de</a>
            </p>
            <p className="mt-4">
              <strong>Berufsrechtliche Regelungen:</strong><br />
              Es gelten die berufsrechtlichen Regelungen der Ärztekammer Berlin (Berufsordnung) 
              sowie das Heilberufe-Kammergesetz (HKG) des Landes Berlin. Die Regelungen sind auf 
              der Website der Ärztekammer Berlin einsehbar.
            </p>
          </section>

          {/* 4. Haftungsausschluss / Disclaimer */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">Haftung für Inhalte (Disclaimer)</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung 
              der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* 5. Urheberrecht */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* Zurück-Button */}
          <div className="pt-8 border-t border-[#2D3A3A]/10 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 text-[#2D3A3A] font-medium group hover:text-[#C58695] transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-[#2D3A3A]/20 flex items-center justify-center transition-all group-hover:border-[#C58695]">
                ←
              </span>
              Zurück zur Startseite
            </Link>
          </div>

        </motion.div>
      </div>
    </main>
  )
}