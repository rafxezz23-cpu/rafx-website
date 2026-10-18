import { createIcons } from "lucide";
import { icons } from "./icons";

type Feature = [icon: string, title: string, desc: string];
type Project = {
  id: string; name: string; acc: string; ink: string;
  url?: string; cta: string; meta: string;
  icon: string; desc: string; shots: string[]; tags: string[]; features: Feature[];
  kind: string; about: string[]; stack: string[];
};

const BASE = import.meta.env.BASE_URL;
const src = (f: string) => (f.startsWith("http") ? f : `${BASE}${f}`);
const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;

const extFeatures: Feature[] = [
  ["camera", "Podgląd QC bez klikania", "Automatycznie wyszukuje i pokazuje zdjęcia QC — bez przeklikiwania dziesiątek linków."],
  ["link", "Auto-Link do agenta", "Przekierowuje na stronę twojego agenta z odpowiednim produktem."],
  ["circle-dollar-sign", "Live konwersja cen", "Przelicza ceny z CNY na PLN, USD, EUR, GBP — bez wychodzenia ze strony."],
  ["bell-off", "Bez warnów i checków", "Usuwa popupy „Check Agree” i „Warn Remind”."],
  ["package", "Czas dostawy", "Szacuje, kiedy paczka dotrze do magazynu agenta."],
  ["chart-column", "Statystyki KakoBuy", "Saldo, waga paczek, opłaty i najcięższa paczka w jednym panelu."],
];

export const extensions: Project[] = [
  {
    id: "salvitool", kind: "Wtyczka Chrome", stack: ["TypeScript", "Chrome Extension API", "Manifest V3", "HTML / CSS"],
    about: ["SalviTool to wtyczka do Chrome zrobiona dla społeczności Salvi Reps. Działa na stronach agentów zakupowych i sklepów takich jak Weidian, Taobao czy Yupoo.", "Zamiast przeklikiwać dziesiątki linków, wtyczka sama znajduje zdjęcia QC, przelicza ceny z juanów na złotówki i przekierowuje produkt do wybranego agenta. Ma własny panel ustawień w czerwono-czarnym stylu Salvi."],
     name: "SalviTool", acc: "#ff2b2b", ink: "#ffffff", meta: "140 użytkowników", cta: "Dodaj do Chrome",
    url: "https://chromewebstore.google.com/detail/salvitool/holgjhajjgkeonkdndpbbllbladpepjo", icon: "ext/salvitool-icon.webp",
    desc: "Czerwono-czarna wtyczka dla społeczności Salvi Reps. Zdjęcia QC, odznaki sellerów, przelicznik cen i automatyczny konwerter linków dla agentów zakupowych.",
    shots: ["ext/salvitool-1.webp", "ext/salvitool-2.webp"], tags: ["Chrome Extension", "TypeScript", "KakoBuy"], features: extFeatures,
  },
  {
    id: "kakomaxing", kind: "Wtyczka Chrome", stack: ["TypeScript", "Chrome Extension API", "Manifest V3", "HTML / CSS"],
    about: ["Kakomaxing to czarno-biała wersja mojej wtyczki dla agentów zakupowych. Obsługuje 22 agentów i ustawia Auto-Link jednym kliknięciem.", "Po instalacji wita użytkownika własnym panelem z kodem -60 zł na wysyłkę, wyborem agenta, języka i waluty."],
     name: "Kakomaxing", acc: "#ffffff", ink: "#000000", meta: "45 użytkowników", cta: "Dodaj do Chrome",
    url: "https://chromewebstore.google.com/detail/kakomaxing/konhmgafbkgjipiekalbmgogpijjgeph", icon: "ext/kakomaxing-icon.webp",
    desc: "Niezbędnik w świecie repów: 22 agentów, Auto-Link jednym kliknięciem, automatyczne QC i kod -60 zł na wysyłkę.",
    shots: ["ext/kakomaxing-1.webp"], tags: ["22 agentów", "Auto-Link", "QC auto"], features: extFeatures,
  },
  {
    id: "trustedreps", kind: "Wtyczka Chrome", stack: ["TypeScript", "Chrome Extension API", "Manifest V3", "HTML / CSS"],
    about: ["TrustedReps to wersja wtyczki przygotowana dla społeczności TrustedReps. Ma ten sam zestaw funkcji co SalviTool, ale w eleganckim, czarno-białym wydaniu.", "Z wtyczki korzysta 160 osób — najwięcej ze wszystkich moich rozszerzeń."],
     name: "TrustedReps", acc: "#e5e5e5", ink: "#000000", meta: "160 użytkowników", cta: "Dodaj do Chrome",
    url: "https://chromewebstore.google.com/detail/trustedreps/glgjnocnbhjnghhmoemfadjknpkinkke", icon: "ext/trustedreps-icon.webp",
    desc: "Wersja dla społeczności TrustedReps — te same mocne funkcje w czarno-białym, eleganckim wydaniu.",
    shots: ["ext/trustedreps-1.webp", "ext/trustedreps-2.webp", "ext/trustedreps-3.webp"], tags: ["Chrome Extension", "QC", "Konwersja cen"], features: extFeatures,
  },
];

