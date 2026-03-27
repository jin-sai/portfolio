// ════════════════════════════════════════
// data/skills.js
// Edit this file to update your tech stack.
// ════════════════════════════════════════

const SKILLS = {

  // ── Pill groups ──
  // Each entry renders as a card with a title and a row of pills.
  groups: [
    {
      title: 'languages',
      pills: ['Go', 'Python', 'TypeScript', 'Rust', 'SQL', 'Bash'],
    },
    {
      title: 'databases',
      pills: ['PostgreSQL', 'Redis', 'MongoDB', 'Cassandra', 'ClickHouse'],
    },
    {
      title: 'infrastructure',
      pills: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      title: 'messaging',
      pills: ['Kafka', 'RabbitMQ', 'NATS', 'SQS'],
    },
    {
      title: 'apis & protocols',
      pills: ['REST', 'GraphQL', 'gRPC', 'WebSockets'],
    },
  ],

  // ── Proficiency bars ──
  // Each entry shows a labelled progress bar (value 0–100).
  proficiency: [
    { label: 'System Design', value: 95 },
    { label: 'Go / Python',   value: 92 },
    { label: 'Cloud Infra',   value: 88 },
    { label: 'Databases',     value: 85 },
  ],

};
