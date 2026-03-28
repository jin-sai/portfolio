// ════════════════════════════════════════
// data/experience.js
// Edit this file to update your work history.
// Jobs are shown newest-first.
// ════════════════════════════════════════

const EXPERIENCE = [

  {
    period:   'Aug 2021 – Apr 2025',
    role:     'Software Engineer',
    company:  'Cisco',
    location: 'Bengaluru, India',

    story: `For nearly 4 years at Cisco, I worked on the backend systems that power Webex calling analytics —
building and maintaining the pipelines that process billions of events daily. Most of my time was
spent making sure these systems were reliable, observable and recoverable when things went wrong.`,

    metrics: [
      { value: '4B+',    label: 'Webex calling events processed daily' },
      { value: '25+',    label: 'Event-driven microservices built' },
      { value: '99.99%', label: 'Uptime across 4 global Kubernetes clusters' },
      { value: '10M+',   label: 'Critical records recovered via Kafka recovery tool' },
      { value: '5 min',  label: 'SLA enforced for customer-facing reports' },
      { value: '4',      label: 'Geographically distributed clusters managed' },
    ],

    spotlight: {
      title: 'The Kafka Recovery Tool',
      desc:  'A Kafka lag spike caused over 10 million customer-facing media reports to go missing. I built a recovery tool that fetched the failed records from OpenSearch and reprocessed them back through Kafka — regenerating every lost report without any manual intervention.',
    },
  },

  {
    period:   'Feb 2019 – Jul 2019',
    role:     'Engineering Officer',
    company:  'Central Power Research Institute',
    location: 'Bengaluru, India',
    oneliner: 'Led a small team maintaining IT infrastructure and ensuring high system uptime across the organization.',
  },

];