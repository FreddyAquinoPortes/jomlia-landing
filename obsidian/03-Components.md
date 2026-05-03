# 03 — Components

Todos los componentes viven en [`/components`](../components) y son **Server Components** salvo cuando necesitan interactividad (`"use client"`).

## Inventario

| Componente        | Archivo                                                | Propósito                                              |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `Navbar`          | [Navbar.tsx](../components/Navbar.tsx)                 | Logo + nav links + CTA pill                            |
| `Hero`            | [Hero.tsx](../components/Hero.tsx)                     | Full-bleed con headline + 2 CTAs                       |
| `Servicios`       | [Servicios.tsx](../components/Servicios.tsx)           | Grid de las 10 categorías de servicio                  |
| `Nosotros`        | [Nosotros.tsx](../components/Nosotros.tsx)             | Sección "sobre nosotros" + valores                     |
| `Marcas`          | [Marcas.tsx](../components/Marcas.tsx)                 | Logos de marcas distribuidas (ComfortStar, Lennox…)   |
| `CtaSection`      | [CtaSection.tsx](../components/CtaSection.tsx)         | Banda intermedia con CTA fuerte                        |
| `Contacto`        | [Contacto.tsx](../components/Contacto.tsx)             | Formulario cotización + mapa + datos                   |
| `Footer`          | [Footer.tsx](../components/Footer.tsx)                 | Enlaces, copyright, redes                              |
| `WhatsAppFloat`   | [WhatsAppFloat.tsx](../components/WhatsAppFloat.tsx)   | Botón flotante verde bottom-right                      |

## Convenciones

- **Un componente por archivo**, mismo nombre que el archivo (PascalCase).
- **Tipado:** props con `interface` local; sin `React.FC`.
- **Estilos:** clases Tailwind directas; sin CSS modules.
- **Assets:** SVGs en `/public`, importados como `<img src="/logo.svg" />`.

## Ver también

- [[02-Architecture]] — composición en `app/page.tsx`.
- [[05-TODO]] — mejoras pendientes por componente.
