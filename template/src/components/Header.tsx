import { useEffect, useState } from 'react';
import AdSlot from './AdSlot';
import { LANGUAGES, translate, type LangCode } from '../../../src/lib/i18n';
import { sitePath } from '../lib/site';

interface HeaderProps {
  currentLang?: string;
}

export default function Header({ currentLang = 'en' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [lang, setLang] = useState<LangCode>(currentLang as LangCode);
  const t = (key: string) => translate(lang, key);
  const href = (path: string) => `${sitePath(path)}${lang === 'en' ? '' : `?lang=${lang}`}`;

  useEffect(() => {
    const stored = window.localStorage.getItem('islamic-online-language');
    const queryLang = new URLSearchParams(window.location.search).get('lang');
    const selected = LANGUAGES.find((item) => item.code === queryLang || item.code === stored)?.code ?? 'en';
    setLang(selected);
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === 'ar' || selected === 'ur' ? 'rtl' : 'ltr';
  }, []);

  const changeLanguage = (code: LangCode) => {
    window.localStorage.setItem('islamic-online-language', code);
    const url = new URL(window.location.href);
    if (code === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', code);
    window.location.assign(`${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-emerald-100 dark:border-emerald-900 shadow-sm">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9372551067994918" crossOrigin="anonymous"></script>
      {/* Header Top Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <AdSlot position="header" slotId="1222556839" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <a href={href('')} className="flex items-center space-x-2">
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
            <a href={href('quran')} className="hover:text-emerald-600 transition">{t('nav_quran')}</a>
            <a href={href('hadith')} className="hover:text-emerald-600 transition">{t('nav_hadith')}</a>
            <a href={href('dua')} className="hover:text-emerald-600 transition">{t('nav_dua')}</a>
            <a href={href('prayer-times')} className="hover:text-emerald-600 transition">{t('nav_prayer')}</a>
            <a href={href('calendar')} className="hover:text-emerald-600 transition">{t('nav_calendar')}</a>
            <details className="relative">
              <summary className="cursor-pointer list-none rounded-lg px-2 py-1 hover:bg-emerald-50">{t('tools')}⌄</summary>
              <div className="absolute right-0 mt-2 grid w-56 gap-1 rounded-xl border border-emerald-100 bg-white p-2 shadow-lg">
                {[
                  ['nav_names', 'names'],
                  ['nav_kalima', 'kalima'],
                  ['nav_tasbih', 'tasbih'],
                  ['nav_qibla', 'qibla'],
                  ['nav_zakat', 'zakat-calculator'],
                  ['nav_articles', 'articles'],
                ].map(([label, path]) => (
                  <a key={path} href={href(path)} className="rounded-lg px-3 py-2 hover:bg-emerald-50">
                    {t(label)}
                  </a>
                ))}
              </div>
            </details>
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
                <span className="uppercase font-semibold">{lang}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 z-50 max-h-60 overflow-y-auto">
                  {LANGUAGES.map((language) => (
                    <a
                      key={language.code}
                      href="#language"
                      onClick={(event) => {
                        event.preventDefault();
                        setLang(language.code);
                        setIsLangDropdownOpen(false);
                        changeLanguage(language.code);
                      }}
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-700 ${
                        lang === language.code ? 'font-bold text-emerald-600 bg-emerald-50/50 dark:bg-gray-700/50' : ''
                      }`}
                    >
                      {language.flag} {language.label}
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
          <a href={href('quran')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_quran')}</a>
          <a href={href('hadith')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_hadith')}</a>
          <a href={href('dua')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_dua')}</a>
          <a href={href('prayer-times')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_prayer')}</a>
          <a href={href('calendar')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_calendar')}</a>
          <a href={href('names')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_names')}</a>
          <a href={href('kalima')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_kalima')}</a>
          <a href={href('tasbih')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_tasbih')}</a>
          <a href={href('qibla')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_qibla')}</a>
          <a href={href('zakat-calculator')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_zakat')}</a>
          <a href={href('articles')} className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 hover:text-emerald-700">{t('nav_articles')}</a>
        </div>
      )}
    </header>
  );
}
