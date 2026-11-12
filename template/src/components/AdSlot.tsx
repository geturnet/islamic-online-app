interface AdSlotProps {
  position: 'header' | 'sidebar' | 'in-article' | 'footer';
  slotId?: string;
}

export default function AdSlot({ position, slotId = '1222556839' }: AdSlotProps) {
  return (
    <div className={`ad-container ad-${position} my-6 p-2 bg-white dark:bg-gray-900 border border-dashed border-gray-200 dark:border-gray-800 rounded-lg text-center overflow-hidden`}>
      <span className="text-[9px] uppercase tracking-widest text-gray-400 block mb-1">Advertisement</span>
      
      {/* Google AdSense Unit */}
      <div className="ad-inner min-h-[90px] flex items-center justify-center">
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-9372551067994918"
             data-ad-slot={slotId}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
      </div>
    </div>
  );
}
