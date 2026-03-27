// ════════════════════════════════════════
// data/experience.js
// Edit this file to update your work history.
// Jobs are shown newest-first in a timeline.
// ════════════════════════════════════════

const EXPERIENCE = [

  {
    period:  'Aug 2021 — Apr 2025',
    role:    'Software Engineer',
    company: 'Cisco — Bengaluru, India',
    points: [
      'Designed and developed <strong>25+ event-driven microservices</strong> using Java, Spring Boot and TDD, processing <strong>4B+ Webex calling events daily</strong>',
      'Deployed across <strong>4 distributed Kubernetes clusters</strong> using Helm and Argo, ensuring 99.99% uptime and low-latency data pipelines',
      'Implemented observability with Prometheus and Grafana, supporting a strict <strong>5-minute SLA</strong> for customer-facing reports',
      'Built a recovery tool to reprocess failed OpenSearch records via Kafka, recovering <strong>10M+ critical reports</strong> lost to Kafka lag',
      'Migrated backend systems to Kubernetes, transitioning from Elasticsearch to OpenSearch and containerizing with Docker and Helm',
    ],
  },

  {
    period:  'Feb 2019 — Jul 2019',
    role:    'Engineering Officer',
    company: 'Central Power Research Institute — Bengaluru, India',
    points: [
      'Led a team of 1 trainee and 4 contract engineers to maintain and optimize IT infrastructure',
      'Streamlined issue resolution and ensured high system uptime across the organization',
    ],
  },

];