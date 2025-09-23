// App.tsx
import { useState , useEffect } from 'react';
import { sections } from './sections';
import { Footer } from './components/footer';
import { ThemeProvider } from '@material-tailwind/react';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Mantener posición del scroll cuando hay un hash (#about, #abstract, etc.)
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Forzar al navegador a recordar la posición del scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);









  return (
    <ThemeProvider>
      <div className="h-screen dark:bg-red-300 text-gray-900 dark:text-gray-100">

        {/* 🎞️ Carrusel / Hero section */}
        <section className=" h-1/2 bg-earth-primary border-b-4 border-amber-300 ">
          <div className='flex items-center justify-center h-full '>
            {/* Aquí metes el carrusel */}
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-red-500 mb-4">GEOMARE 2025</h1>
              <p className="text-2xl text-earth-highlight">Congreso de Ciencias de la Tierra y del Mar</p>
              {/* Carousel component vendrá aquí */}
            </div>

          </div>
        </section>

        {/* 📌 Top Nav fijo */}
        <header className="py-2 sticky top-0 z-20 bg-earth-secondary mb-2 
        rounded-b-[50%] dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700 shadow-sm">
          {/* <header className="py-2 fixed top-0 left-0 w-full z-20  */}
          {/* bg-earth-secondary mb-2 rounded-b-[50%] dark:bg-zinc-800   */}
          {/* border-b border-zinc-300 dark:border-zinc-700 shadow-sm"> */}
          <nav className="flex flex-wrap items-center justify-center px-4 gap-3 mr-10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={` font-bold px-4 py-2 rounded-md 
                ${activeSection === section.id
                    ? `text-2xl uppercase font-extrabold underline bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600
                      bg-clip-text text-transparent animate-pulse`
                    // ? 'text-2xl uppercase text-rose-500 font-extrabold border-b-4 border-rose-500'
                    // ? 'text-2xl uppercase text-white font-extrabold bg-rose-500 px-5 py-2 rounded-lg shadow-lg transition-all duration-500'
                    // ? 'text-2xl uppercase text-rose-500 font-extrabold underline drop-shadow-[0_0_10px_#f43f5e]'
                    // ? 'text-2xl uppercase  text-rose-500 font-extrabold underline'
                    : ' text-xl transition-transform duration-500 hover:scale-150 text-rose-600'}`}>
                {section.label}
              </button>
            ))}
          </nav>
        </header>

        {/* 📖 Main content */}
        <main className="mt-16 max-w-7xl mx-auto px-4 py-10">
          {sections.find((s) => s.id === activeSection)?.component}
        </main>
        <div className='mt-60'>
          <Footer />
        </div>      

      </div>

    </ThemeProvider>
  );
}

