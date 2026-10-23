const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
for(const base of ['/', '/digital-garden/', '/%E5%8D%9A%E5%AE%A2/']){
 const store=new Map(); const context=vm.createContext({URL,URLSearchParams,console,document:{currentScript:{src:`https://example.com${base}js/main.js?v=abc`},addEventListener(){}},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},learningNotes:[{id:'one',md:'learning/courses/one.md',questions:[{id:'q1',text:'测试？'}]}],learningSubjects:[],sourceMappings:{}});
 for(const file of ['js/main.js','js/learning.js','js/markdown.js','js/vendor/marked.min.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 const run=x=>vm.runInContext(x,context);
 assert.equal(run('getBasePath()'),base);
 assert.equal(run("assetPath('learning/中文.md')"),base+'learning/%E4%B8%AD%E6%96%87.md');
 assert.equal(run("articleHref({md:'learning/courses/one.md'})"),base+'article.html?md=learning%2Fcourses%2Fone.md');
 const meta=run('parseFrontmatter('+JSON.stringify('---\r\ntitle: 测试\r\ntags: [Java, 中文]\r\n---\r\n# 正文')+')');assert.equal(meta.meta.title,'测试');
 const html=run('renderMarkdown('+JSON.stringify('## 正文\n\n| A | B |\n|---|---|\n|1|2|\n\n$A_B + \\alpha$\n\n```java\nint n = 1;\n```')+')');
 assert.match(html,/<table>/);assert.match(html,/language-java/);assert.match(html,/math-source/);assert.doesNotMatch(html,/<em>B/);
 assert.equal(run("headingSlug('1. 概念：IoC 与 DI')"),'1-概念ioc-与-di');
 assert.equal(run("highlightText('<b>a+b</b>','a+b')"),'&lt;b&gt;<mark>a+b</mark>&lt;/b&gt;');
 run("saveReadingState({'one':{read:true,visited:123}})");assert.equal(run("getReadingState().one.read"),true);
 const imported=run('validatedRecords('+JSON.stringify({version:2,reading:{one:{read:true,ratio:99,visited:1},bad:{read:true}},review:{q1:true,bad:true},preferences:{size:20,line:2,width:9999}})+')');
 assert.equal(imported.reading.one.ratio,1);assert.equal(imported.reading.bad,undefined);assert.equal(imported.review.bad,undefined);assert.equal(imported.preferences.width,undefined);
 assert.throws(()=>run('validatedRecords({version:1})'));
}
{
 const motion={matches:false},wheels=[1,-22/14].map(r=>({dataset:{ratio:r,phase:0},transform:'',setAttribute(k,v){if(k==='transform')this.transform=v;}}));
 const doc={hidden:false,addEventListener(){},querySelectorAll(){return wheels;}};
 const ctx=vm.createContext({window:{matchMedia:()=>motion},document:doc,performance:{now:()=>1000}});
 vm.runInContext(fs.readFileSync(path.join(root,'js/mechanism.js'),'utf8'),ctx);
 const advance=energy=>{for(let i=0;i<20;i++)vm.runInContext(`window.updateMechanisms({playing:true,energy:${energy},dt:.05})`,ctx);};
 const rotation=i=>Number(wheels[i].transform.match(/rotate\(([^)]+)\)/)[1]);advance(0);const low=rotation(0);advance(1);assert.ok(rotation(0)-low>low);assert.ok(Math.abs(rotation(1)/rotation(0)+22/14)<1e-9);
 let before=wheels[0].transform;motion.matches=true;advance(1);assert.equal(wheels[0].transform,before);motion.matches=false;doc.hidden=true;advance(1);assert.equal(wheels[0].transform,before);
}
{
 const events={},location=new URL('https://example.com/digital-garden/article.html?id=one');let fetches=0;
 const ctx=vm.createContext({URL,location,history:{},document:{addEventListener(){}},window:{addEventListener:(name,handler)=>events[name]=handler},fetch:async()=>{fetches++;return new Promise(()=>{});},console});
 vm.runInContext(fs.readFileSync(path.join(root,'js/router.js'),'utf8'),ctx);vm.runInContext('initSoftRouter()',ctx);location.hash='chapter';events.popstate();assert.equal(fetches,0);location.search='?id=two';events.popstate();assert.equal(fetches,1);
}
for(const name of fs.readdirSync(path.join(root,'js')).filter(x=>x.endsWith('.js')))new vm.Script(fs.readFileSync(path.join(root,'js',name),'utf8'),{filename:name});
console.log('Frontend checks passed: subpaths, Markdown/math, anchors, safe search, record import, hash navigation, gear ratios/RMS response/reduced motion, JS syntax.');
