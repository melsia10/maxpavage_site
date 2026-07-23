# Déploiement sur Hetzner

Le site est 100 % statique : le build (`npm run build`) produit un dossier `dist/`
que nginx sert tel quel. Deux options :

## Option A — rsync vers le nginx existant (recommandé)

1. Sur le serveur, créez un dossier, ex. `/var/www/maxpavage`.
2. Ajoutez le server block de `deploy/nginx.conf` à votre nginx (adaptez `root`),
   avec votre certificat TLS (certbot) comme pour l'app existante.
3. Dans GitHub → Settings → Secrets and variables → Actions, créez :
   - `HETZNER_HOST` : IP ou hostname du serveur
   - `HETZNER_USER` : utilisateur SSH
   - `HETZNER_SSH_KEY` : clé privée SSH (dédiée au déploiement)
   - `HETZNER_TARGET_DIR` : `/var/www/maxpavage`
4. Chaque push sur `main` (y compris ceux faits par l'admin `/admin`) rebuild et
   redéploie automatiquement le site.
5. Pointez le DNS de `maxpavage.be` / `www.maxpavage.be` vers le serveur, puis
   coupez l'abonnement Odoo une fois le site vérifié.

## Option B — conteneur Docker

`docker compose -f deploy/docker-compose.yml up -d --build` construit l'image
(build Astro + nginx) et l'expose sur le port 8080 ; branchez votre
reverse-proxy dessus.

## Admin (/admin) — connexion GitHub

L'admin Decap CMS écrit directement dans ce dépôt GitHub. Pour l'activer :

1. Invitez le compte GitHub de la cliente comme collaboratrice du dépôt
   (droit *Write*).
2. Créez une **GitHub OAuth App** (github.com → Settings → Developer settings) :
   - Homepage URL : `https://www.maxpavage.be`
   - Callback URL : `https://www.maxpavage.be/oauth/callback`
3. Lancez le service `oauth-proxy` (voir `docker-compose.yml`) avec le
   client ID/secret, et décommentez le bloc `location /oauth/` dans
   `deploy/nginx.conf`.
4. C'est tout : sur `https://www.maxpavage.be/admin`, bouton
   « Se connecter avec GitHub », puis création d'une réalisation avec titre,
   texte et photos. Chaque publication = un commit sur `main` → le workflow
   GitHub Actions rebuild et redéploie le site en ~2 minutes.

## Redirections importantes (SEO / Google Ads)

`deploy/nginx.conf` fait des 301 depuis les anciennes URLs Odoo
(`/our-services`, `/nos-réalisation`, `/blog/*/feed`) et force
`maxpavage.be` → `www.maxpavage.be`. Ne les supprimez pas : elles préservent
le référencement et les liens des campagnes existantes.
