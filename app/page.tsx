import Image from 'next/image';

const events = [
  {
    name: 'Oneiro Festival',
    logo: '/images/oneiro.webp',
    description:
      'Our most immersive and concept-driven experience. A dreamlike, multi-sensory environment blending electronic music, large-scale audiovisual production, and narrative-driven stage design.',
    highlight: 'Officially branded with Esencial Costa Rica',
  },
  {
    name: 'Electric Animals Fest',
    logo: '/images/electric-animals-logo-fest.webp',
    description:
      'The core festival and foundation of international recognition. Top-tier international headliners, regional talent, and local artists in a large-scale celebration setting the benchmark for Central America.',
  },
  {
    name: 'Halloween Fest',
    logo: '/images/electric-animals-logo-halloween.webp',
    description:
      'One of the most anticipated electronic music events in the region. Darker aesthetics, immersive visuals, and high-energy performances delivering a unique thematic experience.',
  },
];

const calendar = [
  { date: 'February 13', event: 'Elrow' },
  { date: 'April 11', event: 'Electric Animals Fest' },
  { date: 'October 10', event: 'Electric Animals Showcase · Madrid' },
  { date: 'October 23', event: 'Electric Animals Showcase · Amsterdam' },
  { date: 'October 31', event: 'Electric Animals Halloween Fest' },
  { date: 'November 28–29', event: 'Oneiro Festival' },
  { date: 'December 31', event: "Electric Animals New Year's Eve Party" },
];

const headlineArtists = [
  'Carl Cox',
  'John Digweed',
  'Paco Osuna',
  'The Martinez Brothers',
  'Nick Warren',
  'Padre Guilherme',
  'Dennis Cruz',
  'Sasha',
];

const internationalArtists =
  'Aaron Suiss · Adi Dassler · Akrilla · Alan Nieves · Alex Galvan · Andre Gazolla · Andre Silva · Archie Hamilton · Armen Miran · Brian Cid · Brigado Crew · Boho · Boza · Bushman · Caballero · Calussa · Carbon · Carl Cox · Carlo Lio · Christian Craken · Danito y Athina · Darin Epsilon · Dave Seaman · Dimmish · Dosem · eCost · Deer Jade · Dennis Cruz · Dennis Ferrer · Editek · Eelke Kleijn · Enamour · Eze Ramirez · Fatima Hajji · Facundo Mohrr · Hannes Bieger + Orquesta Filarmónica de Costa Rica · Guy J · Hot Tuneik · Iglesias · Innellea · James Zabiela · Jerome Isma-ae · John Digweed · Jordan Gill · Josh Wink · Kasia · Kinahau · Korolova · Lee Ann Roberts · Lee Foss · Lee Reynolds · Luke Hunter · Marco Faraone · Maksim Dark · Marcus Meinhardt · Max Chapman · Matan Caspi · Matador · Melanie Ribbe · Miguelle and Tons · Mikey Lion · Morttagua · Nicole Moudaber · Nina Alanis · Nick Warren · Nislo Rudas · Opiuo · Oscar Duque · Oliver Huntemann · Out of Mind · Padre Guilherme · Paco Osuna · Paige · Pig and Dan · Pilato · Phoenix Movement · R Wild · Rafa Barrios · Reinier Zonneveld · Ricardo Farhat · Rodriguez Jr · Sainte Vie · Sasha · Sebastian Ledher · Sebastian Léger · Shermanology · Space 92 · Sol · Stan Kolev · Stereo Express · Tara Brooks · Technasia · The Martinez Brothers · Tommahawk · Toni Varga · Township Rebellion · Treavor Moontribe · Victor Ruiz · Viviana Casanova · Ubbah';

const showcases = ['Desert Hearts', 'Elrow', 'Now Here', 'Senso Sounds', 'The Soundgarden'];

