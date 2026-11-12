import { useState, useEffect } from 'react';
import AdSlot from './AdSlot';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function QuranIndexWidget() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setSurahs(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredSurahs = surahs.filter(
    (s) =>
      s.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.englishNameTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.toString().includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Surah by name or number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-4 pl-12 bg-white dark:bg-gray-900 border border-emerald-100 dark:border-emerald-900 rounded-2xl shadow-sm focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
        />
        <span className="absolute left-4 top-4 text-gray-400 text-xl">🔍</span>
      </div>

      {/* Ad Slot Above Index */}
      <AdSlot position="in-article" slotId="1222556839" />

      {/* Surah Grid */}
      {loading ? (
        <div className="text-center py-16 text-gray-500 font-medium">Loading Al-Quran chapters...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurahs.map((surah) => (
            <a
              key={surah.number}
              href={`/quran/${surah.number}`}
              className="flex items-center justify-between p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-emerald-100/60 dark:border-emerald-900/60 hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold rounded-xl flex items-center justify-center text-sm group-hover:bg-emerald-600 group-hover:text-white transition">
                  {surah.number}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 group-hover:text-emerald-600 transition">
                    {surah.englishName}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {surah.englishNameTranslation} • {surah.numberOfAyahs} Ayahs
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-arabic">
                  {surah.name}
                </span>
                <span className="text-[10px] block uppercase text-gray-400 mt-1">
                  {surah.revelationType}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Ad Slot Below Index */}
      <div className="mt-8">
        <AdSlot position="footer" slotId="1222556839" />
      </div>

    </div>
  );
}
