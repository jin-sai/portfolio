// ════════════════════════════════════════
// data/projects.js
// Edit this file to add, remove, or update projects.
// Each project is an accordion card in the portfolio.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title:   'Developer Portfolio',
    tags:    ['Vanilla JS', 'HTML/CSS', 'Terminal UI'],

    problem: 'Tired of leaving the portfolio field blank on job applications. Built one that reflects where I work the most -- Terminal.',

    built:   'Built as a single-page static site using vanilla JS, HTML, and CSS. Features an interactive in-page terminal where visitors can navigate the site using CLI commands like ls, cat, and cd. Hosted on GitHub Pages.',

    metrics: [
      { value: '₹0', label: 'hosting cost' },
    ],

    year: '2026',

    links: [
      { label: '⌥ github', href: 'https://github.com/jin-sai/portfolio' },
      { label: '⌥ live site', funny: 'You just tried to open a door you\'re already inside.' },
    ],
  },

  {
    title:   'Constrained Matching Algorithms',
    tags:    ['C++', 'Algorithms', 'Open Source', 'Research'],

    problem: 'Matching algorithms power real-world systems from hospital placements to college admissions. Standard algorithms break down when hospitals have both minimum and maximum capacity constraints and open-source tools to handle these constrained variants were missing.',

    built:   'Contributed to an existing open-source C++ matching algorithms project by implementing new reduction-based algorithms for constrained variants and writing code to generate synthetic datasets for empirical testing and verification.',

    metrics: [
      { value: 'open source', label: 'contributions' },
      { value: 'active',      label: 'used in academic research' },
    ],

    year: '2021',

    links: [
      { label: '⌥ github — GraphMatching',      href: 'https://github.com/jin-sai/GraphMatching' },
      { label: '⌥ github — SMFQ_Graphmatching', href: 'https://github.com/jin-sai/SMFQ_Graphmatching' },
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
      { value: '206+ hrs', label: 'of manual work saved' },
      { value: '₹0',       label: 'hosting cost' },
    ],

    year: '2021',

    links: [
      { label: '⌥ github', href: 'https://github.com/jin-sai/payments_app' },
    ],
  },

  {
    title:   'Housie Game Android App',
    tags:    ['Java', 'Android Studio', 'Google Play Store'],

    problem: 'During COVID, our building tenants had a ritual - gathering on the terrace every evening for a Housie game. What we didn\'t have was Housie books. Lockdown created shortage of housie books.',

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

];