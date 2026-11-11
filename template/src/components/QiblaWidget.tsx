import { useState, useEffect } from 'react';
import AdSlot from './AdSlot';

interface QiblaWidgetProps {
  currentLang?: string;
}

export default function QiblaWidget({ currentLang = 'en' }: QiblaWidgetProps) {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [qiblaAngle, setQiblaAngle] = useState<number | null>(null);
  const [locationName, setLocationName] = useState<string>('Detecting location...');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Koordinat Kakbah di Makkah (21.4225° N, 39.8262° E)
  const KAABA_LAT = 21.4225;
  const KAABA_LNG = 39.8262;

  // Rumus perhitungan sudut Qibla (Great Circle / Bearing formula)
  const calculateQibla = (latitude: number, longitude: number) => {
    const phi1 = (latitude * Math.PI) / 180;
    const lambda1 = (longitude * Math.PI) / 180;
    const phi2 = (KAABA_LAT * Math.PI) / 180;
    const lambda2 = (KAABA_LNG * Math.PI) / 180;

    const y = Math.sin(lambda2 - lambda1);
    const x = Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(lambda2 - lambda1);
    
    let theta = Math.atan2(y, x);
    let bearing = (theta * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    return Math.round(bearing * 100) / 100;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setLat(userLat);
          setLng(userLng);

          const angle = calculateQibla(userLat, userLng);
          setQiblaAngle(angle);
          setLocationName(`Lat: ${userLat.toFixed(2)}, Lng: ${userLng.toFixed(2)}`);
          setLoading(false);
        },
        () => {
          // Fallback ke koordinat default (Semarang / Indonesia) jika izin ditolak
          const defaultLat = -6.9666;
          const defaultLng = 110.4166;
          setLat(defaultLat);
          setLng(defaultLng);
          setQiblaAngle(calculateQibla(defaultLat, defaultLng));
          setLocationName('Semarang, Indonesia (Default Fallback)');
          setLoading(false);
          setError('Geolocation permission denied. Showing default location.');
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-900 text-center">
      
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-100 mb-1">
          🕋 Qibla Direction Finder
        </h2>
        <p className="text-sm text-gray-500">
          Accurate Kaaba direction from your current geographic location.
        </p>
      </div>

      {error && (
        <div className="p-3 mb-4 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 rounded-xl text-xs font-medium">
          {error}
        </div>
      )}

      {/* Status Lokasi */}
      <div className="mb-6 px-4 py-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
        📍 {locationName}
      </div>

      {/* Kompas Visual Interaktif */}
      {loading ? (
        <div className="py-20 text-gray-400 font-medium">Calculating Qibla angle...</div>
      ) : (
        <div className="relative w-64 h-64 mx-auto my-8 flex items-center justify-center rounded-full border-8 border-emerald-100 dark:border-emerald-950 bg-gradient-to-b from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20 shadow-inner">
          
          {/* Penunjuk Kompas Utara */}
          <div className="absolute top-2 text-xs font-bold text-gray-400">N</div>
          <div className="absolute bottom-2 text-xs font-bold text-gray-400">S</div>
          <div className="absolute left-2 text-xs font-bold text-gray-400">W</div>
          <div className="absolute right-2 text-xs font-bold text-gray-400">E</div>

          {/* Jarum Penunjuk Arah Qibla */}
          <div 
            className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
            style={{ transform: `rotate(${qiblaAngle || 0}deg)` }}
          >
            <div className="w-2 h-28 bg-emerald-600 rounded-full absolute -top-4 flex items-start justify-center shadow-md">
              <span className="text-xs text-white mt-1">🕋</span>
            </div>
          </div>

          {/* Center Badge */}
          <div className="w-20 h-20 bg-emerald-900 text-white rounded-full flex flex-col items-center justify-center shadow-lg z-10">
            <span className="text-xs uppercase tracking-wider opacity-80">Qibla</span>
            <span className="text-sm font-bold">{qiblaAngle}°</span>
          </div>

        </div>
      )}

      <p className="text-xs text-gray-500 mb-6">
        Angle measured clockwise from True North to the Holy Kaaba in Mecca.
      </p>

      {/* Ad Slot inside Qibla Component */}
      <div className="mt-4">
        <AdSlot position="in-article" slotId="1222556839" />
      </div>

    </div>
  );
}
