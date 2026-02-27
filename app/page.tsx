import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAVIGACE */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* TADY JE LOGO */}
          <img 
            src="/logo.png" 
            alt="Luzar Interiér Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="hidden md:flex gap-8 text-stone-600 font-light uppercase tracking-widest text-sm">
            <a href="#realizace" className="hover:text-amber-700 transition">Realizace</a>
            <a href="#" className="hover:text-amber-700 transition">O nás</a>
            <a href="#" className="hover:text-amber-700 transition">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* HERO SEKCE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070" 
            alt="Interiér"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <span className="uppercase tracking-[0.3em] text-sm mb-4 block font-light">
            Tradiční truhlářství z Opavy
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-medium mb-6 leading-tight text-white">
            Luzar <span className="italic">Interiér</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-gray-200">
            Navrhujeme a vyrábíme nábytek, který definuje prostor. Od moderních kuchyní po kompletní vybavení objektů.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-4 rounded-full transition-all shadow-xl uppercase tracking-widest text-xs">
              Naše realizace
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full transition-all uppercase tracking-widest text-xs">
              Poptávka
            </button>
          </div>
        </div>
      </section>
      {/* SEKCE REALIZACE */}
      <section id="realizace" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-2 font-medium">
                Portfolio
              </h2>
              <p className="text-4xl md:text-5xl font-serif text-stone-900">
                Naše poslední <span className="italic">práce</span>
              </p>
            </div>
            <p className="max-w-md text-stone-500 font-light">
              Každý kus nábytku je originál navržený na míru vašim potřebám. Od moderního minimalismu po klasický masiv.
            </p>
          </div>

          {/* Mřížka s fotkami */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projekt 1 */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="relative h-[400px] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Kuchyně na míru"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-xl font-serif text-stone-800">Moderní kuchyně - Dub</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2025</p>
            </div>

            {/* Projekt 2 */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="relative h-[400px] overflow-hidden rounded-sm shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Vestavná skříň"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-xl font-serif text-stone-800">Šatna na míru</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2024</p>
            </div>

            {/* Projekt 3 */}
            <div className="group cursor-pointer overflow-hidden">
              <div className="relative h-[400px] overflow-hidden rounded-sm shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  alt="Kancelářský nábytek"
                />
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-4 text-xl font-serif text-stone-800">Pracovna v podkroví</h3>
              <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Realizace 2025</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}