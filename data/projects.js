// ════════════════════════════════════════
// data/projects.js
// Edit this file to add, remove, or update projects.
// Each project is an accordion card in the portfolio.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title:   'Housie Game Android App',
    tags:    ['Java', 'Android Studio', 'Google Play Store'],

    problem: 'During COVID, our building tenants had a ritual - gathering on the terrace every evening for a Housie game. What we didn\'t have was Housie books. Lockdown created shortage of housie books in my town.',

    built:   'An offline Android app that auto-generates randomized Housie tickets, calls numbers aloud at configurable speed. No housie books, no coins, no dedicated caller needed.',

    metrics: [
      { value: '5K+', label: 'downloads' },
      { value: '100%', label: 'offline' },
    ],

    year: '2020',

    links: [
      { label: '⌥ play store', href: 'https://play.google.com/store/apps/details?id=com.app.sai_housie'},
    ],
  },

  {
    title:   'Badminton Court Manager',
    tags:    ['Flutter', 'Dart', 'Firebase', 'Firestore'],

    problem: 'A local badminton court caretaker was logging every transaction and expense on paper — spending 15+ minutes daily summing up totals with no way to track revenue trends or analyse profits over time.',

    built:   'Built an internal Android app using Flutter and Firebase that lets the caretaker log bookings, sales and expenses on the go. Profit-per-item tracking influenced inventory decisions and payment reminders ensured no dues slipped through. Generates daily and monthly reports with zero manual math.',

    metrics: [
      { value: '₹80K/mo', label: 'revenue tracked' },
      { value: '2 years',  label: 'in production' },
      { value: '206+ hrs', label: 'saved over 2 years' },
      { value: '₹0',       label: 'hosting cost' },
    ],

    year: '2021',

    links: [
      { label: '⌥ github', href: '#' },
    ],
  },

];