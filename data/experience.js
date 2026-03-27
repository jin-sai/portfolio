// ════════════════════════════════════════
// data/experience.js
// Edit this file to update your work history.
// Jobs are shown newest-first in a timeline.
// ════════════════════════════════════════

const EXPERIENCE = [

  {
    period:  '2022 — present',
    role:    'Senior Backend Engineer',
    company: 'Meridian Labs — San Francisco, CA',
    points: [
      'Monolith → microservices: deploy time <strong>4 h → 8 min</strong>',
      'Multi-region active-active on AWS: <strong>99.95% SLA</strong>, 2M+ DAUs',
      'Mentored 5 engineers; ADRs & RFCs cut re-work by 35%',
      'Reduced cloud spend by <strong>$180K/yr</strong>',
    ],
  },

  {
    period:  '2020 — 2022',
    role:    'Backend Engineer',
    company: 'Vantage Systems — Remote',
    points: [
      'Real-time bidding engine in Go: <strong>50K concurrent connections</strong>, sub-10ms',
      'Data pipeline: 200M events/day → ClickHouse',
      'GDPR deletion workflows across 12M user records',
    ],
  },

  {
    period:  '2018 — 2020',
    role:    'Software Engineer',
    company: 'Stacknode Inc. — Bengaluru, India',
    points: [
      'REST & GraphQL APIs: <strong>3M+ requests/day</strong>',
      'Redis cache layer: 68% response time reduction',
      'Internal CLI tooling adopted by 40-person eng org',
    ],
  },

];
