import "./style.css";
import { createIcons } from "lucide";
import { icons } from "./icons";
import { sparks, cursor as fxCursor } from "./fx";
import { all } from "./extensions";

const BASE = import.meta.env.BASE_URL;
const src = (f: string) => (f.startsWith("http") ? f : `${BASE}${f}`);
const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const id = new URLSearchParams(location.search).get("id");
const p = all.find((x) => x.id === id) ?? all[0];
const i = all.indexOf(p);
const prev = all[(i - 1 + all.length) % all.length];
const next = all[(i + 1) % all.length];

const root = document.documentElement;
root.style.setProperty("--acc", p.acc);
root.style.setProperty("--accink", p.ink);
// czarne, neutralne tło i linie (bez czerwonego odcienia z głównej strony)
root.style.setProperty("--color-ink", "#050505");
root.style.setProperty("--color-panel", "#0b0b0b");
root.style.setProperty("--color-edge", "#1c1c1c");
document.title = `${p.name} — rafx`;

document.body.style.background = `radial-gradient(1100px 600px at 80% -10%, color-mix(in srgb, ${p.acc} 10%, transparent), transparent 60%), #050505`;

const roundIcon = p.id === "jachu" || p.id === "vynx";
const ctaIcon = p.url ? (p.cta.includes("Chrome") ? "download" : "external-link") : "clock";
const isExt = p.kind.startsWith("Wtyczka");

const soonBox = `
  <div class="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_120%,rgb(255_43_43/.45),transparent_60%),#0a0303]">
    <div class="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_43_43/.15)_1px,transparent_1px),linear-gradient(90deg,rgb(255_43_43/.15)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
    <div class="relative text-center">
      <p class="font-display text-6xl font-extrabold text-white drop-shadow-[0_0_30px_#ff2b2b] sm:text-8xl">${p.name}</p>
      <p class="font-mono mt-5 inline-flex items-center gap-2 text-sm tracking-[.3em] text-red uppercase"><span class="size-2 animate-ping rounded-full bg-red"></span>w budowie</p>
    </div>
  </div>`;

