export default function Home() {
  return (
    <>
      {/* NAVIGACE - HTML5 semantika */}
      <header>
        <nav
          className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200"
          role="navigation"
          aria-label="Hlavní navigace"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <a href="#uvod" className="hover:opacity-80 transition cursor-pointer">
              <img
                src="/logo.png"
                alt="Luzar Interiér Logo"
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <input type="checkbox" id="nav-toggle" className="peer sr-only" aria-hidden="true" />
            <label htmlFor="nav-toggle" className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 -mr-2" aria-label="Přepnout menu">
              <span className="block w-6 h-0.5 bg-stone-700 rounded transition-transform peer-checked:rotate-45" />
              <span className="block w-6 h-0.5 bg-stone-700 rounded" />
              <span className="block w-6 h-0.5 bg-stone-700 rounded" />
            </label>

            <div
            style={{ minHeight: '30svh' }} 
            className="fixed z-50 top-16 sm:top-20 left-0 right-0 bottom-0 bg-white flex flex-col gap-6 py-8 px-6 text-stone-900 font-medium uppercase tracking-widest text-lg opacity-0 invisible translate-y-[-10px] transition-all duration-300 pointer-events-none peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0 peer-checked:pointer-events-auto md:!flex md:!flex-row md:!static md:!inset-auto md:!bg-transparent md:!py-0 md:!px-0 md:!text-sm md:!font-light md:!text-stone-600 md:!opacity-100 md:!visible md:!translate-y-0 md:!pointer-events-auto md:gap-6 lg:gap-8">
              <a href="#realizace" className="hover:text-amber-700 transition py-2 border-b border-stone-200 md:border-0">Realizace</a>
              <a href="#onas" className="hover:text-amber-700 transition py-2 border-b border-stone-200 md:border-0">O nás</a>
              <a href="#kontakt" className="hover:text-amber-700 transition py-2">Kontakt</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-white">      {/* HERO SEKCE */}
      <section id="uvod" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070"
            alt="Elegantní interiér s nábytkem na míru"
            className="w-full h-full object-cover scale-105"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-10 max-w-7xl w-full">
          <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-4 block font-light">
            Tradiční truhlářství z Opavy
          </span>
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-4 sm:mb-6 leading-tight text-white">
            Luzar <span className="italic">Interiér</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 max-w-2xl mx-auto text-gray-200">
            Navrhujeme a vyrábíme nábytek, který definuje prostor. Od moderních kuchyní po kompletní vybavení objektů.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="#realizace" className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-full transition-all shadow-xl uppercase tracking-widest text-xs text-center">
              Naše realizace
            </a>
            <a href="#kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full transition-all uppercase tracking-widest text-xs text-center">
              Poptávka
            </a>
          </div>
        </div>
      </section>
      {/* SEKCE REALIZACE */}
      <section id="realizace" className="py-16 sm:py-20 md:py-24 bg-white" aria-labelledby="realizace-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-2 font-medium">
                Portfolio
              </h2>
              <h2 id="realizace-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900">
                Naše poslední <span className="italic">práce</span>
              </h2>
            </div>
            <p className="max-w-md text-stone-500 font-light">
              Každý kus nábytku je originál navržený na míru vašim potřebám. Od moderního minimalismu po klasický masiv.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
            <article className="group cursor-pointer overflow-hidden" role="listitem">
              <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Moderní kuchyně z masivního dubu"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-serif text-stone-800">Moderní kuchyně - Dub</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2025</p>
            </article>

            <article className="group cursor-pointer overflow-hidden" role="listitem">
              <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden rounded-sm shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Vestavná šatní skříň na míru"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-serif text-stone-800">Šatna na míru</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2024</p>
            </article>

            <article className="group cursor-pointer overflow-hidden" role="listitem">
              <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] overflow-hidden rounded-sm shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Pracovna v podkroví s vestavným nábytkem"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-serif text-stone-800">Pracovna v podkroví</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2025</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer id="kontakt" className="bg-stone-900 text-stone-300 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-white font-serif text-lg mb-3">Luzar Interiér</h3>
              <p className="text-sm font-light">Tradiční truhlářství z Opavy. Nábytek na míru a kompletní interiérové řešení.</p>
            </div>
            <div>
              <h3 className="text-white font-serif text-lg mb-3">Kontakt</h3>
              <address className="text-sm font-light not-italic space-y-1">
              <p>Záhumení 175, 747 64 Budišovice</p>
              <a href="tel:+420732788138" className="block hover:text-amber-400 transition">+420 732 788 138</a>
              <a href="mailto:info@luzar-interier.cz" className="block hover:text-amber-400 transition">info@luzar-interier.cz</a>
              </address>
            </div>
          </div>
          <p className="mt-10 pt-8 border-t border-stone-700 text-xs text-stone-500 text-center">
            © {new Date().getFullYear()} Luzar Interiér. Všechna práva vyhrazena.
          </p>
        </div>
    </footer>
    </>
  );
}