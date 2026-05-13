'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DatenschutzPage() {
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
            Ihre Daten in sicheren Händen
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-[#2D3A3A] mb-8 leading-tight"
          >
            Datenschutz&shy;erklärung
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
          
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
              aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Verantwortliche Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              <strong>Turtle Healing - Privatpraxis für ganzheitliche Heilkunde</strong><br />
              Ximena Martínez-Micus<br />
              Pariser Straße 21<br />
              10707 Berlin<br /><br />
              E-Mail: <a href="mailto:praxis@turtle-healing.com" className="text-[#005387] hover:text-[#C58695] transition-colors">praxis@turtle-healing.com</a>
            </p>
          </section>

          {/* 2. Datenerfassung auf dieser Website */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind u.a. Browsertyp, Betriebssystem, Referrer URL, 
              Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Eine Zusammenführung dieser Daten mit 
              anderen Datenquellen wird nicht vorgenommen.
            </p>
            
            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Kontaktformular (Web3Forms)</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Für die 
              sichere technische Übermittlung der Formulardaten nutzen wir den Dienstleister <strong>Web3Forms</strong>. 
              Weitere Informationen zum Datenschutz bei Web3Forms finden Sie unter web3forms.com/privacy.
            </p>

            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Anfragen per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und 
              verarbeitet.
            </p>
          </section>

          {/* 3. Plugins und Tools */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">3. Plugins und externe Dienste</h2>
            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Terminbuchung über Doctolib</h3>
            <p>
              Für die Online-Terminvergabe binden wir auf unserer Website Links zum Dienst <strong>Doctolib</strong> ein. 
              Betreiber ist die Doctolib GmbH, Mehringdamm 51, 10961 Berlin. Wenn Sie auf den Buchungslink klicken, 
              werden Sie auf die Server von Doctolib weitergeleitet. Dort erfolgt die eigentliche Datenverarbeitung 
              für Ihre Terminbuchung. Die Nutzung von Doctolib erfolgt im Interesse einer komfortablen und einfachen 
              Terminvereinbarung. Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung 
              von Doctolib.
            </p>

            <h3 className="font-medium text-[#2D3A3A] mb-2 mt-6">Google Maps</h3>
            <p>
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, 
              Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, 
              Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den 
              USA übertragen und dort gespeichert. Wir haben keinen Einfluss auf diese Datenübertragung.
            </p>
          </section>

          {/* 4. Ihre Rechte */}
          <section>
            <h2 className="font-serif text-2xl text-[#2D3A3A] mb-4">4. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
              der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu 
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
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