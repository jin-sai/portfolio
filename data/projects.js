// ════════════════════════════════════════
// data/projects.js
// Edit this file to add, remove, or update projects.
// Each project is an accordion card in the portfolio.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title: 'Housie Game Android App',
    tags:  ['Java', 'Android Studio'],
    desc:  'Developed and published an offline Android Housie game that automated ticket generation and number calling. Achieved over 10K organic installs on Google Play Store.',
    metrics: [
      { value: '10K+', label: 'Play Store installs' },
      { value: '100%', label: 'offline' },
    ],
    links: [
      { label: '⌥ github', href: '#' },
    ],
  },

  {
    title: 'Badminton Court Manager',
    tags:  ['Flutter', 'Firebase', 'Android Studio'],
    desc:  'Flutter-based Android application with Firebase backend to manage bookings, sales and expenses for a local badminton court, digitizing and streamlining daily operations.',
    metrics: [
      { value: 'live', label: 'in production' },
    ],
    links: [
      { label: '⌥ github', href: '#' },
    ],
  },

];