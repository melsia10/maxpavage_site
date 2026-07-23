# maxpavage.be — Site Max Pavage

Refonte du site [maxpavage.be](https://www.maxpavage.be) (anciennement Odoo Website)
en site statique **Astro + TypeScript** : rapide, sans base de données, optimisé
SEO / Google Ads, avec une interface d'administration pour publier des réalisations.

## Commandes

```bash
npm install       # installer les dépendances
npm run dev       # serveur de développement (http://localhost:4321)
npm run check     # vérification TypeScript / Astro
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
```

## Structure

- `src/pages/` — les pages du site (mêmes URLs que l'ancien site Odoo)
- `src/content/realisations/` — les réalisations en Markdown (gérées via `/admin`)
- `src/data/site.ts` — coordonnées, réseaux sociaux, ID Google Ads
- `src/layouts/Base.astro` — SEO (meta, Open Graph, JSON-LD LocalBusiness) + balise Google Ads
- `public/admin/` — interface d'administration Decap CMS
- `deploy/` — nginx, Docker et instructions de déploiement Hetzner

## SEO / Google Ads

- Balise Google (gtag.js) `AW-18337275490` sur toutes les pages, avec événements
  `phone_call`, `email_click`, `cta_devis`, `form_submit` prêts à être mappés en
  conversions dans Google Ads.
- `sitemap-index.xml` généré au build, `robots.txt`, canoniques, Open Graph,
  données structurées LocalBusiness / Service / Article / FAQ.
- Redirections 301 des anciennes URLs Odoo dans `deploy/nginx.conf`.

## Formulaire de contact

Le formulaire envoie via [FormSubmit](https://formsubmit.co) vers
`info@maxpavage.be` (aucun serveur nécessaire). Au premier envoi, FormSubmit
enverra un e-mail de confirmation à cette adresse — cliquez le lien pour activer.
Alternative possible : brancher le backend Java existant, en changeant l'URL
`action` dans `src/components/ContactForm.astro`.

## Publication de contenu (la partie « admin »)

`https://www.maxpavage.be/admin` : connexion GitHub, création d'une réalisation
(titre, résumé, date, lieu, catégorie, photo de couverture, texte + photos).
Chaque publication crée un commit ; GitHub Actions rebuild et redéploie
automatiquement. Voir `deploy/README.md` pour l'activation (OAuth GitHub).