$("#page").innerHTML = `
  <!-- HERO -->
  <header class="relative mx-auto max-w-6xl px-4 pt-32 pb-12">
    <div class="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--acc)_22%,transparent),transparent_70%)]"></div>
    <p class="rv inline-flex items-center gap-2.5 rounded-full border border-[color-mix(in_srgb,var(--acc)_30%,transparent)] bg-[color-mix(in_srgb,var(--acc)_8%,#0b0b0b)] py-1.5 pr-4 pl-1.5 text-sm font-medium text-white">
      <span class="grid size-7 place-items-center rounded-full bg-[var(--acc)] text-[var(--accink)]"><i data-lucide="${isExt ? "puzzle" : "globe"}" class="size-4"></i></span>${p.kind}
    </p>
    <div class="mt-6 flex flex-wrap items-end justify-between gap-8">
      <div class="rv flex items-center gap-5">
        ${p.icon ? `<img src="${src(p.icon)}" alt="" class="size-20 ${roundIcon ? "rounded-full" : "rounded-3xl"} shadow-[0_20px_60px_-15px_var(--acc)] sm:size-24" />` : ""}
        <div>
          <h1 class="font-display text-[clamp(3rem,9vw,6.5rem)] leading-[.9] font-extrabold tracking-[-.05em] text-white [font-stretch:85%]">${p.name}</h1>
          <p class="mt-2 text-neutral-400">${p.meta}</p>
        </div>
      </div>
      <a ${p.url ? `href="${p.url}" target="_blank"` : `aria-disabled="true"`} class="rv inline-flex items-center gap-2 rounded-2xl bg-[var(--acc)] px-7 py-4 font-bold text-[var(--accink)] shadow-[0_0_50px_-12px_var(--acc)] transition hover:scale-[1.03] ${p.url ? "" : "pointer-events-none opacity-50"}">
        <i data-lucide="${ctaIcon}" class="size-5"></i> ${p.cta}
      </a>
    </div>
    <p class="rv mt-8 max-w-3xl text-lg leading-relaxed text-neutral-300">${p.desc}</p>
    <div class="rv mt-6 flex flex-wrap gap-2">${p.tags.map((t) => `<span class="rounded-full border border-[color-mix(in_srgb,var(--acc)_25%,#262626)] bg-white/[.03] px-3 py-1 text-xs text-neutral-300">${t}</span>`).join("")}</div>
  </header>

  <!-- GALERIA -->
  <section class="mx-auto max-w-6xl px-4">
    <div class="rv overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--acc)_25%,#262626)] bg-black p-2 shadow-[0_40px_120px_-30px_color-mix(in_srgb,var(--acc)_40%,transparent)] sm:p-3">
      <div class="flex items-center gap-2 px-2 pb-2.5 sm:px-3">
        <span class="size-3 rounded-full bg-[#ff5f57]"></span><span class="size-3 rounded-full bg-[#febc2e]"></span><span class="size-3 rounded-full bg-[#28c840]"></span>
        <span class="font-mono ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-neutral-500">${p.url ? p.url.replace(/^https?:\/\//, "").slice(0, 60) : p.name}</span>
      </div>
      <div id="frame" class="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-2xl bg-ink">
        ${p.shots.length ? `
        <img id="shot" alt="" draggable="false" class="size-full object-contain select-none" />
        <button id="prev" aria-label="Poprzednie" class="absolute top-1/2 left-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-[var(--acc)] hover:text-[var(--accink)]"><i data-lucide="chevron-left" class="size-6"></i></button>
        <button id="next" aria-label="Następne" class="absolute top-1/2 right-4 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-[var(--acc)] hover:text-[var(--accink)]"><i data-lucide="chevron-right" class="size-6"></i></button>
        <span id="count" class="font-mono absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white/80 backdrop-blur"></span>` : soonBox}
      </div>
    </div>
    <div id="thumbs" class="mt-4 flex justify-center gap-3 overflow-x-auto pb-2"></div>
  </section>

  <!-- O PROJEKCIE -->
  <section class="mx-auto grid max-w-6xl gap-12 px-4 pt-28 lg:grid-cols-[1.2fr_1fr]">
    <div class="rv">
      <p class="font-mono text-xs tracking-[.3em] text-[var(--acc)] uppercase">O projekcie</p>
      <h2 class="h2">Co to jest?</h2>
      ${p.about.map((t) => `<p class="mt-5 text-lg leading-relaxed text-neutral-400">${t}</p>`).join("")}
    </div>
    <div class="feat rv self-start rounded-3xl border p-7">
      <p class="font-mono text-xs tracking-[.3em] text-neutral-500 uppercase">Technologie</p>
      <div class="mt-5 flex flex-wrap gap-2">${p.stack.map((s) => `<span class="rounded-xl border border-[color-mix(in_srgb,var(--acc)_30%,#262626)] bg-[color-mix(in_srgb,var(--acc)_8%,transparent)] px-3.5 py-2 text-sm font-medium text-white">${s}</span>`).join("")}</div>
      <div class="mt-7 grid grid-cols-2 gap-3 border-t border-edge pt-6">
        <div><p class="text-xs text-neutral-500">Typ</p><p class="mt-1 font-semibold text-white">${p.kind}</p></div>
        <div><p class="text-xs text-neutral-500">Status</p><p class="mt-1 font-semibold ${p.url ? "text-[#23a55a]" : "text-red"}">${p.url ? "● Online" : "● W budowie"}</p></div>
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
    <div class="grid gap-4 sm:grid-cols-2 ${p.features.length % 3 === 0 || p.features.length > 3 ? "lg:grid-cols-3" : ""}">
      ${p.features.map(([ic, t, d], n) => `
      <article class="feat card rv group ${n === 0 && p.features.length % 3 === 2 && p.features.length > 2 ? "lg:col-span-2" : ""} ${n === 0 && p.features.length % 3 === 1 && p.features.length > 3 ? "lg:col-span-3" : ""}">
        <div class="flex items-center justify-between">
          <span class="grid size-12 place-items-center rounded-2xl border border-[color-mix(in_srgb,var(--acc)_30%,transparent)] bg-[color-mix(in_srgb,var(--acc)_10%,transparent)] text-[var(--acc)] transition duration-500 group-hover:scale-110 group-hover:rotate-6"><i data-lucide="${ic}" class="size-6"></i></span>
          <span class="font-mono text-xs text-neutral-600">0${n + 1}</span>
        </div>
        <h3 class="font-display mt-6 text-xl font-bold text-white">${t}</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-400">${d}</p>
      </article>`).join("")}
    </div>
  </section>

  <!-- INNE PROJEKTY -->
  <section class="mx-auto max-w-6xl px-4 py-28">
    <div class="grid gap-4 sm:grid-cols-2">
      ${[["Poprzedni", prev, "arrow-left"], ["Następny", next, "arrow-right"]].map(([label, q, ic]) => {
        const o = q as typeof p;
        return `
      <a href="./projekt.html?id=${o.id}" style="--acc:${o.acc}" class="feat card rv group flex items-center gap-5 ${label === "Następny" ? "sm:flex-row-reverse sm:text-right" : ""}">
        <span class="grid size-12 shrink-0 place-items-center rounded-full border border-white/10 text-neutral-400 transition group-hover:border-[var(--acc)] group-hover:text-[var(--acc)]"><i data-lucide="${ic}" class="size-5"></i></span>
        ${o.icon ? `<img src="${src(o.icon)}" alt="" class="size-14 ${o.id === "jachu" || o.id === "vynx" ? "rounded-full" : "rounded-2xl"}" />` : ""}
        <div class="min-w-0"><p class="text-xs text-neutral-500">${label} projekt</p><p class="font-display truncate text-2xl font-bold text-white">${o.name}</p></div>
      </a>`;
      }).join("")}
    </div>
  </section>`;

