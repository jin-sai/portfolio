// ════════════════════════════════════════
// data/terminal-fs.js
// This is the virtual filesystem inside the interactive terminal.
// Edit the content arrays to change what visitors see when they
// run  cat about.md  or  ls projects/  in the terminal.
//
// Line format:  ['COLOR_CODE', 'text']
// Color codes:
//   'cg' = green    'ca' = amber    'cr' = red
//   'cb' = blue     'cw' = white    'cd' = dim/grey
//   'tb' = blank spacer line (text is ignored)
// ════════════════════════════════════════

const TERMINAL_FS = {
  'portfolio': { type: 'dir', children: {

    'readme.md': { type: 'file', content: [
      ['cg', '# readme.md'],
      ['tb', ''],
      ['cw', "Welcome to Alex Rowe's portfolio terminal."],
      ['tb', ''],
      ['cd', 'Navigate using standard Unix shell commands.'],
      ['tb', ''],
      ['ca', 'Files:'],
      ['cw', '  about.md    skills.md    contact.md'],
      ['tb', ''],
      ['ca', 'Directories:'],
      ['cw', '  projects/   experience/'],
      ['tb', ''],
      ['cd', 'Try: ls, cat about.md, cd projects, tree'],
      ['cd', 'Tab autocompletes · ↑↓ scrolls history'],
    ]},

    'about.md': { type: 'file', content: [
      ['cg', '# about.md — Alex Rowe'],
      ['tb', ''],
      ['cw', 'Name   : Alex Rowe'],
      ['cw', 'Role   : Senior Backend Engineer'],
      ['cw', 'Based  : San Francisco, CA'],
      ['cw', 'Focus  : Distributed systems · APIs · Cloud Infra'],
      ['tb', ''],
      ['cd', 'I build the invisible infrastructure that makes'],
      ['cd', 'products fast, reliable, and resilient.'],
      ['cd', '6+ years shipping systems that scale to millions.'],
    ]},

    'skills.md': { type: 'file', content: [
      ['cg', '# skills.md — Tech Stack'],
      ['tb', ''],
      ['ca', 'Languages   :'], ['cw', '  Go · Python · TypeScript · Rust · SQL'],
      ['tb', ''],
      ['ca', 'Databases   :'], ['cw', '  PostgreSQL · Redis · MongoDB · ClickHouse'],
      ['tb', ''],
      ['ca', 'Infra       :'], ['cw', '  AWS · GCP · Kubernetes · Docker · Terraform'],
      ['tb', ''],
      ['ca', 'Messaging   :'], ['cw', '  Kafka · RabbitMQ · NATS · SQS'],
      ['tb', ''],
      ['ca', 'APIs        :'], ['cw', '  REST · GraphQL · gRPC · WebSockets'],
    ]},

    'contact.md': { type: 'file', content: [
      ['cg', '# contact.md'],
      ['tb', ''],
      ['cw', 'Email    : alex@example.com'],
      ['cw', 'GitHub   : github.com/alexrowe'],
      ['cw', 'LinkedIn : linkedin.com/in/alexrowe'],
      ['tb', ''],
      ['cg', '● Open to senior / staff / founding eng roles'],
      ['tb', ''],
      ['cd', 'Response time: usually within 24 hours.'],
    ]},

    'projects': { type: 'dir', children: {

      'flux-gateway.md': { type: 'file', content: [
        ['cg', '# FluxGateway'],
        ['ca', 'Stack : Go · Redis · gRPC · Kubernetes'],
        ['tb', ''],
        ['cw', 'API gateway: auth, rate limiting, circuit breaking'],
        ['cw', 'across 30+ microservices.'],
        ['tb', ''],
        ['cg', 'Metrics:'],
        ['cw', '  Throughput : 2M+ req/day'],
        ['cw', '  p99        : < 8ms'],
        ['cw', '  Uptime     : 99.99%'],
        ['cw', '  Cost saved : 40%'],
        ['tb', ''],
        ['cb', '  github.com/alexrowe/flux-gateway'],
      ]},

      'eventstream.md': { type: 'file', content: [
        ['cg', '# EventStream Engine'],
        ['ca', 'Stack : Python · Kafka · PostgreSQL · AWS'],
        ['tb', ''],
        ['cw', 'Real-time pipeline: 500K+ events/min,'],
        ['cw', 'schema evolution, DLQs, full replay.'],
        ['tb', ''],
        ['cg', 'Metrics:'],
        ['cw', '  Throughput : 500K+ events/min'],
        ['cw', '  Data loss  : 0 incidents (was 4/mo)'],
        ['cw', '  Latency    : 3ms avg'],
        ['tb', ''],
        ['cb', '  github.com/alexrowe/eventstream'],
      ]},

      'query-optimizer.md': { type: 'file', content: [
        ['cg', '# QueryOptimizer CLI'],
        ['ca', 'Stack : Rust · PostgreSQL · WASM'],
        ['tb', ''],
        ['cw', 'CLI detecting N+1, missing indexes, slow joins.'],
        ['cw', 'Generates migration scripts. Runs in CI as WASM.'],
        ['tb', ''],
        ['cg', 'Metrics:'],
        ['cw', '  Users    : 800+ developers'],
        ['cw', '  Stars    : 1.2K ⭐'],
        ['cw', '  Speedup  : 60% avg'],
        ['tb', ''],
        ['cb', '  github.com/alexrowe/query-optimizer'],
      ]},

    }},

    'experience': { type: 'dir', children: {

      'meridian-labs.md': { type: 'file', content: [
        ['cg', '# Meridian Labs'],
        ['ca', 'Role   : Senior Backend Engineer'],
        ['cd', 'Period : 2022 — present · San Francisco'],
        ['tb', ''],
        ['cw', '→ Deploy time 4h → 8min (monolith→microservices)'],
        ['cw', '→ 99.95% SLA, 2M+ DAUs on multi-region AWS'],
        ['cw', '→ Mentored 5 engineers; cut re-work 35%'],
        ['cw', '→ $180K/yr cloud savings'],
      ]},

      'vantage-systems.md': { type: 'file', content: [
        ['cg', '# Vantage Systems'],
        ['ca', 'Role   : Backend Engineer'],
        ['cd', 'Period : 2020 — 2022 · Remote'],
        ['tb', ''],
        ['cw', '→ Bidding engine: 50K concurrent, sub-10ms'],
        ['cw', '→ 200M events/day pipeline → ClickHouse'],
        ['cw', '→ GDPR deletion: 12M user records'],
      ]},

      'stacknode.md': { type: 'file', content: [
        ['cg', '# Stacknode Inc.'],
        ['ca', 'Role   : Software Engineer'],
        ['cd', 'Period : 2018 — 2020 · Bengaluru, India'],
        ['tb', ''],
        ['cw', '→ REST & GraphQL: 3M+ req/day'],
        ['cw', '→ Redis cache: 68% faster responses'],
        ['cw', '→ CLI tooling for 40-person eng org'],
      ]},

    }},

  }}
};
