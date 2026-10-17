// Generuje src/icons.ts tylko z ikonkami Lucide, których strona faktycznie używa
// (zamiast importować cały zestaw ~1500 ikon).
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";

const files = ["index.html", "projekt.html", ...readdirSync("src").filter((f) => f.endsWith(".ts") && f !== "icons.ts").map((f) => `src/${f}`)];
const names = new Set();
for (const f of files) {
  const s = readFileSync(f, "utf8");
  for (const m of s.matchAll(/data-lucide="([a-z0-9-]+)"/g)) names.add(m[1]);
  for (const m of s.matchAll(/["'`]([a-z][a-z0-9]*(?:-[a-z0-9]+)*)["'`]/g)) names.add(m[1]);
}
const pascal = (n) => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const used = [...names].filter((n) => existsSync(`node_modules/lucide/dist/esm/icons/${n}.mjs`)).sort();
writeFileSync(
  "src/icons.ts",
  `// Plik generowany przez scripts/gen-icons.mjs — nie edytuj ręcznie.\nimport { ${used.map(pascal).join(", ")} } from "lucide";\n\nexport const icons = { ${used.map(pascal).join(", ")} };\n`,
);
console.log(`icons.ts: ${used.length} ikon`);
