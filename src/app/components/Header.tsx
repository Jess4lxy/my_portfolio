'use client';

import { useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí implementarás la lógica de cambio de tema
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
    // Aquí implementarás la lógica de cambio de idioma
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900/15 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* logo (remember to make and swap it later) */} 
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J-A</span>
            </div>
            <span className="text-white font-bold text-xl">Jess4lxy</span>
          </div>

          {/* controls */}
          <div className="flex items-center space-x-4">
            
            {/* language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300 text-white"
              aria-label="Toggle language"
            >
              <span className="text-sm font-medium">
                {language === 'es' ? 'ES' : 'EN'}
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 14v2m-6-4h12M9 9h6m-6 4h6" />
              </svg>
            </button>

            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300 text-white"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // sun icon for light mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // moon icon for dark mode
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
