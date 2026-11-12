export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  sections: { heading: string; paragraphs: string[] }[];
  related: string[];
}

export const ARTICLES: GuideArticle[] = [
  {
    slug: "building-a-quran-reading-habit",
    title: "Building a Consistent Quran Reading Habit",
    description: "Practical ways to make Quran recitation and reflection a steady part of everyday life.",
    category: "Quran",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&q=80",
    sections: [
      {
        heading: "Begin with a realistic routine",
        paragraphs: [
          "A sustainable Quran routine starts with a commitment that fits your day. Choose a regular time, such as after Fajr or before sleep, and begin with a small amount you can maintain. Consistency is more valuable than setting an ambitious target that quickly becomes difficult to keep.",
          "Prepare a quiet place and keep your mushaf or reading device ready. If your schedule changes, attach recitation to another stable habit rather than treating a missed session as a reason to stop. The goal is to create a welcoming rhythm for worship, not a source of guilt.",
        ],
      },
      {
        heading: "Read, listen, and reflect",
        paragraphs: [
          "For readers still learning Arabic, listening to a careful recitation can support pronunciation and familiarity with the verses. Read a translation from a trusted source alongside the Arabic text, remembering that every translation is an interpretation of meaning rather than the Quran itself.",
          "Pause occasionally to consider what a passage teaches about faith, character, and responsibility. Keep notes of questions for a qualified teacher. Tafsir and Quranic sciences have depth, so avoid drawing legal conclusions from a verse without context or reliable scholarship.",
        ],
      },
      {
        heading: "Make the habit durable",
        paragraphs: [
          "Use a simple weekly plan: select a manageable passage, reserve time for review, and leave room for days when life is busy. Families can read together, while individuals may benefit from a reading partner who encourages steady progress without turning worship into competition.",
          "Explore the [Quran index](/quran) to find a surah, then use the [Islamic calendar](/calendar) to plan around meaningful seasons. Whatever routine you choose, return to it gently and seek sound instruction when questions arise.",
        ],
      },
    ],
    related: ["understanding-daily-salah", "making-time-for-dhikr"],
  },
  {
    slug: "understanding-daily-salah",
    title: "Understanding the Five Daily Prayers",
    description: "An accessible overview of Salah, its daily rhythm, and learning the prayer step by step.",
    category: "Prayer",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80",
    sections: [
      {
        heading: "A daily rhythm of worship",
        paragraphs: [
          "The five obligatory prayers structure the Muslim day around remembrance of Allah. Their times follow the movement of the sun: Fajr before sunrise, Dhuhr after the sun passes its zenith, Asr in the afternoon, Maghrib just after sunset, and Isha at night. Exact timings depend on location and calculation convention.",
          "Prayer times published online are useful estimates, but local mosque timetables and trusted community guidance should be consulted when precision matters. Different calculation methods may produce small variations, especially for Fajr and Isha.",
        ],
      },
      {
        heading: "Learning the movements and recitations",
        paragraphs: [
          "A person learning Salah can study its sequence with a knowledgeable teacher or a reliable step-by-step guide. Lessons commonly cover preparation, intention, standing, recitation, bowing, prostration, sitting, and the closing salutation. Details can vary between schools of law, so follow sound instruction in your community.",
          "Take time to learn the recitations with care. Transliteration may help at the beginning, but it cannot fully represent Arabic sounds. Ask a teacher to listen and help correct pronunciation as your knowledge grows.",
        ],
      },
      {
        heading: "Plan prayer times around your location",
        paragraphs: [
          "Travel, daylight changes, and geography affect the daily timetable. Use the [prayer times tool](/prayer-times) to look up a city or request your browser location, and compare the result with a local mosque when available.",
          "A practical routine can include preparing before the time begins and setting a reminder for work or school. For questions about missed prayers, combining prayers, or other rulings, consult a qualified scholar rather than relying on a generic calculator.",
        ],
      },
    ],
    related: ["building-a-quran-reading-habit", "islamic-calendar-basics"],
  },
  {
    slug: "islamic-calendar-basics",
    title: "A Guide to the Islamic Hijri Calendar",
    description: "Learn how the lunar Hijri calendar works and why Islamic dates can differ by location.",
    category: "Calendar",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80",
    sections: [
      {
        heading: "A lunar calendar",
        paragraphs: [
          "The Hijri calendar is based on lunar months. A month begins with the appearance of the new crescent according to the method adopted by a community or authority. Since a lunar year is shorter than a solar year, Islamic months move through the seasons over time.",
          "The twelve month names include Muharram, Safar, Rabi al-Awwal, Rabi al-Thani, Jumada al-Ula, Jumada al-Akhirah, Rajab, Sha'ban, Ramadan, Shawwal, Dhu al-Qi'dah, and Dhu al-Hijjah.",
        ],
      },
      {
        heading: "Why dates may vary",
        paragraphs: [
          "Hijri dates shown by a calculated calendar are estimates. Crescent visibility, local practice, and the decision of an accepted religious authority can result in different start dates between places. A date converter should therefore be treated as a planning aid, not a declaration of a religious date.",
          "For Ramadan, Eid, and Hajj-related observances, follow the trusted local authority or community you normally rely on. This approach respects both the astronomical nature of the calendar and the established practices of Muslim communities.",
        ],
      },
      {
        heading: "Use a calendar as a planning tool",
        paragraphs: [
          "A calendar can help you prepare for Ramadan, keep track of the sacred months, and organize personal worship goals. Check a current local announcement for dates that depend on moon sighting.",
          "Open the [Islamic calendar and date converter](/calendar) to compare a Gregorian date with an estimated Hijri date. You can also use [prayer times](/prayer-times) to plan your daily schedule around local timings.",
        ],
      },
    ],
    related: ["understanding-daily-salah", "zakat-fundamentals"],
  },
  {
    slug: "zakat-fundamentals",
    title: "Zakat: Key Concepts Before You Calculate",
    description: "Understand common Zakat terms and the information to gather before estimating an amount.",
    category: "Zakat",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
    sections: [
      {
        heading: "What to understand first",
        paragraphs: [
          "Zakat is an important act of worship with rules that can depend on the kind of wealth, ownership, debts, and the passage of time. Nisab is a minimum threshold used in assessing certain forms of wealth. A lunar year is relevant for many, but not all, Zakat categories.",
          "The values of gold and silver change, and scholars may differ on which threshold is appropriate for a particular case. Business inventory, investments, retirement accounts, and jointly held assets may also require careful treatment.",
        ],
      },
      {
        heading: "Prepare accurate figures",
        paragraphs: [
          "Before estimating, gather current balances for cash and accounts, the value and type of precious metals, eligible business stock, and debts that are due. Avoid counting the same asset twice. Use a consistent currency and note the valuation date so that your calculation can be reviewed.",
          "A calculator can help with arithmetic, but it cannot decide whether a specific asset is Zakatable or resolve differences in scholarly method. Treat results as an estimate and ask a knowledgeable scholar or reputable Zakat organization about complex circumstances.",
        ],
      },
      {
        heading: "Calculate with care",
        paragraphs: [
          "The [Zakat calculator](/zakat-calculator) provides a simple estimate based on entered values and a selected threshold. Review every field before relying on the result, and update market prices rather than assuming sample values are current.",
          "For distribution, refer to qualified guidance and established charitable organizations. Zakat is not merely a percentage in a form; it is an obligation with rules, intention, and eligible recipients.",
        ],
      },
    ],
    related: ["islamic-calendar-basics", "making-time-for-dhikr"],
  },
  {
    slug: "making-time-for-dhikr",
    title: "Making Time for Daily Dhikr",
    description: "A gentle approach to remembering Allah through regular supplication and reflection.",
    category: "Dhikr",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1200&q=80",
    sections: [
      {
        heading: "Small, steady moments",
        paragraphs: [
          "Dhikr is remembrance of Allah through words, prayer, reflection, and actions of obedience. Many people find it easier to build a regular practice by attaching remembrance to a natural pause in the day, such as the morning, evening, or time after prayer.",
          "Start with a short, familiar remembrance and learn its meaning. A digital counter can support focus, but the purpose is mindful worship rather than reaching a number at the expense of attention.",
        ],
      },
      {
        heading: "Learn the words and their context",
        paragraphs: [
          "Supplications and remembrances are best learned from reliable sources, with attention to pronunciation and context. If a wording is unfamiliar, check its source and ask a teacher. Not every popular phrase or assigned count has the same level of evidence.",
          "The [dua collection](/dua) and [Kalima reference](/kalima) offer a starting point for common phrases. Use transliteration as temporary support while learning to read the Arabic script when possible.",
        ],
      },
      {
        heading: "Use tools without losing the purpose",
        paragraphs: [
          "A [Tasbih counter](/tasbih) may help keep track during a personal routine. You can also take a quiet moment without a device and reflect on gratitude, repentance, and the names of Allah.",
          "Keep your practice sustainable, and avoid judging others by the way they count or structure private remembrance. For specific devotional practices and their evidence, consult trusted scholarship.",
        ],
      },
    ],
    related: ["building-a-quran-reading-habit", "understanding-daily-salah"],
  },
];
