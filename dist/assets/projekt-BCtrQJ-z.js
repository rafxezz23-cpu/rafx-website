import{b as c,c as w,i as k,a as z,s as E}from"./extensions-DSEazcKt.js";const j="./",m=t=>t.startsWith("http")?t:`${j}${t}`,r=t=>document.querySelector(t),y=matchMedia("(prefers-reduced-motion: reduce)").matches,L=new URLSearchParams(location.search).get("id"),e=c.find(t=>t.id===L)??c[0],_=c.indexOf(e),P=c[(_-1+c.length)%c.length],A=c[(_+1)%c.length],x=document.documentElement;x.style.setProperty("--acc",e.acc);x.style.setProperty("--accink",e.ink);x.style.setProperty("--color-ink","#050505");x.style.setProperty("--color-panel","#0b0b0b");x.style.setProperty("--color-edge","#1c1c1c");document.title=`${e.name} — rafx`;document.body.style.background=`radial-gradient(1100px 600px at 80% -10%, color-mix(in srgb, ${e.acc} 10%, transparent), transparent 60%), #050505`;const I=e.id==="jachu"||e.id==="vynx",N=e.url?e.cta.includes("Chrome")?"download":"external-link":"clock",O=e.kind.startsWith("Wtyczka"),R=`
  <div class="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_120%,rgb(255_43_43/.45),transparent_60%),#0a0303]">
    <div class="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_43_43/.15)_1px,transparent_1px),linear-gradient(90deg,rgb(255_43_43/.15)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
    <div class="relative text-center">
      <p class="font-display text-6xl font-extrabold text-white drop-shadow-[0_0_30px_#ff2b2b] sm:text-8xl">${e.name}</p>
      <p class="font-mono mt-5 inline-flex items-center gap-2 text-sm tracking-[.3em] text-red uppercase"><span class="size-2 animate-ping rounded-full bg-red"></span>w budowie</p>
    </div>
  </div>`;r("#page").innerHTML=`
  <!-- HERO -->
  <header class="relative mx-auto max-w-6xl px-4 pt-32 pb-12">
    <div class="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--acc)_22%,transparent),transparent_70%)]"></div>
    <p class="rv inline-flex items-center gap-2.5 rounded-full border border-[color-mix(in_srgb,var(--acc)_30%,transparent)] bg-[color-mix(in_srgb,var(--acc)_8%,#0b0b0b)] py-1.5 pr-4 pl-1.5 text-sm font-medium text-white">
      <span class="grid size-7 place-items-center rounded-full bg-[var(--acc)] text-[var(--accink)]"><i data-lucide="${O?"puzzle":"globe"}" class="size-4"></i></span>${e.kind}
    </p>
    <div class="mt-6 flex flex-wrap items-end justify-between gap-8">
      <div class="rv flex items-center gap-5">
        ${e.icon?`<img src="${m(e.icon)}" alt="" class="size-20 ${I?"rounded-full":"rounded-3xl"} shadow-[0_20px_60px_-15px_var(--acc)] sm:size-24" />`:""}
        <div>
          <h1 class="font-display text-[clamp(3rem,9vw,6.5rem)] leading-[.9] font-extrabold tracking-[-.05em] text-white [font-stretch:85%]">${e.name}</h1>
          <p class="mt-2 text-neutral-400">${e.meta}</p>
        </div>
      </div>
      <a ${e.url?`href="${e.url}" target="_blank"`:'aria-disabled="true"'} class="rv inline-flex items-center gap-2 rounded-2xl bg-[var(--acc)] px-7 py-4 font-bold text-[var(--accink)] shadow-[0_0_50px_-12px_var(--acc)] transition hover:scale-[1.03] ${e.url?"":"pointer-events-none opacity-50"}">
        <i data-lucide="${N}" class="size-5"></i> ${e.cta}
      </a>
    </div>
    <p class="rv mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300">${e.desc}</p>
    <div class="rv mt-6 flex flex-wrap gap-2">${e.tags.map(t=>`<span class="rounded-full border border-[color-mix(in_srgb,var(--acc)_25%,#262626)] bg-white/[.03] px-3 py-1 text-xs text-neutral-300">${t}</span>`).join("")}</div>
  </header>

  <!-- GALERIA -->
  <section class="mx-auto max-w-6xl px-4">
    <div class="rv overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--acc)_25%,#262626)] bg-black p-2 shadow-[0_40px_120px_-30px_color-mix(in_srgb,var(--acc)_40%,transparent)] sm:p-3">
      <div class="flex items-center gap-2 px-2 pb-2.5 sm:px-3">
        <span class="size-3 rounded-full bg-[#ff5f57]"></span><span class="size-3 rounded-full bg-[#febc2e]"></span><span class="size-3 rounded-full bg-[#28c840]"></span>
        <span class="font-mono ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-neutral-500">${e.url?e.url.replace(/^https?:\/\//,"").slice(0,60):e.name}</span>
      </div>
      <div id="frame" class="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-2xl bg-ink">
        ${e.shots.length?`
        <img id="shot" alt="" draggable="false" class="size-full object-contain select-none" />
        <button id="prev" aria-label="Poprzednie" class="absolute top-1/2 left-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-[var(--acc)] hover:text-[var(--accink)]"><i data-lucide="chevron-left" class="size-6"></i></button>
        <button id="next" aria-label="Następne" class="absolute top-1/2 right-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-[var(--acc)] hover:text-[var(--accink)]"><i data-lucide="chevron-right" class="size-6"></i></button>
        <span id="count" class="font-mono absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white/80 backdrop-blur"></span>`:R}
      </div>
    </div>
    <div id="thumbs" class="mt-4 flex justify-center gap-3 overflow-x-auto pb-2"></div>
  </section>

  <!-- O PROJEKCIE -->
  <section class="mx-auto grid max-w-6xl gap-12 px-4 pt-28 lg:grid-cols-[1.2fr_1fr]">
    <div class="rv">
      <p class="font-mono text-xs tracking-[.3em] text-[var(--acc)] uppercase">O projekcie</p>
      <h2 class="h2">Co to jest?</h2>
      ${e.about.map(t=>`<p class="mt-5 text-lg leading-relaxed text-neutral-400">${t}</p>`).join("")}
    </div>
    <div class="feat rv self-start rounded-3xl border p-7">
      <p class="font-mono text-xs tracking-[.3em] text-neutral-500 uppercase">Technologie</p>
      <div class="mt-5 flex flex-wrap gap-2">${e.stack.map(t=>`<span class="rounded-xl border border-[color-mix(in_srgb,var(--acc)_30%,#262626)] bg-[color-mix(in_srgb,var(--acc)_8%,transparent)] px-3.5 py-2 text-sm font-medium text-white">${t}</span>`).join("")}</div>
      <div class="mt-7 grid grid-cols-2 gap-3 border-t border-edge pt-6">
        <div><p class="text-xs text-neutral-500">Typ</p><p class="mt-1 font-semibold text-white">${e.kind}</p></div>
        <div><p class="text-xs text-neutral-500">Status</p><p class="mt-1 font-semibold ${e.url?"text-[#23a55a]":"text-red"}">${e.url?"● Online":"● W budowie"}</p></div>
        <div class="col-span-2"><p class="text-xs text-neutral-500">Autor</p><p class="mt-1 flex items-center gap-2 font-semibold text-white"><img src="https://cdn.discordapp.com/avatars/790196690514477106/af7c12125d058426a7f285b6b23beae4.png?size=32" class="size-5 rounded-full" alt="" />rafx</p></div>
      </div>
    </div>
  </section>

  <!-- FUNKCJE -->
  <section class="mx-auto max-w-6xl px-4 pt-28">
    <div class="rv mb-10">
      <p class="font-mono text-xs tracking-[.3em] text-[var(--acc)] uppercase">Funkcje</p>
      <h2 class="h2">Co potrafi?</h2>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 ${e.features.length%3===0||e.features.length>3?"lg:grid-cols-3":""}">
      ${e.features.map(([t,a,s],n)=>`
      <article class="feat card rv group ${n===0&&e.features.length%3===2&&e.features.length>2?"lg:col-span-2":""} ${n===0&&e.features.length%3===1&&e.features.length>3?"lg:col-span-3":""}">
        <div class="flex items-center justify-between">
          <span class="grid size-12 place-items-center rounded-2xl border border-[color-mix(in_srgb,var(--acc)_30%,transparent)] bg-[color-mix(in_srgb,var(--acc)_10%,transparent)] text-[var(--acc)] transition duration-500 group-hover:scale-110 group-hover:rotate-6"><i data-lucide="${t}" class="size-6"></i></span>
          <span class="font-mono text-xs text-neutral-600">0${n+1}</span>
        </div>
        <h3 class="font-display mt-6 text-xl font-bold text-white">${a}</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-400">${s}</p>
      </article>`).join("")}
    </div>
  </section>

  <!-- INNE PROJEKTY -->
  <section class="mx-auto max-w-6xl px-4 py-28">
    <div class="grid gap-4 sm:grid-cols-2">
      ${[["Poprzedni",P,"arrow-left"],["Następny",A,"arrow-right"]].map(([t,a,s])=>{const n=a;return`
      <a href="./projekt.html?id=${n.id}" style="--acc:${n.acc}" class="feat card rv group flex items-center gap-5 ${t==="Następny"?"sm:flex-row-reverse sm:text-right":""}">
        <span class="grid size-12 shrink-0 place-items-center rounded-full border border-white/10 text-neutral-400 transition group-hover:border-[var(--acc)] group-hover:text-[var(--acc)]"><i data-lucide="${s}" class="size-5"></i></span>
        ${n.icon?`<img src="${m(n.icon)}" alt="" class="size-14 ${n.id==="jachu"||n.id==="vynx"?"rounded-full":"rounded-2xl"}" />`:""}
        <div class="min-w-0"><p class="text-xs text-neutral-500">${t} projekt</p><p class="font-display truncate text-2xl font-bold text-white">${n.name}</p></div>
      </a>`}).join("")}
    </div>
  </section>`;w({icons:k});requestAnimationFrame(()=>r("#page").classList.remove("opacity-0"));if(e.shots.length){const t=r("#shot"),a=e.shots.length;let s=-1,n=!1;const b="cubic-bezier(.16,1,.3,1)",l=(o,i=0)=>{const d=(o+a)%a;if(n||d===s)return;s=d;const g=m(e.shots[s]);if(i===0||y)t.src=g,y||t.animate([{opacity:0,transform:"scale(1.05)",filter:"blur(10px)"},{opacity:1,transform:"none",filter:"none"}],{duration:800,easing:b});else{n=!0;const u=new Image;u.src=g;const p=t.animate([{opacity:1,transform:"none",filter:"none"},{opacity:0,transform:`translateX(${-i*10}%) scale(.96)`,filter:"blur(8px)"}],{duration:280,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});p.onfinish=()=>u.decode().catch(()=>{}).then(()=>{t.src=g,p.cancel(),t.animate([{opacity:0,transform:`translateX(${i*10}%) scale(.96)`,filter:"blur(8px)"},{opacity:1,transform:"none",filter:"none"}],{duration:650,easing:b}).onfinish=()=>n=!1})}r("#count").textContent=`${s+1} / ${a}`,r("#thumbs").innerHTML=a>1?e.shots.map((u,p)=>`<button data-dot="${p}" class="aspect-[16/10] w-32 shrink-0 overflow-hidden rounded-xl border-2 transition duration-300 sm:w-40 ${p===s?"border-[var(--acc)] opacity-100":"border-transparent opacity-40 hover:opacity-80"}"><img src="${m(u)}" alt="" class="pointer-events-none size-full object-cover object-top" /></button>`).join(""):""};l(0);const v=a>1;r("#prev").style.display=r("#next").style.display=v?"":"none",r("#prev").addEventListener("click",()=>l(s-1,-1)),r("#next").addEventListener("click",()=>l(s+1,1)),r("#thumbs").addEventListener("click",o=>{var d;const i=(d=o.target.closest("[data-dot]"))==null?void 0:d.dataset.dot;i&&l(Number(i),Math.sign(Number(i)-s))}),addEventListener("keydown",o=>{o.key==="ArrowLeft"&&l(s-1,-1),o.key==="ArrowRight"&&l(s+1,1)});let f=0;const h=r("#frame");h.addEventListener("pointerdown",o=>f=o.clientX),h.addEventListener("pointerup",o=>{const i=o.clientX-f;v&&Math.abs(i)>50&&l(s-Math.sign(i),-Math.sign(i))})}const $=new IntersectionObserver(t=>t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("on"),$.unobserve(a.target))}),{threshold:.12});document.querySelectorAll(".rv").forEach((t,a)=>{t.style.transitionDelay=`${a%3*.08}s`,$.observe(t)});document.querySelectorAll(".card").forEach(t=>t.addEventListener("pointermove",a=>{const s=t.getBoundingClientRect();t.style.setProperty("--x",`${a.clientX-s.left}px`),t.style.setProperty("--y",`${a.clientY-s.top}px`)}));addEventListener("scroll",()=>{r("#progress").style.transform=`scaleX(${scrollY/(document.body.scrollHeight-innerHeight)})`},{passive:!0});z(r("#glow"),r("#cDot"),r("#cRing"));E(r("#bg"),e.acc,`${e.acc}59`);