export const sites: Project[] = [
  {
    id: "jachu", kind: "Strona internetowa", stack: ["Vite", "TypeScript", "Tailwind CSS", "Discord API", "Vercel"],
    about: ["Strona profilowa dla Jacha — właściciela serwera Jachu Reps z 1,2 tys. osób. Dane profilu (avatar, animowany banner, nick i tag) pobierają się na żywo z Discorda po samym ID.", "Najważniejszy jest duży kupon z kodem JACHU20, który kopiuje się jednym kliknięciem, a pod nim wszystkie promki z bio Jacha. Strona działa bez własnego backendu i stoi na Vercelu."],
     name: "Jachu Reps", acc: "#b18cff", ink: "#000000", meta: "Strona profilowa · live", cta: "Otwórz stronę",
    url: "https://jachureps.vercel.app",
    icon: "https://cdn.discordapp.com/avatars/1357365138423812176/b95d13e266392efae78c3baca7003081.png?size=128",
    desc: "Strona profilowa dla Jacha w fioletowym, neonowym stylu. Animowany banner i avatar pobierane na żywo z Discorda, duży kupon z kodem Jachu20 do skopiowania i wszystkie promki z jego bio.",
    shots: ["sites/jachu-1.webp", "sites/jachu-2.webp", "sites/jachu-3.webp"], tags: ["Vite", "TypeScript", "Tailwind", "Discord API"],
    features: [
      ["user-round", "Profil z Discorda na żywo", "Avatar, animowany banner, nick i tag REPS pobierane po ID."],
      ["ticket-percent", "Kupon z kodem", "Kod JACHU20 kopiuje się jednym kliknięciem."],
      ["gift", "Promki z bio", "$410 kuponów, -63 zł na ship, 20 zł BLIK, 1,50 zł za zaproszenie."],
      ["eye", "Licznik wyświetleń", "Liczy odwiedziny bez własnego backendu."],
      ["sparkles", "Animacje", "Świecące cząsteczki, wjeżdżające litery, karty z poświatą."],
    ],
  },
  {
    id: "vynx", kind: "Strona internetowa", stack: ["Vite", "TypeScript", "Tailwind CSS", "Lanyard", "Canvas"],
    about: ["Strona profilowa dla vynxa w gotyckim, zielono-czarnym klimacie. Kolory nicku są czytane bezpośrednio z jego ustawień na Discordzie, a nick ma pikselową czcionkę jak w aplikacji.", "Karta profilu przechyla się w 3D za kursorem, w tle spadają krzyże rysowane na canvasie, a data założenia konta liczy się z samego Discord ID."],
     name: "! vynx", acc: "#c4ed65", ink: "#000000", meta: "Strona profilowa · live", cta: "Otwórz stronę",
    url: "https://vynx-eight.vercel.app",
    icon: "https://cdn.discordapp.com/avatars/943108101492580362/400c9819e46e700b414eb0b7623aad71.png?size=128",
    desc: "Strona profilowa dla vynxa w zielono-czarnym klimacie z gotyckimi krzyżami. Nick w pikselowej czcionce z gradientem z jego profilu Discord, karta profilu przechylająca się w 3D i linki.",
    shots: ["sites/vynx-1.webp", "sites/vynx-2.webp", "sites/vynx-3.webp"], tags: ["Vite", "TypeScript", "Tailwind", "Lanyard"],
    features: [
      ["palette", "Kolory z Discorda", "Gradient nicku czytany z jego ustawień na Discordzie."],
      ["rotate-3d", "Karta 3D", "Karta profilu przechyla się za kursorem."],
      ["calendar", "Dane konta", "Data założenia konta liczona z samego ID."],
      ["link", "Linki", "Discord, serwer, Spotify i KakoBuy w jednym miejscu."],
      ["sparkles", "Animacje", "Spadające krzyże, przewijany pasek, liczniki."],
    ],
  },
  {
    id: "salvireps", name: "salvireps.pl", acc: "#ff2b2b", ink: "#ffffff", meta: "Już niedługo pod domeną salvireps.pl", cta: "Już niedługo",
    kind: "Strona internetowa", icon: "sites/salvireps-icon.webp",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "VPS"],
    desc: "Największy projekt: pełny serwis dla społeczności Salvi Reps — katalog produktów, zweryfikowani sprzedawcy, narzędzia do QC i wysyłki, poradniki, outfity i forum w jednym miejscu.",
    about: [
      "salvireps.pl to strona dla społeczności Salvi Reps, która ma już ponad 6 tys. członków i 1,5 tys. osób online na Discordzie. Zebrałem w niej wszystko, czego potrzeba przy zamawianiu repów: produkty, sprzedawców, poradniki i narzędzia.",
      "Przy pierwszym wejściu użytkownik wybiera język, walutę i jednego z kilkunastu agentów (KakoBuy, USFans, Mulebuy, ACBuy, Sugargoo i inni), a strona sama dopasowuje ceny i linki zakupowe. Całość stoi na własnym VPS i jest zrobiona w Next.js.",
    ],
    shots: ["sites/salvireps-2.webp", "sites/salvireps-3.webp", "sites/salvireps-1.webp"],
    tags: ["Next.js", "VPS", "Społeczność 6k+"],
    features: [
      ["scan-search", "QC Finder", "Zdjęcia QC z dowolnego linku Weidian, Taobao lub 1688."],
      ["link", "Link Converter", "Konwersja linków między platformami i agentami."],
      ["calculator", "Kalkulator wysyłki", "Oblicza koszt shipa dla całego zamówienia."],
      ["scale", "Porównanie agentów", "Ceny, kursy i opłaty agentów obok siebie."],
      ["package-search", "Śledzenie paczki", "Status przesyłki w jednym miejscu."],
      ["store", "Zweryfikowani sprzedawcy", "Każdy seller przechodzi weryfikację moderacji."],
      ["shirt", "Produkty i outfity", "Katalog z batchami, kategoriami, filtrami i koszykiem."],
      ["book-open", "Poradniki i forum", "Jak zamówić pierwszą pakę, kupony i pomoc."],
      ["languages", "Język, waluta, agent", "PL / EN, PLN / USD / EUR / CNY i kilkunastu agentów."],
    ],
  },
];

