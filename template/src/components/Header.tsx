import { useState } from 'react';
import AdSlot from './AdSlot';

interface HeaderProps {
  currentLang?: string;
}

export default function Header({ currentLang = 'en' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'ur', name: 'اردو' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'fr', name: 'Français' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ms', name: 'Bahasa Melayu' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-emerald-100 dark:border-emerald-900 shadow-sm">
      {/* Header Top Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <AdSlot position="header" slotId="header-top-banner" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                ☪
              </div>
              <span className="text-xl font-extrabold text-emerald-900 dark:text-emerald-100 tracking-tight">
                Islamic Online
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a href="/quran" className="hover:text-emerald-600 transition">Quran</a>
            <a href="/hadith" className="hover:text-emerald-600 transition">Hadith</a>
            <a href="/prayer-times" className="hover:text-emerald-600 transition">Prayer Times</a>
            <a href="/qibla" className="hover:text-emerald-600 transition">Qibla</a>
            <a href="/zakat-calculator" className="hover:text-emerald-600 transition">Zakat</a>
            <a href="/tasbih" className="hover:text-emerald-600 transition">Tasbih</a>
            <a href="/calendar" className="hover:text-emerald-600 transition">Calendar</a>
          </nav>

          {/* Right Section: Language Selector & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            
            {/* Multi-Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
                aria-expanded={isLangDropdownOpen}
              >
                <span>🌐</span>
                <span className="uppercase font-semibold">{currentLang}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 z-50 max-h-60 overflow-y-auto">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-700 ${
                        currentLang === lang.code ? 'font-bold text-emerald-600 bg-emerald-50/50 dark:bg-gray-700/50' : ''
                      }`}
                    >
                      {lang.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-3">
          <a href="/quran" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Al-Quran</a>
          <a href="/hadith" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Hadith</a>
          <a href="/prayer-times" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Prayer Times</a>
          <a href="/qibla" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Qibla Direction</a>
          <a href="/zakat-calculator" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Zakat Calculator</a>
          <a href="/tasbih" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Digital Tasbih</a>
          <a href="/calendar" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">Islamic Calendar</a>
        </div>
      )}
    </header>
  );
}
