// ════════════════════════════════════════
// data/projects.js
// Edit this file to add, remove, or update projects.
// Each project is an accordion card in the portfolio.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title:   'Housie Game Android App',
    tags:    ['Java', 'Android Studio', 'Google Play'],

    problem: 'Playing Housie (Tambola) at family gatherings meant someone had to manually draw numbers and track tickets by hand — slow, error-prone, and not fun for the person running it.',

    built:   'An offline Android app that auto-generates randomized Housie tickets, calls numbers with animations, and tracks wins across patterns. Built in Java with Android Studio, fully offline — no internet required.',

    metrics: [
      { value: '10K+', label: 'organic installs' },
      { value: '100%', label: 'offline' },
    ],

    challenge: 'Ensuring the number draw felt truly random without repeats across a session, while keeping the UI responsive during animations on low-end Android devices.',

    links: [
      { label: '⌥ play store', href: '#' },
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

    challenge: 'Preventing concurrent booking conflicts in Firestore — solved using atomic transactions so two users booking the same slot at the same time always results in exactly one confirmation.',

    links: [
      { label: '⌥ github', href: '#' },
    ],
  },

];