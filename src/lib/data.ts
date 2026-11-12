export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  image: string;
  video?: string;
  body: string[];
}

const lorem = (topic: string, n: number) =>
  Array.from({ length: n }, (_, i) =>
    `This section explores ${topic} in depth, drawing on classical scholarship and contemporary practice. ` +
      `Part ${i + 1} examines the foundations, the evidences, and the practical guidance that Muslims can apply daily. ` +
      `Scholars across generations have emphasised balance, sincerity, and consistency, reminding us that small, ` +
      `regular deeds are beloved. Readers are encouraged to reflect, verify sources, and consult qualified teachers ` +
      `for matters of worship and law.`
  );

export const ARTICLES: Article[] = [
  {
    slug: "beginners-guide-to-the-quran",
    title: "A Beginner's Guide to the Quran",
    excerpt: "Understand the structure, themes, and etiquette of reading the Quran.",
    category: "Al-Quran",
    readMinutes: 12,
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&q=80",
    video: "https://www.youtube.com/embed/6nM5j9Z9Q1A",
    body: lorem("the Quran", 8),
  },
  {
    slug: "how-to-perform-salah-step-by-step",
    title: "How to Perform Salah Step by Step",
    excerpt: "A clear, practical walkthrough of the five daily prayers.",
    category: "Prayer",
    readMinutes: 10,
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80",
    body: lorem("the daily prayer", 7),
  },
  {
    slug: "understanding-hadith-science",
    title: "Understanding Hadith Science",
    excerpt: "How scholars verified the sayings of the Prophet ﷺ.",
    category: "Hadith",
    readMinutes: 14,
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80",
    body: lorem("hadith authentication", 8),
  },
  {
    slug: "the-power-of-dua",
    title: "The Power of Dua",
    excerpt: "Supplication as a direct line to the Divine.",
    category: "Dua",
    readMinutes: 9,
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&q=80",
    body: lorem("supplication", 6),
  },
  {
    slug: "ramadan-preparation-guide",
    title: "Ramadan Preparation Guide",
    excerpt: "Prepare spiritually and practically for the blessed month.",
    category: "Calendar",
    readMinutes: 11,
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80",
    body: lorem("Ramadan", 7),
  },
  {
    slug: "the-99-names-of-allah",
    title: "The 99 Names of Allah",
    excerpt: "Reflecting on the beautiful names and their meanings.",
    category: "99 Names",
    readMinutes: 13,
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1200&q=80",
    body: lorem("the divine names", 8),
  },
  {
    slug: "zakat-explained",
    title: "Zakat Explained",
    excerpt: "Who pays, how much, and to whom.",
    category: "Zakat",
    readMinutes: 8,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
    body: lorem("zakat", 6),
  },
  {
    slug: "finding-the-qibla",
    title: "Finding the Qibla Anywhere",
    excerpt: "Methods for determining prayer direction.",
    category: "Qibla",
    readMinutes: 7,
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&q=80",
    body: lorem("the qibla", 5),
  },
  {
    slug: "islamic-calendar-explained",
    title: "The Islamic Calendar Explained",
    excerpt: "The Hijri months and their significance.",
    category: "Calendar",
    readMinutes: 10,
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80",
    body: lorem("the Hijri calendar", 7),
  },
  {
    slug: "seeking-knowledge-in-islam",
    title: "Seeking Knowledge in Islam",
    excerpt: "The virtue of learning and teaching.",
    category: "Knowledge",
    readMinutes: 12,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    body: lorem("seeking knowledge", 8),
  },
];

export const QURAN_SURAHS = [
  { n: 1, name: "Al-Fatihah", en: "The Opening", ayahs: 7, type: "Meccan" },
  { n: 2, name: "Al-Baqarah", en: "The Cow", ayahs: 286, type: "Medinan" },
  { n: 3, name: "Ali 'Imran", en: "Family of Imran", ayahs: 200, type: "Medinan" },
  { n: 4, name: "An-Nisa", en: "The Women", ayahs: 176, type: "Medinan" },
  { n: 5, name: "Al-Ma'idah", en: "The Table Spread", ayahs: 120, type: "Medinan" },
  { n: 6, name: "Al-An'am", en: "The Cattle", ayahs: 165, type: "Meccan" },
  { n: 7, name: "Al-A'raf", en: "The Heights", ayahs: 206, type: "Meccan" },
  { n: 8, name: "Al-Anfal", en: "The Spoils of War", ayahs: 75, type: "Medinan" },
  { n: 9, name: "At-Tawbah", en: "The Repentance", ayahs: 129, type: "Medinan" },
  { n: 10, name: "Yunus", en: "Jonah", ayahs: 109, type: "Meccan" },
  { n: 11, name: "Hud", en: "Hud", ayahs: 123, type: "Meccan" },
  { n: 12, name: "Yusuf", en: "Joseph", ayahs: 111, type: "Meccan" },
];