createIcons({ icons });
requestAnimationFrame(() => $("#page").classList.remove("opacity-0"));

// ---------- Galeria ----------
if (p.shots.length) {
  const shot = $<HTMLImageElement>("#shot");
  const n = p.shots.length;
  let idx = -1, busy = false;
  const ease = "cubic-bezier(.16,1,.3,1)";
  const show = (k: number, dir = 0) => {
    const nx = (k + n) % n;
    if (busy || nx === idx) return;
    idx = nx;
    const url = src(p.shots[idx]);
    if (dir === 0 || reduced) {
      shot.src = url;
      if (!reduced) shot.animate([{ opacity: 0, transform: "scale(1.05)", filter: "blur(10px)" }, { opacity: 1, transform: "none", filter: "none" }], { duration: 800, easing: ease });
    } else {
      busy = true;
      const pre = new Image();
      pre.src = url;
      const out = shot.animate([{ opacity: 1, transform: "none", filter: "none" }, { opacity: 0, transform: `translateX(${-dir * 10}%) scale(.96)`, filter: "blur(8px)" }], { duration: 280, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" });
      out.onfinish = () => pre.decode().catch(() => {}).then(() => {
        shot.src = url;
        out.cancel();
        shot.animate([{ opacity: 0, transform: `translateX(${dir * 10}%) scale(.96)`, filter: "blur(8px)" }, { opacity: 1, transform: "none", filter: "none" }], { duration: 650, easing: ease }).onfinish = () => (busy = false);
      });
    }
    $("#count").textContent = `${idx + 1} / ${n}`;
    $("#thumbs").innerHTML = n > 1 ? p.shots.map((f, j) =>
      `<button data-dot="${j}" class="aspect-[16/10] w-32 shrink-0 overflow-hidden rounded-xl border-2 transition duration-300 sm:w-40 ${j === idx ? "border-[var(--acc)] opacity-100" : "border-transparent opacity-40 hover:opacity-80"}"><img src="${src(f)}" alt="" class="pointer-events-none size-full object-cover object-top" /></button>`).join("") : "";
  };
  show(0);
  const multi = n > 1;
  $("#prev").style.display = $("#next").style.display = multi ? "" : "none";
  $("#prev").addEventListener("click", () => show(idx - 1, -1));
  $("#next").addEventListener("click", () => show(idx + 1, 1));
  $("#thumbs").addEventListener("click", (e) => {
    const d = (e.target as HTMLElement).closest<HTMLElement>("[data-dot]")?.dataset.dot;
    if (d) show(Number(d), Math.sign(Number(d) - idx));
  });
  addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(idx - 1, -1);
    if (e.key === "ArrowRight") show(idx + 1, 1);
  });
  let sx = 0;
  const fr = $("#frame");
  fr.addEventListener("pointerdown", (e) => (sx = e.clientX));
  fr.addEventListener("pointerup", (e) => {
    const dx = e.clientX - sx;
    if (multi && Math.abs(dx) > 50) show(idx - Math.sign(dx), -Math.sign(dx));
  });
}

// ---------- Reveal ----------
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add("on");
  io.unobserve(e.target);
}), { threshold: 0.12 });
document.querySelectorAll<HTMLElement>(".rv").forEach((el, n) => {
  el.style.transitionDelay = `${(n % 3) * 0.08}s`;
  io.observe(el);
});

// ---------- Spotlight kart ----------
document.querySelectorAll<HTMLElement>(".card").forEach((c) =>
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--x", `${e.clientX - r.left}px`);
    c.style.setProperty("--y", `${e.clientY - r.top}px`);
  }),
);

// ---------- Pasek postępu ----------
addEventListener("scroll", () => {
  $("#progress").style.transform = `scaleX(${scrollY / (document.body.scrollHeight - innerHeight)})`;
}, { passive: true });

// ---------- Kursor + tło ----------
fxCursor($("#glow"), $("#cDot"), $("#cRing"));
sparks($<HTMLCanvasElement>("#bg"), p.acc, `${p.acc}59`);
