// App.tsx
import { useState } from 'react';
import { sections } from './sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 shadow-sm">
        <nav className="flex flex-wrap items-center justify-end px-4 py-3 gap-3 mr-10 gap-10">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-sm sm:text-base px-3 py-2 rounded-md font-medium text-teal-600
                ${activeSection === section.id
                  ? 'uppercase gap-10 font-bold text-xl px-3 py-2 text-rose-700'
                  : ' transition-transform duration-500 hover:scale-125 text-rose-700'}`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-10 border-4 border-cyan-600">
        {sections.find((s) => s.id === activeSection)?.component}
      </main>
    </div>
  );
}