export const HADITHS = [
  { id: 1, text: "The best among you are those who have the best manners and character.", source: "Sahih al-Bukhari", narrator: "Abdullah ibn Amr" },
  { id: 2, text: "None of you truly believes until he loves for his brother what he loves for himself.", source: "Sahih al-Bukhari", narrator: "Anas ibn Malik" },
  { id: 3, text: "The strong believer is better and more beloved to Allah than the weak believer.", source: "Sahih Muslim", narrator: "Abu Hurairah" },
  { id: 4, text: "Whoever believes in Allah and the Last Day should speak good or remain silent.", source: "Sahih al-Bukhari", narrator: "Abu Hurairah" },
  { id: 5, text: "Make things easy and do not make them difficult.", source: "Sahih al-Bukhari", narrator: "Anas ibn Malik" },
  { id: 6, text: "The most beloved deeds to Allah are those done consistently, even if small.", source: "Sahih al-Bukhari", narrator: "Aisha" },
];

export const DUAS = [
  { title: "Morning Remembrance", arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ", translit: "Asbahna wa asbahal-mulku lillah", meaning: "We have entered the morning and the dominion belongs to Allah." },
  { title: "Before Eating", arabic: "بِسْمِ اللَّهِ", translit: "Bismillah", meaning: "In the name of Allah." },
  { title: "After Eating", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا", translit: "Alhamdulillahil-ladhi at'amana", meaning: "Praise be to Allah who fed us." },
  { title: "Seeking Forgiveness", arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ", translit: "Rabbighfir li wa tub 'alayya", meaning: "My Lord, forgive me and accept my repentance." },
  { title: "Travel Dua", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا", translit: "Subhanal-ladhi sakhkhara lana hadha", meaning: "Glory to Him who has subjected this to us." },
  { title: "For Knowledge", arabic: "رَبِّ زِدْنِي عِلْمًا", translit: "Rabbi zidni 'ilma", meaning: "My Lord, increase me in knowledge." },
];

export const NAMES_99 = [
  "Ar-Rahman", "Ar-Rahim", "Al-Malik", "Al-Quddus", "As-Salam", "Al-Mu'min", "Al-Muhaymin", "Al-Aziz",
  "Al-Jabbar", "Al-Mutakabbir", "Al-Khaliq", "Al-Bari'", "Al-Musawwir", "Al-Ghaffar", "Al-Qahhar", "Al-Wahhab",
  "Ar-Razzaq", "Al-Fattah", "Al-'Alim", "Al-Qabid", "Al-Basit", "Al-Khafid", "Ar-Rafi'", "Al-Mu'izz",
  "Al-Mudhill", "As-Sami'", "Al-Basir", "Al-Hakam", "Al-'Adl", "Al-Latif", "Al-Khabir", "Al-Halim",
  "Al-'Azim", "Al-Ghafur", "Ash-Shakur", "Al-'Ali", "Al-Kabir", "Al-Hafiz", "Al-Muqit", "Al-Hasib",
  "Al-Jalil", "Al-Karim", "Ar-Raqib", "Al-Mujib", "Al-Wasi'", "Al-Hakim", "Al-Wadud", "Al-Majid",
  "Al-Ba'ith", "Ash-Shahid", "Al-Haqq", "Al-Wakil", "Al-Qawi", "Al-Matin", "Al-Wali", "Al-Hamid",
  "Al-Muhsi", "Al-Mubdi'", "Al-Mu'id", "Al-Muhyi", "Al-Mumit", "Al-Hayy", "Al-Qayyum", "Al-Wajid",
  "Al-Majid", "Al-Wahid", "Al-Ahad", "As-Samad", "Al-Qadir", "Al-Muqtadir", "Al-Muqaddim", "Al-Mu'akhkhir",
  "Al-Awwal", "Al-Akhir", "Az-Zahir", "Al-Batin", "Al-Wali", "Al-Muta'ali", "Al-Barr", "At-Tawwab",
  "Al-Muntaqim", "Al-'Afuww", "Ar-Ra'uf", "Malikul-Mulk", "Dhul-Jalali wal-Ikram", "Al-Muqsit", "Al-Jami'",
  "Al-Ghani", "Al-Mughni", "Al-Mani'", "Ad-Darr", "An-Nafi'", "An-Nur", "Al-Hadi", "Al-Badi'",
  "Al-Baqi", "Al-Warith", "Ar-Rashid", "As-Sabur",
];

export const KALIMAS = [
  { arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", translit: "La ilaha illallah", meaning: "There is no god but Allah." },
  { arabic: "مُحَمَّدٌ رَسُولُ اللَّهِ", translit: "Muhammadur rasulullah", meaning: "Muhammad is the Messenger of Allah." },
  { arabic: "سُبْحَانَ اللَّهِ", translit: "Subhanallah", meaning: "Glory be to Allah." },
  { arabic: "الْحَمْدُ لِلَّهِ", translit: "Alhamdulillah", meaning: "All praise is for Allah." },
  { arabic: "اللَّهُ أَكْبَرُ", translit: "Allahu Akbar", meaning: "Allah is the Greatest." },
  { arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translit: "La hawla wa la quwwata illa billah", meaning: "There is no power except with Allah." },
];