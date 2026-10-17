import "./style.css";
import { createIcons } from "lucide";
import { icons } from "./icons";
import { sparks, cursor as fxCursor } from "./fx";
import { renderExtensions } from "./extensions";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;

const stack = ["TypeScript", "JavaScript", "React", "Node.js", "Tailwind", "Vite", "discord.js", "Git"];

const code = `import { Client } from "discord.js";

const bot = new Client({ intents: ["Guilds"] });

bot.on("interactionCreate", async (i) => {
  if (!i.isChatInputCommand()) return;
  if (i.commandName === "rafx") {
    await i.reply("Strony Wtyczki Boty Repy");
  }
});

bot.login(process.env.TOKEN);`;

function render(): void {
  $("#stack").innerHTML = stack
    .map((t) => `<span class="chip bg-panel transition hover:border-red/50 hover:text-white">${t}</span>`)
    .join("");
}

// ---------- Kod w terminalu ----------
function highlight(src: string): string {
  return src
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/(".*?")/g, '<span class="text-red">$1</span>')
    .replace(/\b(import|from|const|new|async|await|if|return)\b/g, '<span class="font-bold text-white">$1</span>');
}
function typeCode(): void {
  const el = $("#code");
  if (reduced) { el.innerHTML = highlight(code); return; }
  let started = false;
  new IntersectionObserver(([e]) => {
    if (!e.isIntersecting || started) return;
    started = true;
    let n = 0;
    const tick = () => {
      n = Math.min(n + 2, code.length);
      el.innerHTML = highlight(code.slice(0, n)) + '<span class="animate-blink text-red">▋</span>';
      if (n < code.length) setTimeout(tick, 20);
    };
    tick();
  }, { threshold: 0.3 }).observe(el);
}

function clock(): void {
  const el = $("#clock");
  const t = () => (el.textContent = new Date().toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
  t();
  setInterval(t, 1000);
}

// ---------- Intro ----------
function intro(): void {
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    el.innerHTML = [...(el.textContent ?? "")]
      .map((c, i) => `<span class="char" style="animation-delay:${0.25 + i * 0.08}s">${c}</span>`)
      .join("");
  });
  const card = $("#card");
  setTimeout(() => { card.style.opacity = "1"; card.style.transform = "none"; }, 400);
  document.querySelectorAll<HTMLElement>(".fade").forEach((el, i) => setTimeout(() => el.classList.remove("opacity-0"), 700 + i * 150));
}

// ---------- Reveal ----------
function reveal(): void {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("on");
    io.unobserve(e.target);
  }), { threshold: 0.15 });
  document.querySelectorAll<HTMLElement>(".rv").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    io.observe(el);
  });
}

// ---------- Własny kursor + glow (płynne podążanie) ----------
function cursor(): void {
  fxCursor($("#glow"), $("#cDot"), $("#cRing"));
}

// ---------- Kursor ----------
function pointer(): void {
  cursor();

  document.querySelectorAll<HTMLElement>(".card").forEach((c) =>
    c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--x", `${e.clientX - r.left}px`);
      c.style.setProperty("--y", `${e.clientY - r.top}px`);
    }),
  );
  if (reduced) return;


  const card = $("#card");
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transition = "transform .15s ease-out";
    card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transition = "transform .8s cubic-bezier(.16,1,.3,1)";
    card.style.transform = "none";
  });
}

// ---------- Scroll ----------
function scroll(): void {
  const bar = $("#progress");
  const nav = $("#nav");
  let last = 0;
  addEventListener("scroll", () => {
    const y = scrollY;
    bar.style.transform = `scaleX(${y / (document.body.scrollHeight - innerHeight)})`;
    last = y;
  }, { passive: true });
}

// ---------- Licznik wyświetleń ----------
async function views(): Promise<void> {
  const counted = (() => { try { return sessionStorage.getItem("viewed") === "1"; } catch { return false; } })();
  try {
    const res = await fetch(`https://abacus.jasoncameron.dev/${counted ? "get" : "hit"}/rafx-pl/views`);
    const { value }: { value: number } = await res.json();
    if (typeof value !== "number") return;
    try { sessionStorage.setItem("viewed", "1"); } catch { /* prywatne okno */ }
    $("#viewsCount").textContent = value.toLocaleString("pl-PL");
    $("#views").classList.remove("opacity-0");
  } catch { /* licznik niedostępny */ }
}

