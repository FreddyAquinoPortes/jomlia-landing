# 02 — Architecture

## Árbol

```
jomlia-landing/
├── app/
│   ├── layout.tsx       # Root layout (fuentes, metadata)
│   ├── page.tsx         # Landing one-page (compone los componentes)
│   ├── globals.css      # Tailwind base + tokens
│   └── favicon.ico
├── components/          # UI (ver [[03-Components]])
├── public/              # Imágenes, logo SVG
├── obsidian/            # Este vault
├── docs/                # Docs exportables (build a Markdown plano)
└── .github/workflows/   # CI
```

## App Router (Next.js)

- `app/layout.tsx` → wrapper global, define `<html>`, `<body>`, fuentes y metadata SEO.
- `app/page.tsx` → ruta `/`. Importa todos los componentes y los compone en orden:
  `Navbar → Hero → Servicios → Nosotros → Marcas → Cta → Contacto → Footer + WhatsAppFloat`.

## Alias de imports

Configurado en [`tsconfig.json`](../tsconfig.json):

```json
"paths": { "@/*": ["./*"] }
```

Permite `import Navbar from "@/components/Navbar"` desde cualquier archivo.

## Estilos

- **Tailwind v4** vía `@tailwindcss/postcss` — sin `tailwind.config.js`, todo se configura en `globals.css` con `@theme`.
- Tokens de marca (colores, fuentes) viven en `app/globals.css`.

## Decisiones

- **Componentes en raíz `/components`** y no en `/app/_components` → reutilizables si se añaden más rutas.
- **Sin estado global** (Zustand, Redux) → la landing es estática; cualquier interacción (formulario) es local al componente.

Ver siguiente: [[03-Components]].
