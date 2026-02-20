# BRAYN - Refonte Site Web

Landing page moderne pour BRAYN, cabinet de conseil stratégique en IA Générative.

## 🎨 Design

- **Theme**: Dark mode élégant avec accents néon cyan/violet
- **Typographie**: Clash Display (titres) + Plus Jakarta Sans (corps)
- **Animations**: Framer Motion pour des transitions fluides
- **Effets**: Glassmorphism, glow effects, gradient animés

## 🚀 Stack Technique

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## 📁 Structure

```
app/
├── components/
│   ├── Hero.tsx        # Section principale avec CTA
│   ├── Services.tsx    # 3 offres de service
│   ├── UseCases.tsx    # Cas d'usage avec chiffres
│   ├── WhyChoose.tsx   # Différenciateurs
│   ├── Testimonials.tsx # Témoignages clients
│   ├── Contact.tsx     # Formulaire de contact
│   └── Footer.tsx      # Pied de page
├── page.tsx            # Page principale
├── layout.tsx          # Layout root
└── globals.css         # Styles globaux
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📦 Build

```bash
npm run build
```

Le build statique est généré dans le dossier `dist/`.

## 🌐 Déploiement

Déployé via Coolify sur l'infrastructure Kabuki.

---

**Projet**: Refonte BRAYN  
**Créé par**: Kabuki Team  
**Date**: Février 2026
