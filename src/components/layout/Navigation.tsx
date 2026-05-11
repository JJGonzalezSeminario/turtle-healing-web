'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/behandlungen',      label: 'Behandlungen' },
  { href: '/infusionstherapie', label: 'Infusionstherapie' },
  { href: '/news', label: 'News' },
  { href: '/meine-vita',        label: 'Meine Vita' },
  { href: '/team',              label: 'Team' },
  { href: '/kontakt',           label: 'Kontakt' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav aria-label="Hauptnavigation">
      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`
                text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === href
                  ? 'text-sage-800 border-b border-sage-600 pb-0.5'
                  : 'text-sage-600 hover:text-sage-900'
                }
              `}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}