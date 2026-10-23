let navigationEpoch=0;
let currentRoute=location.pathname+location.search;
function normalizePageUrl(href){const u=new URL(href,location.href);if(u.pathname.endsWith('/'))u.pathname+='index.html';return u.pathname+u.search+u.hash;}
function isInternalPageLink(href){try{const u=new URL(href,location.href);return !href.startsWith('#')&&u.origin===location.origin&&u.pathname.startsWith(getBasePath())&&(u.pathname.endsWith('.html')||u.pathname.endsWith('/'));}catch{return false;}}
async function navigateTo(href,{fromPop=false}={}){
  const epoch=++navigationEpoch,path=normalizePageUrl(href);
  try{const res=await fetch(path);if(!res.ok)throw new Error('HTTP '+res.status);const doc=new DOMParser().parseFromString(await res.text(),'text/html'),next=doc.getElementById('app');if(!next)throw new Error('Page missing');if(epoch!==navigationEpoch)return;disposePage();document.getElementById('app').replaceWith(next);if(!fromPop)history.pushState({},'',path);document.body.classList.remove('nav-open');window.scrollTo(0,0);bootstrapPage();document.getElementById('app').focus({preventScroll:true});}catch(e){if(epoch===navigationEpoch){showToast('页面暂时无法打开，请稍后再试');console.error(e);}}
}
function initSoftRouter(){history.scrollRestoration='manual';document.addEventListener('click',e=>{if(e.defaultPrevented||e.button||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const a=e.target.closest('a[href]');if(!a||a.target==='_blank'||a.hasAttribute('download')||!isInternalPageLink(a.getAttribute('href')))return;e.preventDefault();navigateTo(a.href);});window.addEventListener('popstate',()=>{if(currentRoute!==location.pathname+location.search)navigateTo(location.href,{fromPop:true});});}