const galleryImages = [
  '/images/_a1a6014.webp',
  '/images/_a1a6369.webp',
  '/images/_a1a6440.webp',
  '/images/_a1a6606.webp',
  '/images/bcjungle-7.webp',
  '/images/bcjungle-19.webp',
  '/images/jacobcollier_21-09-25-01550.webp',
  '/images/jacobcollier_21-09-25-04416.webp',
  '/images/wua00771-enhanced-nr.webp',
  '/images/wua01442-enhanced-nr.webp',
  '/images/img_3499.webp',
  '/images/img_3577.webp',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/_dsc9963_fjs7gol.webp"
            alt="Electric Animals crowd"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            ELECTRIC ANIMALS
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
            One of the most influential electronic music platforms in Central America. World-class
            festivals, curated showcases, and global collaborations.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
            <span className="rounded-full border border-zinc-700 px-4 py-2">
              100% Zero Cancellations
            </span>
            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Carbon Neutral Events
            </span>
            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Costa Rica Convention Center
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="h-6 w-6 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-100">Vision</h3>
            <p className="text-zinc-400">
              To position Electric Animals as a globally recognized electronic music brand
              representing Latin America on the world stage through world-class festivals,
              showcases, and cultural collaborations.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-100">Mission</h3>
            <p className="text-zinc-400">
              To create unforgettable electronic music experiences through top-tier production,
              curated lineups, and meaningful partnerships with artists, brands, and cultural
              institutions, while strengthening regional creative ecosystems.
            </p>
          </div>
        </div>
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <p className="text-center text-lg leading-relaxed text-zinc-300">
            Electric Animals is defined by uncompromising production standards, meticulous artistic
            curation, and a long-term vision focused on quality, consistency, and cultural impact.
            Each event is designed as a complete sensory experience where music, visuals, sound
            design, and space come together with intention.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {galleryImages.slice(0, 8).map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Electric Animals event ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Signature Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-zinc-800">
                <Image src={event.logo} alt={event.name} fill className="object-contain p-4" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{event.name}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{event.description}</p>
              {event.highlight && (
                <p className="mt-4 text-xs font-medium text-zinc-500">{event.highlight}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* International Expansion */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Global Reach
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="mb-2 font-semibold">Half Moon Festival</h3>
              <p className="text-sm text-zinc-400">
                Official showcase at one of Asia&apos;s most iconic electronic music festivals in
                Thailand
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800">
                <span className="text-2xl">🌎</span>
              </div>
              <h3 className="mb-2 font-semibold">Central America</h3>
              <p className="text-sm text-zinc-400">
                Curated showcases introducing the brand to new markets across the region
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mb-2 font-semibold">Europe Expansion</h3>
              <p className="text-sm text-zinc-400">
                Upcoming showcases in Madrid and Amsterdam, key global electronic music hubs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          2025 Calendar
        </h2>
        <div className="space-y-4">
          {calendar.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-4 transition-colors hover:border-zinc-700"
            >
              <span className="font-mono text-sm text-zinc-500">{item.date}</span>
              <span className="font-medium">{item.event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Artists Section */}
      <section className="border-t border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Artists
          </h2>

          {/* Headline Artists */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-lg font-medium text-zinc-400">
              Headline Performances
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {headlineArtists.map((artist) => (
                <span
                  key={artist}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-6 py-3 text-lg font-medium"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>

          {/* Showcases */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-lg font-medium text-zinc-400">Brand Showcases</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {showcases.map((brand) => (
                <span key={brand} className="rounded-full border border-zinc-700 px-5 py-2 text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* All Artists */}
          <div>
            <h3 className="mb-8 text-center text-lg font-medium text-zinc-400">
              International Artists
            </h3>
            <p className="text-center text-sm leading-loose text-zinc-500">
              {internationalArtists}
            </p>
          </div>
        </div>
      </section>

      {/* More Gallery */}
      <section className="py-8">
        <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
          {galleryImages.slice(4).map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Electric Animals moment ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Electric Animals</h2>
            <p className="text-sm text-zinc-400">
              From Costa Rica to the world, connecting cultures through music, experience, and
              uncompromising quality.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
            <span>Costa Rica</span>
            <span>·</span>
            <span>Thailand</span>
            <span>·</span>
            <span>El Salvador</span>
            <span>·</span>
            <span>Spain</span>
            <span>·</span>
            <span>Netherlands</span>
          </div>
          <div className="mt-12 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Electric Animals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
