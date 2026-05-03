# 04 — Deployment

## Plataforma recomendada: Vercel

Por ser el creador de Next.js, soporta App Router + Turbopack sin configuración.

## Pasos

1. Conectar el repo `FreddyAquinoPortes/jomlia-landing` en https://vercel.com/new.
2. Vercel autodetecta Next.js → no tocar build/output settings.
3. Añadir variables de entorno (si aplica) en *Project Settings → Environment Variables*.
4. Cada `git push` a `main` redepoya automáticamente.

## Dominio

- Apuntar `jomlia.com` (o subdominio) a Vercel:
  - `A` record → `76.76.21.21`
  - `CNAME www` → `cname.vercel-dns.com`

## Build local equivalente

```bash
npm run build && npm run start
```

Sirve en `:3000`. Útil para reproducir errores de prod localmente.

## CI

`.github/workflows/build.yml` corre `npm ci && npm run build` en cada push/PR. Falla → bloquea merge.

## Alternativas

- **Netlify** — soporta Next.js pero con plugin; menos óptimo que Vercel.
- **Self-host** — `next start` detrás de Nginx; viable pero pierdes ISR/edge.

Ver [[05-TODO]] para checklist pre-launch.
