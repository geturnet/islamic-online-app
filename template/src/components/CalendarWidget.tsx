import { useState, useEffect } from 'react';
import AdSlot from './AdSlot';

interface CalendarWidgetProps {
  currentLang?: string;
}

export default function CalendarWidget({ currentLang = 'en' }: CalendarWidgetProps) {
  const [hijriDate, setHijriDate] = useState<any>(null);
  const [gregorianDate, setGregorianDate] = useState<string>('');
  const [convertedResult, setConvertedResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch hari ini dari Aladhan API
  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    setGregorianDate(`${year}-${month}-${day}`);

    fetch(`https://api.alquran.cloud/v1/gregorianToHijri/${formattedDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setHijriDate(data.data.hijri);
          setConvertedResult(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handler konversi tanggal Masehi ke Hijriyah
  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gregorianDate) return;

    const [year, month, day] = gregorianDate.split('-');
    const formatted = `${day}-${month}-${year}`;

    try {
      const res = await fetch(`https://api.alquran.cloud/v1/gregorianToHijri/${formatted}`);
      const data = await res.json();
      if (data.code === 200) {
        setConvertedResult(data.data);
      }
    } catch (err) {
      console.error('Conversion error', err);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Kartu Hari Ini (Today's Hijri Date) */}
      <div className="p-8 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white rounded-3xl shadow-lg relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest bg-emerald-800 px-3 py-1 rounded-full text-emerald-200 inline-block mb-3">
            Today in Islamic Calendar
          </span>
          {loading ? (
            <p className="text-lg">Loading current date...</p>
          ) : (
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-1">
                {hijriDate?.day} {hijriDate?.month.en} {hijriDate?.year} AH
              </h2>
              <p className="text-emerald-100 text-sm">
                {hijriDate?.weekday.en} • {hijriDate?.month.ar} ({hijriDate?.month.number})
              </p>
            </div>
          )}
        </div>
        <div className="text-5xl font-arabic bg-emerald-800/50 p-6 rounded-2xl border border-emerald-600/50">
          ☪
        </div>
      </div>

      {/* Ad Slot Above Converter */}
      <AdSlot position="in-article" slotId="1222556839" />

      {/* Date Converter Section */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900">
        <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
          📅 Gregorian to Hijri Date Converter
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Select any Gregorian calendar date to instantly convert it into its precise Islamic Hijri equivalent.
        </p>

        <form onSubmit={handleConvert} className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="date"
            value={gregorianDate}
            onChange={(e) => setGregorianDate(e.target.value)}
            className="w-full md:w-auto flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition shadow-sm"
          >
            Convert Date
          </button>
        </form>

        {/* Hasil Konversi */}
        {convertedResult && (
          <div className="mt-6 p-5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-semibold block mb-1">
                Converted Hijri Date
              </span>
              <span className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
                {convertedResult.hijri.day} {convertedResult.hijri.month.en} ({convertedResult.hijri.month.ar}), {convertedResult.hijri.year} AH
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">Designation</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {convertedResult.hijri.designation.expanded}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Ad Slot Below Converter */}
      <div className="mt-8">
        <AdSlot position="footer" slotId="1222556839" />
      </div>

    </div>
  );
}