export const all = [...extensions, ...sites];

export function renderExtensions(): void {
  const card = (p: Project) => {
    const round = p.id === "jachu" || p.id === "vynx";
    const status = p.url
      ? (p.kind.startsWith("Strona")
        ? `<span class="size-1.5 rounded-full bg-[#23a55a]"></span>Live`
        : `<i data-lucide="users" class="size-3"></i>${parseInt(p.meta)}`)
      : `<span class="size-1.5 rounded-full bg-amber-400"></span>Wkrótce`;
    const host = p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : p.name;
    const icon = p.icon
      ? `<img src="${src(p.icon)}" alt="" class="size-11 shrink-0 ${round ? "rounded-full" : "rounded-xl"} object-cover" />`
      : `<span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-neutral-400"><i data-lucide="hammer" class="size-5"></i></span>`;
    return `
    <a href="${BASE}projekt.html?id=${p.id}" style="--acc:${p.acc}" class="pcard rv group flex flex-col">
      <div class="pcard-frame">
        <div class="pcard-bar">
          <span class="flex gap-1.5"><i></i><i></i><i></i></span>
          <span class="truncate">${host}</span>
          <span class="pcard-status">${status}</span>
        </div>
        <div class="pcard-shot">
          ${p.shots.length ? `<img src="${src(p.shots[0])}" alt="Podgląd ${p.name}" loading="lazy" decoding="async" />` : ""}
        </div>
      </div>
      <div class="flex flex-1 flex-col px-1 pt-5">
        <div class="flex items-center gap-3">
          ${icon}
          <div class="min-w-0 flex-1">
            <h4 class="font-display truncate text-xl font-bold text-white">${p.name}</h4>
            <p class="truncate text-xs text-neutral-500">${p.tags.slice(0, 3).join(" · ")}</p>
          </div>
          <span class="pcard-arrow"><i data-lucide="arrow-up-right" class="size-4"></i></span>
        </div>
        <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400">${p.desc}</p>
      </div>
    </a>`;
  };
  $("#siteGrid").innerHTML = sites.map(card).join("");
  $("#extGrid").innerHTML = extensions.map(card).join("");

  const modal = $("#extModal"), panel = $("#extPanel"), shot = $<HTMLImageElement>("#extShot");
  const backdrop = modal.querySelector<HTMLElement>("[data-close]")!;
  const frame = shot.parentElement!;
  // plansza „w budowie” dla projektów bez screenów
  frame.insertAdjacentHTML("beforeend", `
    <div id="extSoon" class="absolute inset-0 hidden place-items-center bg-[radial-gradient(circle_at_50%_120%,rgb(255_43_43/.45),transparent_60%),#0a0303]">
      <div class="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_43_43/.15)_1px,transparent_1px),linear-gradient(90deg,rgb(255_43_43/.15)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
      <div class="relative text-center">
        <p id="extSoonName" class="font-display text-5xl font-extrabold text-white drop-shadow-[0_0_30px_#ff2b2b] sm:text-6xl"></p>
        <p class="font-mono mt-4 inline-flex items-center gap-2 text-sm tracking-[.3em] text-red uppercase"><span class="size-2 animate-ping rounded-full bg-red"></span>w budowie</p>
      </div>
    </div>`);
  let cur: Project = all[0], idx = 0;

  // przejście: stare zdjęcie wyjeżdża w bok z blurem, nowe wjeżdża z drugiej strony
  const ease = "cubic-bezier(.16,1,.3,1)";
  let busy = false;
  const show = (i: number, dir = 0) => {
    const n = cur.shots.length;
    $("#extSoon").style.display = n ? "none" : "grid";
    shot.style.display = n ? "" : "none";
    $("#extCount").style.display = n ? "" : "none";
    $("#extPrev").style.display = $("#extNext").style.display = n > 1 ? "" : "none";
    $("#extThumbs").innerHTML = "";
    if (!n) return;

    const next = (i + n) % n;
    if (busy || (dir !== 0 && next === idx)) return;
    idx = next;
    const url = src(cur.shots[idx]);
    const pre = new Image();
    pre.src = url;
    if (dir === 0) {
      shot.getAnimations().forEach((a) => a.cancel());
      shot.src = url;
      shot.animate([{ opacity: 0, transform: "scale(1.06)", filter: "blur(10px)" }, { opacity: 1, transform: "none", filter: "none" }], { duration: 700, easing: ease });
    } else {
      busy = true;
      const out = shot.animate(
        [{ opacity: 1, transform: "none", filter: "none" }, { opacity: 0, transform: `translateX(${-dir * 12}%) scale(.96)`, filter: "blur(8px)" }],
        { duration: 280, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" },
      );
      out.onfinish = () => pre.decode().catch(() => {}).then(() => {
        shot.src = url;
        out.cancel();
        shot.animate(
          [{ opacity: 0, transform: `translateX(${dir * 12}%) scale(.96)`, filter: "blur(8px)" }, { opacity: 1, transform: "none", filter: "none" }],
          { duration: 600, easing: ease },
        ).onfinish = () => (busy = false);
      });
    }
    $("#extCount").textContent = `${idx + 1} / ${n}`;
    $("#extThumbs").innerHTML = n > 1 ? cur.shots.map((f, j) =>
      `<button data-dot="${j}" class="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border-2 transition ${j === idx ? "border-[var(--acc)] opacity-100" : "border-transparent opacity-45 hover:opacity-80"}"><img src="${src(f)}" alt="" class="pointer-events-none size-full object-cover object-top" /></button>`).join("") : "";
  };

  const open = (e: Project) => {
    cur = e;
    const red = e.acc === "#ff2b2b";
    modal.style.setProperty("--acc", e.acc);
    modal.style.setProperty("--accink", e.ink);
    modal.style.setProperty("--panelbg", red ? "#110808" : "#0b0b0b");
    panel.style.borderColor = red ? "#3a1414" : "#262626";

    const icon = $<HTMLImageElement>("#extIcon");
    icon.style.display = e.icon ? "" : "none";
    if (e.icon) icon.src = src(e.icon);
    icon.className = `size-14 ${e.id === "jachu" || e.id === "vynx" ? "rounded-full" : "rounded-2xl"}`;
    $("#extName").textContent = e.name;
    $("#extSoonName").textContent = e.name;
    $("#extMeta").textContent = e.meta;
    $("#extDesc").textContent = e.desc;

    const link = $<HTMLAnchorElement>("#extLink");
    if (e.url) { link.href = e.url; link.removeAttribute("aria-disabled"); link.classList.remove("pointer-events-none", "opacity-50"); }
    else { link.removeAttribute("href"); link.setAttribute("aria-disabled", "true"); link.classList.add("pointer-events-none", "opacity-50"); }
    const ctaIcon = e.url ? (e.cta.includes("Chrome") ? "download" : "external-link") : "clock";
    link.innerHTML = `<i data-lucide="${ctaIcon}" class="size-5"></i> ${e.cta}`;

    $("#extTags").innerHTML = e.tags.map((t) => `<span class="rounded-full border border-[color-mix(in_srgb,var(--acc)_25%,#262626)] bg-white/[.03] px-3 py-1 text-xs text-neutral-300">${t}</span>`).join("");
    $("#extFeatures").innerHTML = e.features.map(([ic, t, d]) => `
      <li class="flex gap-3 rounded-xl p-2 transition hover:bg-white/[.04]">
        <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-white/[.05]"><i data-lucide="${ic}" class="size-4 text-[var(--acc)]"></i></span>
        <span><b class="block text-sm text-white">${t}</b><span class="text-xs text-neutral-500">${d}</span></span>
      </li>`).join("");
    createIcons({ icons });
    idx = -1;
    busy = false;
    show(0);
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

  void open;
  modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", close));
  $("#extPrev").addEventListener("click", () => show(idx - 1, -1));
  $("#extNext").addEventListener("click", () => show(idx + 1, 1));

  // przesuwanie palcem / myszką
  let sx = 0;
  frame.addEventListener("pointerdown", (e) => (sx = e.clientX));
  frame.addEventListener("pointerup", (e) => {
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 50 && cur.shots.length > 1) show(idx - Math.sign(dx), -Math.sign(dx));
  });
  $("#extThumbs").addEventListener("click", (e) => {
    const d = (e.target as HTMLElement).closest<HTMLElement>("[data-dot]")?.dataset.dot;
    if (d) show(Number(d), Math.sign(Number(d) - idx));
  });
  addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1, -1);
    if (e.key === "ArrowRight") show(idx + 1, 1);
  });
}
