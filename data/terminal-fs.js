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

    'readme.md': { type: 'file', content: [] },  // populated dynamically below

    'about.md': { type: 'file', content: [] },  // populated dynamically below

    'skills.md':  { type: 'file', content: [] },  // populated dynamically below
    'contact.md': { type: 'file', content: [] },  // populated dynamically below
    'projects':   { type: 'dir',  children: {} }, // populated dynamically below
    'experience': { type: 'dir',  children: {} }, // populated dynamically below

  }}
};

// ── Shared helper ──
function _slug(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.md'; }

// ── Auto-generate skills.md from data/skills.js ──
(function () {
  const lines = [['cg', '# skills.md — Tech Stack'], ['tb', '']];
  SKILLS.groups.forEach(g => {
    lines.push(['ca', g.title + ' :']);
    lines.push(['cw', '  ' + g.pills.join(' · ')]);
    lines.push(['tb', '']);
  });
  TERMINAL_FS['portfolio'].children['skills.md'].content = lines;
})();

// ── Auto-generate contact.md from data/personal.js ──
(function () {
  TERMINAL_FS['portfolio'].children['contact.md'].content = [
    ['cg', '# contact.md'],
    ['tb', ''],
    ['cw', 'Email    : ' + PERSONAL.email],
    ['cw', 'GitHub   : ' + PERSONAL.github],
    ['cw', 'LinkedIn : ' + PERSONAL.linkedin],
    ['tb', ''],
    ['cg', '● ' + PERSONAL.statusText],
    ['tb', ''],
    ['cd', 'Response time: usually within 24 hours.'],
  ];
})();

// ── Auto-generate projects/ from data/projects.js ──
(function () {
  const dir = TERMINAL_FS['portfolio'].children['projects'].children;
  PROJECTS.forEach(p => {
    const strip = s => s.replace(/<[^>]+>/g, '');
    const wrap  = s => strip(s).match(/.{1,52}(\s|$)/g).map(l => ['cw', l.trim()]);
    const content = [
      ['cg', '# ' + p.title + '  (' + p.year + ')'],
      ['ca', 'Stack : ' + p.tags.join(' · ')],
      ['tb', ''],
      ['cd', 'problem :'], ...wrap(p.problem),
      ['tb', ''],
      ['cd', 'built   :'], ...wrap(p.built),
      ['tb', ''],
      ['cg', 'impact  :'],
      ...p.metrics.map(m => ['cw', '  ' + m.value + '  ' + m.label]),
    ];
    const validLinks = p.links.filter(l => l.href !== '#');
    if (validLinks.length) {
      content.push(['tb', ''], ['cd', 'links   :']);
      validLinks.forEach(l => content.push(['lk', l.href]));
    }
    dir[_slug(p.title)] = { type: 'file', content };
  });
})();

// ── Auto-generate experience/ from data/experience.js ──
(function () {
  const dir = TERMINAL_FS['portfolio'].children['experience'].children;
  EXPERIENCE.forEach(e => {
    const parts   = e.company.split('—');
    const company = parts[0].trim();
    const location = parts[1] ? parts[1].trim() : '';
    const content = [
      ['cg', '# ' + company],
      ['ca', 'Role   : ' + e.role],
      ['cd', 'Period : ' + e.period + (location ? ' · ' + location : '')],
      ['tb', ''],
      ...e.points.map(pt => ['cw', '→ ' + pt.replace(/<[^>]+>/g, '')]),
    ];
    dir[_slug(company)] = { type: 'file', content };
  });
})();

// ── Auto-generate about.md from data/about.js + data/personal.js ──
(function () {
  const bioText = ABOUT.bio.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const role    = PERSONAL.heroTagline.replace('# ', '');
  TERMINAL_FS['portfolio'].children['about.md'].content = [
    ['cg', '# about.md — ' + PERSONAL.name],
    ['tb', ''],
    ['cw', 'Name   : ' + PERSONAL.name],
    ['cw', 'Role   : ' + role],
    ['cw', 'Based  : ' + ABOUT.location],
    ['cw', 'Focus  : ' + ABOUT.focus],
    ['tb', ''],
    ...bioText.match(/.{1,55}(\s|$)/g).map(line => ['cd', line.trim()]),
  ];
})();

// ── Auto-generate readme.md from the actual filesystem structure ──
// Add files/dirs to TERMINAL_FS above and this updates automatically.
(function () {
  const dir   = TERMINAL_FS['portfolio'].children;
  const files = Object.keys(dir).filter(k => dir[k].type === 'file' && k !== 'readme.md');
  const dirs  = Object.keys(dir).filter(k => dir[k].type === 'dir');
  dir['readme.md'].content = [
    ['cg', '# readme.md'],
    ['tb', ''],
    ['cw', "Welcome to Sai Kumar's portfolio terminal."],
    ['tb', ''],
    ['cd', 'Navigate using standard Unix shell commands.'],
    ['tb', ''],
    ['ca', 'Files:'],
    ['cw', '  ' + files.join('    ')],
    ['tb', ''],
    ['ca', 'Directories:'],
    ['cw', '  ' + dirs.map(d => d + '/').join('   ')],
    ['tb', ''],
    ['cd', 'Try: ls, cat about.md, cd projects, tree'],
    ['cd', 'Tab autocompletes · ↑↓ scrolls history'],
  ];
})();
