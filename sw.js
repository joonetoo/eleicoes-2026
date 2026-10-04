/* Apuração 2026 — guarda só o "esqueleto" (página, fotos, ícones, fonte) pra abrir rápido.
   Os números do TSE NUNCA são guardados aqui: sempre vêm da rede.
   Projeto próprio (repositório eleicoes-2026), separado do Ritmo. */
const CACHE='eleicoes-2026-v2';
const ESQUELETO=['./','manifest.json','icon-192.png','favicon.png'];
self.addEventListener('install',ev=>{ev.waitUntil(caches.open(CACHE).then(c=>c.addAll(ESQUELETO)).catch(()=>{}).then(()=>self.skipWaiting()));});
self.addEventListener('activate',ev=>{ev.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('apuracao-')&&k!==CACHE)await caches.delete(k);await self.clients.claim();})());});
self.addEventListener('fetch',ev=>{
  const req=ev.request; if(req.method!=='GET') return;
  const u=new URL(req.url), escopo=new URL(self.registration.scope);
  if(u.hostname.endsWith('tse.jus.br')) return; // dados oficiais: direto da rede, sem cópia
  const meu=u.origin===escopo.origin&&u.pathname.startsWith(escopo.pathname);
  const fonte=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(!meu&&!fonte) return;
  if(req.mode==='navigate'){ // página: rede primeiro (pega versão nova), cópia só sem internet
    ev.respondWith(fetch(req).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put('./',c));}return r;}).catch(()=>caches.match('./')));
    return;
  }
  ev.respondWith(caches.open(CACHE).then(async c=>{const h=await c.match(req);const rede=fetch(req).then(r=>{if(r.ok||r.type==='opaque')c.put(req,r.clone());return r;});if(h){ev.waitUntil(rede.catch(()=>{}));return h;}return rede;}));
});
