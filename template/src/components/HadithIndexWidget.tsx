import { useState } from 'react';
import AdSlot from './AdSlot';
import { sitePath } from '../lib/site';

interface HadithBook {
  id: string;
  name: string;
  arabicName: string;
  author: string;
  totalHadith: string;
  description: string;
  reliability: string;
}

export default function HadithIndexWidget() {
  const [searchQuery, setSearchQuery] = useState('');

  const hadithBooks: HadithBook[] = [
    {
      id: 'bukhari',
      name: 'Sahih al-Bukhari',
      arabicName: 'صحيح البخاري',
      author: 'Imam Muhammad al-Bukhari',
      totalHadith: '7,563 Hadiths',
      description: 'Widely regarded as the most authentic collection of Hadith, compiled by Imam Bukhari.',
      reliability: 'Sahih (Authentic)',
    },
    {
      id: 'muslim',
      name: 'Sahih Muslim',
      arabicName: 'صحيح مسلم',
      author: 'Imam Muslim ibn al-Hajjaj',
      totalHadith: '7,500 Hadiths',
      description: 'The second most authentic book of Hadith, meticulously verified by Imam Muslim.',
      reliability: 'Sahih (Authentic)',
    },
    {
      id: 'nasai',
      name: 'Sunan an-Nasa\'i',
      arabicName: 'سنن النسائي',
      author: 'Imam An-Nasa\'i',
      totalHadith: '5,760 Hadiths',
      description: 'Renowned for having the strictest criteria for narrators among the Sunan collections.',
      reliability: 'Hasan / Sahih',
    },
    {
      id: 'abudawud',
      name: 'Sunan Abu Dawud',
      arabicName: 'سنن أبي داود',
      author: 'Imam Abu Dawud',
      totalHadith: '5,274 Hadiths',
      description: 'Focuses primarily on legal rulings and Sunnah practices derived from Prophetic traditions.',
      reliability: 'Authentic Scholarly Selection',
    },
    {
      id: 'tirmidhi',
      name: 'Jami at-Tirmidhi',
      arabicName: 'جامع الترمذي',
      author: 'Imam Al-Tirmidhi',
      totalHadith: '3,956 Hadiths',
      description: 'Notable for including the grading of hadiths and scholarly consensus on legal rulings.',
      reliability: 'Hasan / Sahih',
    },
    {
      id: 'ibnmajah',
      name: 'Sunan Ibn Majah',
      arabicName: 'سنن ابن ماجه',
      author: 'Imam Ibn Majah',
      totalHadith: '4,341 Hadiths',
      description: 'The sixth of the major Hadith collections (Kutub al-Sittah), containing unique narrations.',
      reliability: 'Comprehensive Collection',
    },
  ];

  const filteredBooks = hadithBooks.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Hadith collections by book name or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-4 pl-12 bg-white dark:bg-gray-900 border border-emerald-100 dark:border-emerald-900 rounded-2xl shadow-sm focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
        />
        <span className="absolute left-4 top-4 text-gray-400 text-xl">🔍</span>
      </div>

      {/* Ad Slot Above Index */}
      <AdSlot position="in-article" slotId="1222556839" />

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-emerald-100/60 dark:border-emerald-900/60 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
                  {book.reliability}
                </span>
                <span className="text-xl font-arabic text-emerald-800 dark:text-emerald-300">
                  {book.arabicName}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                {book.name}
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-3">
                Compiled by {book.author} • {book.totalHadith}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {book.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs text-gray-400">Verified Sunnah Corpus</span>
              <a
                href={sitePath('hadith')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition shadow-sm"
              >
                Explore Hadiths →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Ad Slot Below Index */}
      <div className="mt-8">
        <AdSlot position="footer" slotId="1222556839" />
      </div>

    </div>
  );
}
