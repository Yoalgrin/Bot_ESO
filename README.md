# BOT ESO – Veille Automatique Builds (V1)

Un bot personnel de veille pour **The Elder Scrolls Online (ESO)**.  
Il analyse automatiquement plusieurs **flux RSS** de sites spécialisés et affiche uniquement les **nouveaux builds ou articles** contenant des mots-clés définis.

---

## 🎯 Objectif

- Être notifié automatiquement lorsqu’un **nouveau build ESO** est publié (PvP, PvE, par classe, etc.)
- Se concentrer sur les builds depuis la mise à jour **U46**
- Ne pas recevoir de doublons (mémoire intégrée)

---

## ⚙️ Fonctionnalités actuelles (V1)

- Lecture quotidienne de plusieurs **flux RSS** ESO
- **Filtrage par mots-clés** (ex : `eso`, `bomber`, `nightblade`, `u46`, etc.)
- Évite les doublons grâce à un fichier `vues.json`
- Planifiable avec `node-cron` (exécution automatique chaque jour à 8h)
- Prêt à évoluer (Discord, Web Scraping, interface web...)

---

## 🧪 Sites suivis via RSS

- [AlcastHQ](https://alcasthq.com/) → `https://alcasthq.com/feed/`
- [Deltia's Gaming](https://deltiasgaming.com/) → `https://deltiasgaming.com/category/eso/feed/`
- [Hack the Minotaur](https://www.hacktheminotaur.com/) → `https://www.hacktheminotaur.com/eso-guides?format=rss`

---

## 📦 Installation

```bash
git clone https://github.com/<ton-user>/bot-eso.git
cd bot-eso
npm install
