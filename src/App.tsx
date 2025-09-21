// App.tsx
import { useState } from 'react';
import { sections } from './sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen dark:bg-red-300 text-gray-900 dark:text-gray-100">

      {/* 🎞️ Carrusel / Hero section */}
      <section className="bg-earth-primary py-16 border-b-4 border-amber-300">
        {/* Aquí metes el carrusel */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">GEOMARE 2025</h1>
          <p className="text-lg text-earth-highlight">Congreso de Ciencias de la Tierra y del Mar</p>
          {/* Carousel component vendrá aquí */}
        </div>
      </section>

      {/* 📌 Top Nav fijo */}
      <header className="sticky top-0 z-20 bg-white dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700 shadow-sm">
        <nav className="flex flex-wrap items-center justify-end px-4 gap-3 mr-10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-sm sm:text-base px-3 py-2 rounded-md font-medium 
                ${activeSection === section.id
                  ? 'uppercase font-bold text-xl text-earth-accent'
                  : 'transition-transform duration-500 hover:scale-125 text-earth-primary'}`}>
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      {/* 📖 Main content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {sections.find((s) => s.id === activeSection)?.component}
      </main>
    </div>
  );
}

