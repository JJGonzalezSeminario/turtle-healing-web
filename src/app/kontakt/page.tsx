'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function KontaktPage() {
  // 1. ZUSTÄNDE FÜR DAS FORMULAR
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    nachricht: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 2. EINGABEN VERARBEITEN
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. FORMULAR ABSENDEN (Mit Web3Forms API)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // ⚠️ HIER DEINEN KOPIERTEN KEY EINTRAGEN:
          access_key: 'DEIN_ACCESS_KEY_HIER_EINTRAGEN', 
          subject: 'Neue Kontaktanfrage (Turtle Healing)',
          from_name: `${formData.vorname} ${formData.nachname}`,
          email: formData.email,
          message: formData.nachricht,
          replyto: formData.email,
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ vorname: '', nachname: '', email: '', nachricht: '' }); // Formular leeren
        setTimeout(() => setStatus('idle'), 5000); // Nach 5 Sekunden wieder normal
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#FBF9F6] pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Einladend & Edel */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C58695] uppercase tracking-[0.2em] text-sm font-medium mb-4 block"
          >
            Treten Sie ein
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2D3A3A] mb-8 leading-tight"
          >
            Ein Raum für Ihre <br /> <span className="italic">Gesundheit</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-[1px] bg-[#C58695]/40 mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Linke Seite: Dein Doctolib-Bild & Buchungslink */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="relative h-[550px] rounded-[60px] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/doctolib1.png" 
                alt="Terminbuchung bei Turtle Healing" 
                fill
                priority
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A3A]/40 via-transparent to-transparent" />
            </div>

            {/* Doctolib Quick-Link Card */}
            <div className="bg-white/40 backdrop-blur-sm p-10 rounded-[40px] border border-white/60">
              <h3 className="font-serif text-2xl text-[#2D3A3A] mb-4">Digitale Terminbuchung</h3>
              <p className="text-[#5C6E6E] mb-8 font-light leading-relaxed">
                Wählen Sie Ihren Wunschtermin direkt online über Doctolib – 
                einfach, sicher und rund um die Uhr verfügbar.
              </p>
              <a 
                href="https://www.doctolib.de/privatpraxis/berlin/turtle-healing-privatpraxis-fuer-energetische-medizin-und-ganzheitliche-heilkunde?utm_campaign=website-button&utm_source=online-booking&utm_medium=referra" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#005387] font-medium group"
              >
                Zur Online-Buchung
                <span className="w-10 h-10 rounded-full border border-[#005387]/20 flex items-center justify-center transition-all group-hover:bg-[#005387] group-hover:text-white">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Rechte Seite: Das elegante "Brief"-Formular */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white rounded-[60px] p-12 md:p-20 shadow-[0_20px_80px_-20px_rgba(45,58,58,0.08)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBF9F6] rounded-full -mr-32 -mt-32 opacity-50" />
            
            <div className="relative">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2D3A3A] mb-12">Nachricht senden</h2>
              
              {/* FORMULAR START */}
              <form className="space-y-10" onSubmit={handleSubmit}>
                
                {/* SPAM-SCHUTZ (Honeypot - unsichtbar für Menschen, fängt Bots) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b border-[#2D3A3A]/10 pb-2 focus-within:border-[#C58695] transition-all">
                    <label className="text-xs uppercase tracking-widest text-[#C58695] font-bold">Vorname</label>
                    <input type="text" name="vorname" value={formData.vorname} onChange={handleChange} required className="w-full bg-transparent border-none p-0 pt-2 text-lg text-[#2D3A3A] outline-none placeholder:text-neutral-300" placeholder="Ihr Vorname" />
                  </div>
                  <div className="relative border-b border-[#2D3A3A]/10 pb-2 focus-within:border-[#C58695] transition-all">
                    <label className="text-xs uppercase tracking-widest text-[#C58695] font-bold">Nachname</label>
                    <input type="text" name="nachname" value={formData.nachname} onChange={handleChange} required className="w-full bg-transparent border-none p-0 pt-2 text-lg text-[#2D3A3A] outline-none placeholder:text-neutral-300" placeholder="Ihr Nachname" />
                  </div>
                </div>

                <div className="relative border-b border-[#2D3A3A]/10 pb-2 focus-within:border-[#C58695] transition-all">
                  <label className="text-xs uppercase tracking-widest text-[#C58695] font-bold">E-Mail Adresse</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-none p-0 pt-2 text-lg text-[#2D3A3A] outline-none placeholder:text-neutral-300" placeholder="beispiel@mail.de" />
                </div>

                <div className="relative border-b border-[#2D3A3A]/10 pb-2 focus-within:border-[#C58695] transition-all">
                  <label className="text-xs uppercase tracking-widest text-[#C58695] font-bold">Ihre Nachricht</label>
                  <textarea rows={4} name="nachricht" value={formData.nachricht} onChange={handleChange} required className="w-full bg-transparent border-none p-0 pt-2 text-lg text-[#2D3A3A] outline-none placeholder:text-neutral-300 resize-none" placeholder="Wie kann ich Sie unterstützen?"></textarea>
                </div>

                {/* STATUS-FEEDBACK */}
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className="group flex items-center gap-6 text-[#2D3A3A] hover:text-[#C58695] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="w-20 h-20 rounded-full border border-[#2D3A3A]/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-[#C58695]">
                    {status === 'success' ? (
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    ) : status === 'loading' ? (
                      <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l7-7-7-7M5 12h14"/></svg>
                    )}
                  </span>
                  <span className="font-serif text-2xl italic transition-all group-hover:translate-x-2">
                    {status === 'loading' ? 'Wird gesendet...' : status === 'success' ? 'Erfolgreich gesendet!' : 'Anfrage absenden'}
                  </span>
                </button>
              </form>
              {/* FORMULAR ENDE */}

            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}