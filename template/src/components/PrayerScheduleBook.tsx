import { useState } from 'react';

interface ScheduleRow {
  date: string;
  timings: Record<string, string>;
}

const LOCATIONS = [
  { city: 'Semarang', country: 'Indonesia' },
  { city: 'Jakarta', country: 'Indonesia' },
  { city: 'Mecca', country: 'Saudi Arabia' },
  { city: 'London', country: 'United Kingdom' },
  { city: 'New York', country: 'United States' },
];

export default function PrayerScheduleBook() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [locationIndex, setLocationIndex] = useState(0);
  const [rows, setRows] = useState<ScheduleRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = LOCATIONS[locationIndex];

  const generate = async () => {
    if (!Number.isInteger(year) || year < 1900 || year > 2100) {
      setError('Enter a year between 1900 and 2100.');
      return;
    }

    setLoading(true);
    setError('');
    setRows([]);
    try {
      const months = await Promise.all(
        Array.from({ length: 12 }, async (_, index) => {
          const params = new URLSearchParams({
            city: location.city,
            country: location.country,
            method: '2',
            month: String(index + 1),
            year: String(year),
          });
          const response = await fetch(`https://api.aladhan.com/v1/calendarByCity?${params}`);
          if (!response.ok) throw new Error(`Prayer calendar service returned ${response.status}`);
          const result = await response.json();
          if (result.code !== 200 || !Array.isArray(result.data)) {
            throw new Error(`The prayer calendar for month ${index + 1} was unavailable.`);
          }
          return result.data as Array<{ date: { gregorian: { date: string } }; timings: Record<string, string> }>;
        }),
      );
      setRows(months.flat().map((entry) => ({
        date: entry.date.gregorian.date,
        timings: entry.timings,
      })));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to load the yearly prayer book.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="yearly-schedule" className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
      <div id="prayer-book" className="scroll-mt-24">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Prayer book</p>
        <h2 className="mt-2 text-2xl font-bold text-emerald-950">Yearly prayer times</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Generate a downloadable-in-browser reference table for a city and year. Times use the MWL calculation method and may differ from local mosque timetables.
        </p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_150px_auto]">
        <label className="text-sm font-semibold text-gray-700">
          City
          <select
            value={locationIndex}
            onChange={(event) => setLocationIndex(Number(event.target.value))}
            className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-normal"
          >
            {LOCATIONS.map((item, index) => (
              <option key={`${item.city}-${item.country}`} value={index}>{item.city}, {item.country}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-gray-700">
          Year
          <input
            type="number"
            min="1900"
            max="2100"
            value={year}
            onChange={(event) => setYear(Number(event.target.value))}
            className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-normal"
          />
        </label>
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="self-end rounded-lg bg-emerald-700 px-5 py-2.5 font-semibold text-white hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? 'Loading…' : 'Generate year'}
        </button>
      </div>
      {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {rows.length > 0 && (
        <div className="mt-5 max-h-[34rem] overflow-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="sticky top-0 bg-emerald-50 text-emerald-950">
              <tr>
                {['Date', 'Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((heading) => (
                  <th key={heading} className="px-3 py-2 font-bold">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.date} className="border-t border-gray-100 even:bg-gray-50">
                  <td className="px-3 py-2">{row.date}</td>
                  {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer) => (
                    <td key={prayer} className="px-3 py-2">{row.timings[prayer]?.split(' ')[0] ?? '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
