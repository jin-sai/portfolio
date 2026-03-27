// ════════════════════════════════════════
// data/about.js
// Edit this file to update the About section:
// your bio paragraph and the stats key-value pairs.
// ════════════════════════════════════════

const ABOUT = {

  location: 'Bengaluru, India',
  focus:    'Distributed systems · Microservices · Kafka · Kubernetes',

  // ── Bio card (supports <strong> for green highlights) ──
  bio: `Backend Software Engineer with <strong>4 years of experience</strong> designing and scaling distributed microservices at Cisco.
Skilled in <strong>Java, Spring Boot, Kafka</strong> and <strong>Kubernetes</strong>.<br><br>
Proven ability to build scalable, event-driven systems and enhance observability including end-to-end monitoring, alerting, centralized logging and reporting for high-throughput microservices.`,

  // ── Stats card ──
  // key: shown on the left, value: shown on the right in green
  stats: [
    { key: 'years_experience',    value: '4+' },
    { key: 'microservices_built', value: '25+' },
    { key: 'events_per_day',      value: '4B+' },
    { key: 'uptime_sla',          value: '99.99%' },
    { key: 'prod_issues_resolved', value: 'many' },
  ],

};