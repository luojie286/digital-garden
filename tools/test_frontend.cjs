const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

for (const base of ['/', '/my-blog/', '/%E5%8D%9A%E5%AE%A2/']) {
  const storage = new Map();
  const context = vm.createContext({URL, URLSearchParams, console,
    document: {currentScript: {src: `https://example.com${base}js/main.js`}, addEventListener() {}},
    localStorage: {getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value)},
  });
  for (const file of ['js/main.js', 'js/markdown.js', 'js/learning.js', 'js/vendor/marked.min.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, {filename: file});
  }
  const run = expression => vm.runInContext(expression, context);
  assert.equal(run('getBasePath()'), base);
  assert.equal(run("assetPath('learning/java/01-基础.md')"), base + 'learning/java/01-%E5%9F%BA%E7%A1%80.md');
  assert.equal(run("articleHref({md:'learning/java/20-volatile.md'})"), base + 'article.html?md=learning%2Fjava%2F20-volatile.md');
  assert.equal(run("articleHref({url:'https://example.org/project'})"), 'https://example.org/project');
  const frontmatter = run(`parseFrontmatter(${JSON.stringify('---\r\ntitle: 测试\r\ntags: [Java, 中文]\r\n---\r\n# 正文')})`);
  assert.equal(frontmatter.meta.title, '测试');
  assert.equal(frontmatter.body, '# 正文');
  const html = run(`renderMarkdown(${JSON.stringify('# 标题\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\n$A_B + \\alpha$\n\n```java\nint n = 1;\n```')})`);
  assert.match(html, /<table>/);
  assert.match(html, /class="language-java"/);
  assert.match(html, /class="math-source" data-display="false">A_B \+ \\alpha<\/span>/);
  assert.doesNotMatch(html, /A<em>B/);
  run("saveReadingState({'note.md': {read:true, visited:123}})");
  assert.equal(run("getReadingState()['note.md'].read"), true);
}

for (const name of fs.readdirSync(path.join(root, 'js')).filter(n => n.endsWith('.js'))) {
  new vm.Script(fs.readFileSync(path.join(root, 'js', name), 'utf8'), {filename: name});
}
console.log('Frontend checks passed: root and repository paths, metadata, Markdown, formulas, reading state, JS syntax.');
