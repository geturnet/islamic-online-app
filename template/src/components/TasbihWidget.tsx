import { useState } from 'react';
import AdSlot from './AdSlot';

interface TasbihWidgetProps {
  currentLang?: string;
}

export default function TasbihWidget({ currentLang = 'en' }: TasbihWidgetProps) {
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(33);
  const [dhikrType, setDhikrType] = useState<string>('Subhanallah');

  const dhikrOptions = [
    { label: 'Subhanallah (سُبْحَانَ ٱللَّٰهِ)', value: 'Subhanallah', arabic: 'سُبْحَانَ ٱللَّٰهِ' },
    { label: 'Alhamdulillah (ٱلْحَمْدُ لِلَّٰهِ)', value: 'Alhamdulillah', arabic: 'ٱلْحَمْدُ لِلَّٰهِ' },
    { label: 'Allahu Akbar (ٱللَّٰهُ أَكْبَرu)', value: 'Allahu Akbar', arabic: 'ٱللَّٰهُ أَكْبَرُ' },
    { label: 'Astaghfirullah (أَسْتَغْفِرُ ٱللَّٰهَ)', value: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ ٱللَّٰهَ' },
    { label: 'La ilaha illallah (لَا إِلَٰهَ إِلَّا ٱللَّٰهُ)', value: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ' },
  ];

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-900 text-center">
      
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-100 mb-1">
          📿 Digital Tasbih Counter
        </h2>
        <p className="text-sm text-gray-500">
          Engage in daily Dhikr and remembrance of Allah anytime, anywhere.
        </p>
      </div>

      {/* Pilihan Dzikir */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2">
          Select Dhikr Formula
        </label>
        <select
          value={dhikrType}
          onChange={(e) => {
            setDhikrType(e.target.value);
            setCount(0);
          }}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 font-semibold text-sm focus:outline-none focus:border-emerald-500 shadow-sm"
        >
          {dhikrOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Teks Arab Dzikir */}
      <div className="mb-6 py-4 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900">
        <span className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 block">
          {dhikrOptions.find((o) => o.value === dhikrType)?.arabic}
        </span>
      </div>

      {/* Counter Display Utama */}
      <div className="my-8 flex flex-col items-center justify-center">
        <button
          onClick={handleIncrement}
          className="w-48 h-48 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all shadow-lg flex flex-col items-center justify-center text-white border-8 border-emerald-100 dark:border-emerald-950 focus:outline-none cursor-pointer group"
        >
          <span className="text-6xl font-black tracking-tight">{count}</span>
          <span className="text-xs uppercase tracking-widest text-emerald-100 mt-1 opacity-80 group-hover:opacity-100">Tap to Count</span>
        </button>
      </div>

      {/* Target & Reset Controls */}
      <div className="flex items-center justify-between px-4 mb-8">
        <div className="text-left">
          <span className="text-xs text-gray-400 block">Target Count</span>
          <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{target}</span>
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 rounded-xl text-xs font-bold transition shadow-sm"
        >
          🔄 Reset Counter
        </button>
      </div>

      {/* Ad Slot inside Tasbih Component */}
      <div className="mt-4">
        <AdSlot position="in-article" slotId="1222556839" />
      </div>

    </div>
  );
}
