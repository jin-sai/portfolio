// ════════════════════════════════════════
// data/skills.js
// Edit this file to update your tech stack.
// ════════════════════════════════════════

const SKILLS = {

  // ── Pill groups ──
  // Each entry renders as a card with a title and a row of pills.
  groups: [
    {
      title: 'languages & frameworks',
      pills: ['Java', 'Spring Boot', 'Python', 'C', 'C++'],
    },
    {
      title: 'devops & tools',
      pills: ['Kubernetes', 'Docker', 'Helm', 'Argo', 'Git'],
    },
    {
      title: 'data & messaging',
      pills: ['Kafka', 'OpenSearch', 'Elasticsearch'],
    },
    {
      title: 'software development',
      pills: ['Microservices', 'System Design', 'CI/CD', 'Agile', 'TDD'],
    },
    {
      title: 'observability',
      pills: ['Prometheus', 'Grafana'],
    },
  ],

  // ── Proficiency bars ──
  // Each entry shows a labelled progress bar (value 0–100).
  proficiency: [
    { label: 'Java / Spring Boot', value: 95 },
    { label: 'Kafka / Messaging',  value: 90 },
    { label: 'Kubernetes / Docker', value: 88 },
    { label: 'System Design',      value: 85 },
  ],

};