// ---------- Tło: czerwone iskry ----------
function background(): void {
  sparks($<HTMLCanvasElement>("#bg"), "#ff6b6b", "rgba(255,43,43,.35)");
}

// ---------- Mój profil Discord ----------
const DISCORD_ID = "790196690514477106";
const created = new Date(Number((BigInt(DISCORD_ID) >> 22n) + 1420070400000n));

function profile(): void {
  $("#since").textContent = created.toLocaleDateString("pl-PL", { day: "numeric", month: "short", year: "numeric" });
  $("#days").dataset.count = String(Math.floor((Date.now() - created.getTime()) / 864e5));

  const days = $("#days");
  new IntersectionObserver(([e], o) => {
    if (!e.isIntersecting) return;
    o.disconnect();
    const target = Number(days.dataset.count);
    const start = performance.now();
    const f = (t: number) => {
      const p = Math.min((t - start) / 1800, 1);
      days.textContent = Math.round(target * (1 - Math.pow(1 - p, 4))).toLocaleString("pl-PL");
      if (p < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }).observe(days);

  $("#copyId").addEventListener("click", async () => {
    await navigator.clipboard.writeText(DISCORD_ID);
    const b = $("#copyId");
    const old = b.innerHTML;
    b.textContent = "Skopiowano ✓";
    setTimeout(() => (b.innerHTML = old), 1500);
  });

  // świeży avatar (gdyby się zmienił)
  fetch(`https://japi.rest/discord/v1/user/${DISCORD_ID}`)
    .then((r) => r.json())
    .then(({ data }: { data: { avatar: string | null } }) => {
      if (!data.avatar) return;
      const ext = data.avatar.startsWith("a_") ? "gif" : "png";
      document.querySelectorAll<HTMLImageElement>("[data-avatar]").forEach((img) =>
        (img.src = `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.avatar}.${ext}?size=256`));
    })
    .catch(() => {});
}

// podświetlenie aktywnej sekcji w menu
function scrollSpy(): void {
  const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav-link")];
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((l) => l.classList.toggle("active", l.hash === `#${e.target.id}`));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id], header[id]").forEach((s) => io.observe(s));
}

// ---------- Wybór kontaktu: Discord albo e-mail ----------
function contact(): void {
  const modal = $("#contactModal"), panel = $("#contactPanel");
  const backdrop = modal.querySelector<HTMLElement>("[data-cclose]")!;
  const open = (e: Event) => {
    e.preventDefault();
    modal.classList.replace("hidden", "flex");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      backdrop.classList.remove("opacity-0");
      panel.classList.remove("opacity-0", "translate-y-10", "scale-95");
    });
  };
  const close = () => {
    backdrop.classList.add("opacity-0");
    panel.classList.add("opacity-0", "translate-y-10", "scale-95");
    document.body.style.overflow = "";
    setTimeout(() => modal.classList.replace("flex", "hidden"), 400);
  };
  document.querySelectorAll("[data-contact]").forEach((b) => b.addEventListener("click", open));
  modal.querySelectorAll("[data-cclose], .cpick").forEach((b) => b.addEventListener("click", close));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.classList.contains("hidden")) close(); });
  const copyBtn = $("#copyMail");
  copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText("rafxezz23@gmail.com");
    const label = copyBtn.querySelector("span")!;
    label.textContent = "Skopiowano ✓";
    setTimeout(() => (label.textContent = "Skopiuj adres e-mail"), 1500);
  });
}

// ---------- Menu na telefonie ----------
function mobileMenu(): void {
  const btn = $("#menuBtn"), menu = $("#mobileMenu");
  const bars = btn.querySelectorAll<HTMLElement>(".mbar");
  const set = (open: boolean) => {
    btn.setAttribute("aria-expanded", String(open));
    menu.style.gridTemplateRows = open ? "1fr" : "0fr";
    bars[0].style.transform = open ? "translateY(6px) rotate(45deg)" : "";
    bars[1].style.opacity = open ? "0" : "1";
    bars[2].style.transform = open ? "translateY(-6px) rotate(-45deg)" : "";
  };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
  addEventListener("scroll", () => { if (btn.getAttribute("aria-expanded") === "true" && scrollY > 0) set(false); }, { passive: true });
}

render();
mobileMenu();
contact();
renderExtensions();
createIcons({ icons });
profile();
scrollSpy();
clock();
intro();
typeCode();
reveal();
pointer();
scroll();
views();
background();
