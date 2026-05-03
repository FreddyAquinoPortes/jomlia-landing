# 05 — TODO

## Pre-launch

- [ ] Vectorizar logo final en SVG limpio (reemplazar `public/logo.svg`)
- [ ] Reemplazar imágenes placeholder por fotos reales del equipo y trabajos
- [ ] Conectar formulario de [[03-Components|Contacto]] a Formspree o WhatsApp API
- [ ] Verificar número de WhatsApp en [[03-Components|WhatsAppFloat]]
- [ ] Embed real de Google Maps en `Contacto`
- [ ] Optimizar imágenes a WebP / AVIF

## SEO

- [ ] Metadata por sección en `app/layout.tsx`
- [ ] Schema.org `LocalBusiness` con dirección y teléfono
- [ ] Sitemap (`app/sitemap.ts`) y `robots.txt`
- [ ] Open Graph image (1200×630)

## Performance

- [ ] Lighthouse > 90 mobile
- [ ] Auditar bundle (`@next/bundle-analyzer`)
- [ ] Lazy-load secciones below-the-fold

## QA

- [ ] Test responsive: 360 / 768 / 1280 / 1920
- [ ] Test cross-browser: Chrome, Safari iOS, Firefox
- [ ] Validar accesibilidad: contraste, alt text, navegación con teclado

## Infra

- [ ] Conectar dominio `jomlia.com` (ver [[04-Deployment]])
- [ ] SSL automático en Vercel
- [ ] Google Analytics 4 + Search Console
- [ ] Backup del repo (mirror a GitLab opcional)

## Mejoras post-launch

- [ ] Blog `/blog` con MDX para SEO de cola larga
- [ ] Página de portafolio de trabajos realizados
- [ ] Calculadora BTU según m² (apoyando el servicio "Asesoría en Tamaño de Aire")
