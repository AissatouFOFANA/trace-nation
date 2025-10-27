# Trace Nation

Application web moderne de gestion et de suivi, construite avec React, TypeScript et Vite.

## 🚀 Technologies utilisées

- **Framework**: React 18 avec TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (basé sur Radix UI)
- **Styling**: Tailwind CSS
- **Gestion d'état**: React Query
- **Authentification**: Supabase
- **Validation de formulaire**: React Hook Form
- **Icônes**: Lucide Icons
- **Utilitaires**: date-fns, clsx, class-variance-authority

## 🛠️ Prérequis

- Node.js 16+ et npm 8+
- Compte Supabase (pour l'authentification et la base de données)

## 🚀 Installation

1. **Cloner le dépôt**
   ```bash
   git clone <URL_DU_DEPOT>
   cd trace-nation
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env` à la racine du projet avec les variables suivantes :
   ```
   VITE_SUPABASE_URL=votre_url_supabase
   VITE_SUPABASE_ANON_KEY=votre_anon_key
   ```

4. **Démarrer l'application en mode développement**
   ```bash
   npm run dev
   ```
   L'application sera disponible à l'adresse : http://localhost:5173

## 📦 Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévient l'application construite localement
- `npm run lint` - Exécute le linter

## 🏗️ Structure du projet

```
src/
├── components/    # Composants réutilisables
├── pages/        # Pages de l'application
├── lib/          # Utilitaires et configurations
├── hooks/        # Hooks personnalisés
├── contexts/     # Contextes React
├── utils/        # Fonctions utilitaires
└── types/        # Définitions de types TypeScript
```

## 📝 Fonctionnalités

- Authentification utilisateur
- Interface utilisateur moderne et réactive
- Formulaires avec validation
- Gestion d'état avancée avec React Query
- Thème clair/sombre
- Composants accessibles

## 📄 Licence

Ce projet est sous licence MIT.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5b213fc3-d4dd-4aab-871f-89e81ab293ce) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
