import { useState, useEffect } from 'react';
import AdSlot from './AdSlot';

interface PrayerTimesWidgetProps {
  currentLang?: string;
}

export default function PrayerTimesWidget({ currentLang = 'en' }: PrayerTimesWidgetProps) {
  const [city, setCity] = useState('Semarang');
  const [country, setCountry] = useState('Indonesia');
  const [timings, setTimings] = useState<any>(null);
  const [dateInfo, setDateInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch prayer times using Aladhan API based on city
  const fetchPrayerTimes = async (cityName: string, countryName: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=${countryName}&method=2`
      );
      const data = await response.json();
      if (data.code === 200) {
        setTimings(data.data.timings);
        setDateInfo(data.data.date);
      } else {
        setError('Failed to load prayer times.');
      }
    } catch (err) {
      setError('Network error while fetching prayer times.');
    } finally {
      setLoading(false);
    }
  };

  // Get user location using browser geolocation
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.aladhan.com/v1/timings ?latitude=${latitude}&longitude=${longitude}&method=2`
            );
            const data = await res.json();
            if (data.code === 200) {
              setTimings(data.data.timings);
              setDateInfo(data.data.date);
              setCity('Current Location');
              setCountry('');
            }
          } catch (e) {
            setError('Could not fetch times for your coordinates.');
          }
        },
        () => {
          setError('Geolocation permission denied. Showing default city.');
        }
      );
    }
  };

  useEffect(() => {
    fetchPrayerTimes(city, country);
  }, []);

  const prayerNames = [
    { key: 'Fajr', name: 'Fajr (Subuh)', icon: '🌅' },
    { key: 'Sunrise', name: 'Sunrise (Syuruq)', icon: '☀️' },
    { key: 'Dhuhr', name: 'Dhuhr (Dzuhur)', icon: '🕛' },
    { key: 'Asr', name: 'Asr (Ashar)', icon: '🌤️' },
    { key: 'Maghrib', name: 'Maghrib', icon: '🌇' },
    { key: 'Isha', name: 'Isha (Isya)', icon: '🌙' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-emerald-100 dark:border-emerald-900">
      
      {/* Header & Location Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-gray-100 dark:border-gray-800 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
            Prayer Times & Schedule
          </h2>
          <p className="text-sm text-gray-500">
            {dateInfo ? `${dateInfo.hijri.weekday.en}, ${dateInfo.hijri.day} ${dateInfo.hijri.month.en} ${dateInfo.hijri.year} AH` : 'Loading date...'}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={detectLocation}
            className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-semibold text-sm rounded-xl border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition"
          >
            📍 Use My Location
          </button>
          
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              fetchPrayerTimes(e.target.value, country);
            }}
            className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium focus:outline-none"
          >
            <option value="Semarang">Semarang</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Mecca">Mecca</option>
            <option value="Medina">Medina</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="p-4 mb-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      {/* Ad Slot Above Timings */}
      <AdSlot position="in-article" slotId="1222556839" />

      {/* Timings Grid */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading prayer times...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prayerNames.map((p) => (
            <div
              key={p.key}
              className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-500 transition shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{p.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{p.name}</span>
              </div>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {timings ? timings[p.key] : '--:--'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Ad Slot Below Timings */}
      <div className="mt-8">
        <AdSlot position="footer" slotId="1222556839" />
      </div>

    </div>
  );
}
