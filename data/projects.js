// ════════════════════════════════════════
// data/projects.js
// Edit this file to add, remove, or update projects.
// Each project is an accordion card in the portfolio.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title: 'FluxGateway',
    tags:  ['Go', 'Redis', 'gRPC', 'K8s'],
    desc:  'High-performance API gateway in Go, handling auth, rate limiting, routing, and circuit breaking across 30+ microservices. 2M+ requests/day with p99 latency under 8ms.',
    metrics: [
      { value: '2M+',    label: 'req/day' },
      { value: '<8ms',   label: 'p99 latency' },
      { value: '99.99%', label: 'uptime' },
      { value: '40%',    label: 'cost reduction' },
    ],
    links: [
      { label: '⎋ demo',   href: '#' },
      { label: '⌥ github', href: '#' },
    ],
  },

  {
    title: 'EventStream Engine',
    tags:  ['Python', 'Kafka', 'Postgres'],
    desc:  'Real-time pipeline ingesting 500K+ events/min from IoT devices to analytics dashboards. Schema evolution, dead-letter queues, full replay. Data loss: 4/month → 0.',
    metrics: [
      { value: '500K+', label: 'events/min' },
      { value: '0',     label: 'data loss incidents' },
      { value: '3ms',   label: 'avg processing' },
    ],
    links: [
      { label: '⎋ demo',   href: '#' },
      { label: '⌥ github', href: '#' },
    ],
  },

  {
    title: 'QueryOptimizer CLI',
    tags:  ['Rust', 'PostgreSQL', 'WASM'],
    desc:  'Open source CLI detecting N+1 patterns, missing indexes, and slow joins in PostgreSQL — generates actionable migration scripts. Used by 800+ developers.',
    metrics: [
      { value: '800+', label: 'developers' },
      { value: '1.2K', label: 'GitHub stars' },
      { value: '60%',  label: 'avg query speedup' },
    ],
    links: [
      { label: '⌥ github', href: '#' },
      { label: '⎋ docs',   href: '#' },
    ],
  },

];
