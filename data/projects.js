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

    problem: 'A local badminton court was tracking daily bookings, sales, and expenses in a paper register — leading to double-bookings, lost records, and no visibility into revenue.',

    built:   'A Flutter Android app with a Firebase/Firestore backend. Supports real-time slot booking, sales logging, and expense tracking. Deployed and actively used by the court to run daily operations.',

    metrics: [
      { value: 'live', label: 'in production' },
      { value: '0',    label: 'double-bookings since launch' },
    ],

    year: '2024',

    links: [
      { label: '⌥ github', href: '#' },
    ],
  },

];