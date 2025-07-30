const Parser = require("rss-parser");
const parser = new Parser();
const fs = require("fs");

const fluxRSS = [
  "https://alcasthq.com/feed/",
  "https://deltiasgaming.com/category/eso/feed/",
  "https://www.hacktheminotaur.com/eso-guides?format=rss",
];

const keywords = [
  "eso",
  "bomber",
  "nightblade",
  "u46",
  "build",
  "bow",
  "necromancer",
];

console.log("script lancé");

(async () => {
  // Chargement des liens déjà vus
  let liensVus = [];
  try {
    const data = fs.readFileSync("vues.json", "utf-8");
    liensVus = JSON.parse(data);
  } catch (err) {
    console.error("Erreur lecture vues.json :", err.message);
  }

  // Récupération et traitement de chaque flux
  for (const url of fluxRSS) {
    try {
      const feed = await parser.parseURL(url);
      console.log(`🔗 Source : ${feed.title}`);

      feed.items.forEach((item) => {
        const titre = item.title.toLowerCase();
        const lien = item.link;

        const contientMotCle = keywords.some((mot) => titre.includes(mot));
        const dejaVu = liensVus.includes(lien);

        if (contientMotCle && !dejaVu) {
          console.log("• " + item.title);
          console.log("  ↳ " + lien);
          liensVus.push(lien);
        }
      });
    } catch (err) {
      console.error(`Erreur avec le flux ${url} :`, err.message);
    }
  }

  // Sauvegarde des nouveaux liens vus
  try {
    fs.writeFileSync("vues.json", JSON.stringify(liensVus, null, 2));
  } catch (err) {
    console.error("Erreur écriture vues.json :", err.message);
  }
})();
