import AdSlot from './AdSlot';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-6">
      
      {/* Sidebar Top Ad Slot */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900">
        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-3">Sponsored</h4>
        <AdSlot position="sidebar" slotId="1222556839" />
      </div>

      {/* Quick Navigation / Widget Links */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900">
        <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-4 border-b border-emerald-100 dark:border-emerald-800 pb-2">
          Islamic Essentials
        </h3>
        <ul className="space-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <a href="/quran" className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              <span>📖 Al-Quran & Tafsir</span>
              <span className="text-xs text-emerald-600 font-bold">Read</span>
            </a>
          </li>
          <li>
            <a href="/prayer-times" className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              <span>⏰ Prayer Times</span>
              <span className="text-xs text-emerald-600 font-bold">Check</span>
            </a>
          </li>
          <li>
            <a href="/qibla" className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              <span>🕋 Qibla Direction</span>
              <span className="text-xs text-emerald-600 font-bold">Find</span>
            </a>
          </li>
          <li>
            <a href="/zakat-calculator" className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              <span>💰 Zakat Calculator</span>
              <span className="text-xs text-emerald-600 font-bold">Calculate</span>
            </a>
          </li>
          <li>
            <a href="/tasbih" className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              <span>📿 Digital Tasbih</span>
              <span className="text-xs text-emerald-600 font-bold">Dhikr</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Bottom Ad Slot */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-900">
        <AdSlot position="sidebar" slotId="1222556839" />
      </div>

    </aside>
  );
}
