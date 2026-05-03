# 00 — Overview

## Proyecto

**Jomlia Landing** — sitio web one-page para [[Jomlia Solution Services]], empresa dominicana de climatización, electricidad y refrigeración.

## Objetivo

Comunicar propuesta de valor, listar servicios y captar leads vía formulario de cotización y WhatsApp.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript 5
- Tailwind CSS v4
- Deploy objetivo: Vercel

## Identidad visual

- **Paleta:** Navy `#003087`, Rojo `#CC0000`, Blue `#1B5EAD`, Dark `#1A1A2E`
- **Tipografía:** Inter Bold 700–900
- **Estilo:** *Industrial Comfort* (sólido + cálido)

## Navegación rápida

- [[01-Setup]] — instalación y entorno
- [[02-Architecture]] — estructura del código
- [[03-Components]] — componentes UI
- [[04-Deployment]] — despliegue
- [[05-TODO]] — pendientes

## Decisiones clave

- **App Router** sobre Pages Router → Next.js 16 lo recomienda como default; Server Components reducen JS en cliente.
- **Tailwind v4** sobre CSS modules → el proyecto es one-page con muchas utilidades repetidas.
- **Sin librería de componentes** (Shadcn/MUI) → solo 9 componentes propios; añadir una librería sería overkill.
