// ════════════════════════════════════════
// js/terminal.js
// Interactive terminal engine. Reads TERMINAL_FS from
// data/terminal-fs.js. You should not need to edit this
// file — edit data/terminal-fs.js to change file contents.
// ════════════════════════════════════════

'use strict';

(function initTerminal() {

  // ── DOM refs (elements are rendered by render.js before this runs) ──
  const tout     = document.getElementById('tout');
  const tin      = document.getElementById('tin');
  const thint    = document.getElementById('thint');
  const pPath    = document.getElementById('p-path');
  const tbarTitle = document.getElementById('tbar-title');

  // ── State ──
  let cwd        = ['portfolio'];
  let cmdHistory = [];
  let histIdx    = -1;

  // ── Filesystem helpers ──
  function walk(pathArr) {
    let node = TERMINAL_FS;
    for (const seg of pathArr) {
      if (!node[seg]) return null;
      const entry = node[seg];
      if (entry.type === 'dir') node = entry.children;
      else return entry;
    }
    return node;
  }

  function cwdNode() { return walk(cwd) || {}; }

  function cwdStr() {
    return cwd.length === 0 ? '~' : '~/' + cwd.join('/');
  }

  function resolve(p) {
    if (!p || p === '~') return [];
    let base;
    if (p.startsWith('~/'))    { base = []; p = p.slice(2); }
    else if (p.startsWith('/')) { base = []; p = p.slice(1); }
    else { base = [...cwd]; }
    p.split('/').filter(Boolean).forEach(seg => {
      if (seg === '.') return;
      if (seg === '..') { if (base.length) base.pop(); }
      else base.push(seg);
    });
    return base;
  }

  // ── Output helpers ──
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function addLine(cls, text) {
    const d = document.createElement('div');
    d.className = 'tl';
    d.innerHTML = `<span class="${esc(cls)}">${esc(text)}</span>`;
    tout.appendChild(d);
  }

  function addBlank() {
    const d = document.createElement('div');
    d.className = 'tb';
    tout.appendChild(d);
  }

  function addRaw(html) {
    const d = document.createElement('div');
    d.className = 'tl';
    d.innerHTML = html;
    tout.appendChild(d);
  }

  function addPromptEcho(raw) {
    addRaw(
      `<span class="cg">${esc(PERSONAL.username)}</span>` +
      `<span class="cd">:</span>` +
      `<span class="cb">${esc(cwdStr())}</span>` +
      `<span class="cd"> $ </span>` +
      `<span class="cw">${esc(raw)}</span>`
    );
  }

  function scrollEnd() { tout.scrollTop = tout.scrollHeight; }

  function updatePrompt() {
    const p = cwdStr();
    pPath.textContent = p;
    tbarTitle.textContent = PERSONAL.username + ': ' + p;
  }

  function renderContent(content) {
    addBlank();
    content.forEach(([cls, text]) => {
      if (cls === 'tb') { addBlank(); return; }
      addLine(cls, text);
    });
    addBlank();
  }

  function printTree(node, prefix) {
    if (!node || node.type === 'file') return;
    const entries = Object.entries(node);
    entries.forEach(([name, info], i) => {
      const last      = i === entries.length - 1;
      const branch    = last ? '└── ' : '├── ';
      const childPfx  = last ? '    ' : '│   ';
      if (info.type === 'dir') {
        addRaw(`<span class="cd">${esc(prefix + branch)}</span><span class="cb" style="font-weight:600">${esc(name)}/</span>`);
        printTree(info.children, prefix + childPfx);
      } else {
        addRaw(`<span class="cd">${esc(prefix + branch)}</span><span class="cw">${esc(name)}</span>`);
      }
    });
  }

  // ── Commands ──
  const CMDS = {

    help() {
      addBlank();
      addLine('ca', 'Available commands:');
      addBlank();
      [
        ['ls [path]',   'list directory'],
        ['cat <file>',  'read file contents'],
        ['cd <dir>',    'change directory  (cd .. to go up)'],
        ['pwd',         'print working directory'],
        ['tree',        'directory tree from here'],
        ['clear',       'clear terminal'],
        ['whoami',      'show identity'],
        ['date',        'current date & time'],
        ['echo <text>', 'print text'],
        ['help',        'this message'],
      ].forEach(([c, d]) =>
        addRaw(`  <span class="cg">${esc(c.padEnd(16))}</span><span class="cd">${esc(d)}</span>`)
      );
      addBlank();
      addLine('cd', 'Tab autocompletes commands & filenames · ↑↓ for history');
      addBlank();
    },

    ls(args) {
      const targetPath = args[0] ? resolve(args[0]) : [...cwd];
      const node = walk(targetPath);
      if (node === null) { addLine('cr', `ls: ${args[0]}: No such file or directory`); return; }
      if (node && node.type === 'file') { addLine('cw', args[0]); return; }
      const entries = Object.entries(node);
      if (!entries.length) { addLine('cd', '(empty)'); return; }
      addBlank();
      const row = document.createElement('div');
      row.className = 'tl';
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px 24px;';
      entries.forEach(([name, info]) => {
        const sp = document.createElement('span');
        if (info.type === 'dir') { sp.className = 'cb'; sp.style.fontWeight = '600'; sp.textContent = name + '/'; }
        else { sp.className = 'cw'; sp.textContent = name; }
        row.appendChild(sp);
      });
      tout.appendChild(row);
      addBlank();
    },

    cat(args) {
      if (!args[0]) { addLine('cr', 'cat: missing operand'); return; }
      const node = walk(resolve(args[0]));
      if (node === null) { addLine('cr', `cat: ${args[0]}: No such file or directory`); return; }
      if (!node.content) { addLine('cr', `cat: ${args[0]}: Is a directory`); return; }
      renderContent(node.content);
    },

    cd(args) {
      if (!args[0] || args[0] === '~' || args[0] === '~/') { cwd = []; updatePrompt(); return; }
      const target = resolve(args[0]);
      const node   = walk(target);
      if (node === null) { addLine('cr', `cd: ${args[0]}: No such file or directory`); return; }
      if (node && node.type === 'file') { addLine('cr', `cd: ${args[0]}: Not a directory`); return; }
      cwd = target;
      updatePrompt();
    },

    pwd()  { addLine('cw', cwdStr()); },

    tree() {
      addBlank();
      addLine('cb', cwdStr() + '/');
      printTree(cwdNode(), '');
      addBlank();
    },

    clear() { tout.innerHTML = ''; },

    whoami() {
      addBlank();
      addLine('cg', PERSONAL.handle);
      addBlank();
      addLine('cd', `Role   : ${PERSONAL.heroTagline.replace('# ','')}`);
      addLine('cd', 'Status : open to opportunities');
      addBlank();
    },

    date()        { addLine('cw', new Date().toString()); },
    echo(args)    { addLine('cw', args.join(' ')); },
  };

  // ── Tab completion ──
  let tabCache = { input: '', matches: [], idx: 0 };

  function getCompletions(val) {
    const parts = val.split(' ');
    if (parts.length === 1) {
      return Object.keys(CMDS).filter(c => c.startsWith(parts[0]));
    }
    const filePart = parts[parts.length - 1];
    const slashAt  = filePart.lastIndexOf('/');
    const dirPath  = slashAt >= 0 ? resolve(filePart.slice(0, slashAt)) : [...cwd];
    const prefix   = slashAt >= 0 ? filePart.slice(slashAt + 1) : filePart;
    const node = walk(dirPath);
    if (!node || node.type === 'file') return [];
    return Object.keys(node)
      .filter(n => n.startsWith(prefix))
      .map(m => {
        const base = parts.slice(0, -1).join(' ') + ' ';
        const dir  = slashAt >= 0 ? filePart.slice(0, slashAt + 1) : '';
        return base + dir + m;
      });
  }

  // ── Boot sequence ──
  function boot() {
    const mobile = window.innerWidth <= 600;
    const lines = mobile ? [
      ['cd', 'Last login: ' + new Date().toDateString()],
      ['tb', ''],
      ['cg', `  PORTFOLIO // ${PERSONAL.name}`],
      ['cd', '  ─────────────────────────'],
      ['cw', `  ${PERSONAL.heroTagline.replace('# ', '')}`],
      ['tb', ''],
      ['cd', '  Type "help" to see commands.'],
      ['cd', '  Tap below to start typing.'],
      ['tb', ''],
    ] : [
      ['cd', 'Last login: ' + new Date().toDateString() + ' on ttys001'],
      ['tb', ''],
      ['cg', '  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ '],
      ['cg', '  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗'],
      ['cg', '  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║'],
      ['cd', '  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║'],
      ['cd', '  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝'],
      ['cd', '  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝'],
      ['tb', ''],
      ['cw', `  ${PERSONAL.name}  ·  ${PERSONAL.heroTagline.replace('# ', '')}`],
      ['cd', '  Type "help" to see commands. Tab to autocomplete.'],
      ['tb', ''],
    ];

    let delay = 0;
    lines.forEach(([cls, text]) => {
      const d = delay;
      setTimeout(() => {
        if (cls === 'tb') addBlank(); else addLine(cls, text);
        scrollEnd();
      }, d);
      delay += (text.includes('█') || text.includes('╗') || text.includes('╚')) ? 55 : 22;
    });
  }

  // ── Input handler ──
  tin.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const val = tin.value;
      if (val !== tabCache.input) {
        tabCache.matches = getCompletions(val.trimStart());
        tabCache.idx     = 0;
        tabCache.input   = val;
      }
      if (!tabCache.matches.length) { thint.textContent = '  (no matches)'; return; }
      if (tabCache.matches.length === 1) {
        const comp  = tabCache.matches[0];
        const last  = comp.split(' ').pop();
        const tNode = walk(resolve(last));
        tin.value = (tNode && !tNode.type && !tNode.content) ? comp + '/' : comp;
        thint.textContent = '';
      } else {
        tin.value = tabCache.matches[tabCache.idx % tabCache.matches.length];
        thint.textContent = '  ' + tabCache.matches.join('   ');
        tabCache.idx++;
      }
      tabCache.input = tin.value;
      return;
    }

    if (e.key !== 'Tab') { thint.textContent = ''; tabCache.input = ''; }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!cmdHistory.length) return;
      if (histIdx < cmdHistory.length - 1) histIdx++;
      tin.value = cmdHistory[cmdHistory.length - 1 - histIdx];
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; tin.value = cmdHistory[cmdHistory.length - 1 - histIdx]; }
      else { histIdx = -1; tin.value = ''; }
      return;
    }

    if (e.key === 'Enter') {
      const raw = tin.value.trim();
      tin.value = '';
      histIdx   = -1;
      thint.textContent = '';
      addPromptEcho(raw);
      if (!raw) { scrollEnd(); return; }
      cmdHistory.push(raw);

      const tokens = raw.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
      const cmd    = tokens[0].toLowerCase();
      const args   = tokens.slice(1).map(a => a.replace(/^['"]|['"]$/g, ''));

      if (CMDS[cmd]) CMDS[cmd](args);
      else {
        addLine('cr', `${cmd}: command not found`);
        addLine('cd', 'Type "help" to see available commands.');
      }
      scrollEnd();
    }
  });

  // Click/tap shell to focus input
  document.getElementById('term-shell').addEventListener('click', () => tin.focus());

  // On mobile: scroll input into view after keyboard opens
  tin.addEventListener('focus', () => {
    if (window.matchMedia('(hover:none),(pointer:coarse)').matches) {
      setTimeout(() => tin.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 400);
    }
  });

  // Run boot after a short delay (lets page paint first)
  setTimeout(boot, 350);

})();
