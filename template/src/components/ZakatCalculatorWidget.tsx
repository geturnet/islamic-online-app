import { useState } from 'react';
import AdSlot from './AdSlot';

interface ZakatCalculatorWidgetProps {
  currentLang?: string;
}

export default function ZakatCalculatorWidget({ currentLang = 'en' }: ZakatCalculatorWidgetProps) {
  // State untuk input aset finansial
  const [goldPrice, setGoldPrice] = useState<number>(1000); // Harga emas per gram (misal USD / currency satuan)
  const [cash, setCash] = useState<number>(0); // Uang tunai & Tabungan
  const [goldGrams, setGoldGrams] = useState<number>(0); // Kepemilikan Emas (gram)
  const [silverGrams, setSilverGrams] = useState<number>(0); // Kepemilikan Perak (gram)
  const [businessAssets, setBusinessAssets] = useState<number>(0); // Harta Perniagaan
  const [debts, setDebts] = useState<number>(0); // Hutang jatuh tempo

  // Perhitungan Nisab (85 gram emas)
  const nisabThreshold = goldPrice * 85;

  // Total Harta Bersih
  const totalGoldValue = goldGrams * goldPrice;
  const totalSilverValue = silverGrams * (goldPrice / 70); // Estimasi rasio perak
  const grossWealth = cash + totalGoldValue + totalSilverValue + businessAssets;
  const netWealth = Math.max(0, grossWealth - debts);

  // Status Wajib Zakat & Perhitungan 2.5%
  const isEligible = netWealth >= nisabThreshold;
  const zakatDue = isEligible ? netWealth * 0.025 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900">
      
      <div className="mb-8 text-center md:text-left border-b border-gray-100 dark:border-gray-800 pb-6">
        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
          💰 Interactive Zakat Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Calculate your annual Zakat obligations accurately based on current gold nisab threshold (85 grams).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Input: Harga Emas Per Gram */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Current Gold Price (Per Gram)
          </label>
          <input
            type="number"
            value={goldPrice}
            onChange={(e) => setGoldPrice(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
          <span className="text-xs text-gray-400 mt-1 block">Nisab Threshold (85g): ${nisabThreshold.toLocaleString()}</span>
        </div>

        {/* Input: Uang Tunai & Tabungan */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Cash & Savings in Bank
          </label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Input: Kepemilikan Emas (Gram) */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Gold Owned (Grams)
          </label>
          <input
            type="number"
            value={goldGrams}
            onChange={(e) => setGoldGrams(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Input: Harta Perniagaan / Bisnis */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Business Assets & Inventory Value
          </label>
          <input
            type="number"
            value={businessAssets}
            onChange={(e) => setBusinessAssets(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Input: Hutang / Kewajiban */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Immediate Debts & Liabilities
          </label>
          <input
            type="number"
            value={debts}
            onChange={(e) => setDebts(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

      </div>

      {/* Ad Slot in Calculator */}
      <div className="mb-8">
        <AdSlot position="in-article" slotId="1222556839" />
      </div>

      {/* Hasil Kalkulasi Zakat */}
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-1">
            Calculation Summary
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            Net Zakatable Wealth: <strong className="text-lg">${netWealth.toLocaleString()}</strong>
          </p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
            {isEligible ? '✅ Your wealth reaches the Nisab threshold. Zakat is obligatory.' : '⚠️ Your wealth is below Nisab. Zakat is not obligatory.'}
          </p>
        </div>

        <div className="text-center md:text-right bg-white dark:bg-gray-900 px-6 py-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800 min-w-[200px]">
          <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Total Zakat Due (2.5%)</span>
          <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            ${zakatDue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

    </div>
  );
}
