# Jomlia Landing

Landing page de **Jomlia Solution Services** — empresa dominicana de climatización, electricidad y refrigeración (Santo Domingo, RD).

## Tecnologías

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **ESLint 9**

## Instalación

```bash
git clone https://github.com/FreddyAquinoPortes/jomlia-landing.git
cd jomlia-landing
npm install
```

## Scripts

| Comando         | Acción                            |
| --------------- | --------------------------------- |
| `npm run dev`   | Servidor de desarrollo en `:3000` |
| `npm run build` | Build de producción               |
| `npm run start` | Sirve el build en `:3000`         |
| `npm run lint`  | ESLint sobre todo el proyecto     |

## Estructura

```
jomlia-landing/
├── app/               # Rutas y layout (Next.js App Router)
├── components/        # Componentes React reutilizables
├── public/            # Assets estáticos (logo, imágenes)
├── docs/              # Documentación exportable
├── obsidian/          # Vault Obsidian del proyecto
└── .github/workflows/ # CI (build en push/PR)
```

## Documentación

El vault de Obsidian vive en [`obsidian/`](./obsidian). Empieza por [`00-Overview.md`](./obsidian/00-Overview.md).
