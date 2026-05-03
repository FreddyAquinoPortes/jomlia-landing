# 01 — Setup

## Requisitos

- Node.js ≥ 20
- npm ≥ 10
- Git

## Clonar e instalar

```bash
git clone https://github.com/FreddyAquinoPortes/jomlia-landing.git
cd jomlia-landing
npm install
```

## Variables de entorno

Por ahora **ninguna**. Si se añade Formspree / WhatsApp API / Analytics, crear `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=18496581250
NEXT_PUBLIC_FORMSPREE_ID=xxx
```

`.env*` está en `.gitignore` — nunca commitear secretos.

## Comandos

| Script  | Uso                          |
| ------- | ---------------------------- |
| `dev`   | Dev server con HMR (`:3000`) |
| `build` | Build de producción          |
| `start` | Sirve build de producción    |
| `lint`  | ESLint + reglas Next.js      |

## Editor recomendado

- VS Code + extensiones: ESLint, Tailwind CSS IntelliSense, Prettier.

Ver siguiente: [[02-Architecture]].
