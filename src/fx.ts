// Wspólne, zoptymalizowane efekty: świecące iskry w tle i własny kursor.
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(any-pointer: fine)").matches;

/** Iskry lecące w górę. Poświata jest wyrysowana raz do sprite'a (zamiast drogiego shadowBlur na każdej kropce). */
export function sparks(cv: HTMLCanvasElement, color: string, glow: string): void {
  const ctx = cv.getContext("2d")!;
  const dpr = Math.min(devicePixelRatio, 1.5);
  const resize = () => {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  addEventListener("resize", resize);

  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 64;
  const s = sprite.getContext("2d")!;
  const g = s.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, color);
  g.addColorStop(0.18, color);
  g.addColorStop(0.35, glow);
  g.addColorStop(1, "transparent");
  s.fillStyle = g;
  s.fillRect(0, 0, 64, 64);

  const count = innerWidth < 768 ? 24 : 50;
  const ps = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    s: 0.8 + Math.random() * 2, v: 0.15 + Math.random() * 0.5,
    r: Math.random() * 6, o: 0.2 + Math.random() * 0.6,
  }));

  const frame = () => {
    if (document.hidden) { setTimeout(() => requestAnimationFrame(frame), 400); return; }
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const p of ps) {
      p.y -= p.v; p.r += 0.01;
      if (p.y < -20) { p.y = innerHeight + 20; p.x = Math.random() * innerWidth; }
      ctx.globalAlpha = p.o * (0.6 + Math.sin(p.r * 3) * 0.4);
      const size = p.s * 6;
      ctx.drawImage(sprite, p.x + Math.sin(p.r) * 10 - size / 2, p.y - size / 2, size, size);
    }
    if (!reduced) requestAnimationFrame(frame);
  };
  frame();
}

/** Kropka + pierścień + poświata za kursorem. Pętla działa tylko, gdy coś się rusza; na dotyku nic nie liczy. */
export function cursor(glow: HTMLElement, dot: HTMLElement, ring: HTMLElement): void {
  if (!finePointer) return;
  const root = document.documentElement;
  root.classList.add("has-cursor");
  let mx = -100, my = -100, rx = mx, ry = my, gx = innerWidth / 2, gy = innerHeight / 2;
  let running = false;

  const loop = () => {
    rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
    gx += (mx - gx) * 0.07; gy += (my - gy) * 0.07;
    dot.style.translate = `${mx}px ${my}px`;
    ring.style.translate = `${rx}px ${ry}px`;
    glow.style.translate = `${gx - 280}px ${gy - 280}px`;
    if (Math.abs(mx - gx) + Math.abs(my - gy) > 0.5) requestAnimationFrame(loop);
    else running = false;
  };
  const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };

  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    if (!root.classList.contains("cursor-on")) { rx = e.clientX; ry = e.clientY; root.classList.add("cursor-on"); }
    mx = e.clientX; my = e.clientY;
    kick();
  }, { passive: true });
  addEventListener("pointerdown", () => ring.classList.add("down"));
  addEventListener("pointerup", () => ring.classList.remove("down"));
  document.addEventListener("pointerover", (e) => {
    const on = !!(e.target as Element).closest("a, button");
    ring.classList.toggle("hover", on);
    dot.classList.toggle("hover", on);
  });
  root.addEventListener("mouseleave", () => root.classList.remove("cursor-on"));
}
