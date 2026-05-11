export function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Turtle Healing',
    description: 'Privatpraxis für ganzheitliche Orthopädie & Integrative Medizin',
    url: 'https://turtle-healing.com',
    telephone: '+493078890654',
    email: 'praxis@turtle-healing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pariser Straße 21',
      addressLocality: 'Berlin',
      addressRegion: 'Berlin',
      postalCode: '10707',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.4969,
      longitude: 13.3244,
    },
    medicalSpecialty: [
      'Orthopedic Surgery',
      'Traditional Chinese Medicine',
      'Integrative Medicine',
      'Acupuncture',
    ],
    priceRange: '€€€',
    openingHours: 'Mo-Fr 09:00-17:00',
    image: 'https://turtle-healing.com/og-image.jpg',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}