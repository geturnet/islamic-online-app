import { useState } from 'react';
import AdSlot from './AdSlot';

interface ZakatCalculatorWidgetProps {
  currentLang?: string;
}

export default function ZakatCalculatorWidget({ currentLang = 'en' }: ZakatCalculatorWidgetProps) {
  const [goldPrice, setGoldPrice] = useState<number>(70);
  const [silverPrice, setSilverPrice] = useState<number>(0.9);
  const [standard, setStandard] = useState<'gold' | 'silver'>('gold');
  const [cash, setCash] = useState<number>(0);
  const [goldGrams, setGoldGrams] = useState<number>(0);
  const [silverGrams, setSilverGrams] = useState<number>(0);
  const [businessAssets, setBusinessAssets] = useState<number>(0);
  const [debts, setDebts] = useState<number>(0);

  const nisabThreshold = standard === 'gold' ? goldPrice * 85 : silverPrice * 595;
  const totalGoldValue = goldGrams * goldPrice;
  const totalSilverValue = silverGrams * silverPrice;
  const grossWealth = cash + totalGoldValue + totalSilverValue + businessAssets;
  const netWealth = Math.max(0, grossWealth - debts);

  const isEligible = nisabThreshold > 0 && netWealth >= nisabThreshold;
  const zakatDue = isEligible ? netWealth * 0.025 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900">
      
      <div className="mb-8 text-center md:text-left border-b border-gray-100 dark:border-gray-800 pb-6">
        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
          💰 Interactive Zakat Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Enter current USD market prices and your eligible assets for an estimate. Values below are examples, not live prices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Input: Harga Emas Per Gram */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Gold Price (USD per Gram)
          </label>
          <input
            type="number"
            min="0"
            value={goldPrice}
            onChange={(e) => setGoldPrice(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
          <span className="text-xs text-gray-400 mt-1 block">Example market price; update before calculating.</span>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Silver Price (USD per Gram)
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={silverPrice}
            onChange={(e) => setSilverPrice(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Nisab Standard
          </label>
          <select
            value={standard}
            onChange={(e) => setStandard(e.target.value as 'gold' | 'silver')}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-medium text-gray-800 dark:text-gray-200"
          >
            <option value="gold">Gold: 85 grams</option>
            <option value="silver">Silver: 595 grams</option>
          </select>
          <span className="text-xs text-gray-400 mt-1 block">
            Estimated threshold: ${nisabThreshold.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </span>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Cash & Savings (USD)
          </label>
          <input
            type="number"
            min="0"
            value={cash}
            onChange={(e) => setCash(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Gold Owned (Grams)
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={goldGrams}
            onChange={(e) => setGoldGrams(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Silver Owned (Grams)
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={silverGrams}
            onChange={(e) => setSilverGrams(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Business Assets & Inventory Value
          </label>
          <input
            type="number"
            min="0"
            value={businessAssets}
            onChange={(e) => setBusinessAssets(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 font-medium text-gray-800 dark:text-gray-200"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Immediate Debts & Liabilities
          </label>
          <input
            type="number"
            min="0"
            value={debts}
            onChange={(e) => setDebts(Math.max(0, Number(e.target.value) || 0))}
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
      <p className="mt-4 text-xs leading-5 text-gray-500">
        This is an arithmetic aid, not a religious ruling. Zakat eligibility and nisab method can vary by asset and scholarly opinion; ask a qualified scholar about your circumstances.
      </p>

    </div>
  );
}
