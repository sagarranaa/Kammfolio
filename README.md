# Kaamfolio — local frontend

Complete React + TypeScript + Vite frontend. Runs on Windows, macOS, Linux and WSL.

## Run locally

Install Node.js 22.13 or newer (npm included). Extract the ZIP and open the kaamfolio folder in VS Code. In its terminal:

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or the URL printed in the terminal if that port is busy). No backend, API keys, environment variables or hosting account required. Installation needs internet access. Stop the server with Ctrl+C.

Alternatively, use the included pnpm lockfile:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Build for hosting

```bash
npm run build
npm run preview
```

Preview at http://localhost:4173. The dist folder can be deployed to static hosting. Do not open index.html with file://.

## Entry points

- index.html and src/main.tsx: app entry.
- components/kaamfolio/marketplace.tsx: main UI.
- app/globals.css: styles.
- lib/kaamfolio/: data models, fixtures and browser persistence.
- public/images/: bundled demo images.

This portable export uses standard Vite instead of the hosted preview wrapper, keeping the same frontend UI. The source dependency catalog and pnpm lockfile are retained for compatibility, including some unused packages.

## Implemented

- Responsive discovery, keyword search (names, skills and tools), trade and city filtering, availability and experience filters, sorting.
- Professional portfolio details with photos, video playback, toolkit, experience and starting prices.
- Browser-local saved professionals and profile editing.
- Browser-local photo/video portfolio uploads, per-project tools and editable owned-tool inventory.
- Accessible Radix dialogs, tabs, checkbox and select components.
- Empty states, file validation, storage-failure messages, responsive mobile navigation.

All people, ratings and job histories are fictional demonstration data. Third-party photos illustrate trades and are not actual work performed by these fictional people. There are no real accounts, reviews, hiring requests, messages, payments or bookings.

## Architecture

- `lib/kaamfolio/types.ts`: framework-independent Professional and Work types.
- `lib/kaamfolio/data.ts`: isolated fixtures.
- `lib/kaamfolio/repository.ts`: versioned browser-local persistence adapter.
- `components/kaamfolio/`: presentation and frontend interactions.
- `app/`: global styles. `src/main.tsx`: React entry.

The UI currently has three client-side sections at `/`. They are not separately shareable profile routes yet.

## Demo persistence limits

This version uses localStorage with a versioned key, stores small uploaded files as data URLs, and accepts JPG, PNG, WebP, MP4 and WebM up to 2 MB each. Browser storage has a quota and is device-specific; it is not cloud upload or a production media solution. Upload failures leave the previous portfolio intact. Clearing browser storage deletes demo edits. Do not upload sensitive documents.

## Backend roadmap

1. Introduce phone OTP/authentication, server-side ownership checks and roles for professionals and customers.
2. Replace the demo repository with an API service; use paginated profile search and indexed city/trade queries. Validate payloads on the server.
3. Store media in object storage using signed uploads. Enforce file validation, ownership, quotas, malware scanning and deletion. Process video asynchronously into thumbnails and streaming variants. Deliver through a CDN.
4. Persist profiles, project media references, owned tools and saved relationships in a database. Add unique constraints and migrations.
5. Add hiring requests, messaging, availability and moderated reviews only after ownership and authorization are in place.
6. Add rate limiting, monitoring, backups, audit events, moderation/reporting and meaningful API integration tests before real users.

Frontend separation prepares later integration; it does not establish backend scale, security or load capacity. No load testing has been performed.

## React Native plan

Share the domain models, validation and API client in a workspace package. Build native screens separately with Expo/React Native. Web HTML/CSS and Radix components are not portable native UI. Replace browser persistence with native storage, use a native media picker, and consume the same authenticated API and object-storage pipeline. Keep tokens in secure native storage.

## Image sources

Demo-only illustrative assets. Obtain licensed originals before public commercial launch.

- Plumbing: https://www.archionline.com/actualites/renover-salle-de-bain-5-etapes/
- Electrical: https://www.samelect.fr/realisations-techniques-saint-nazaire/
- Cabinetry: https://victoryinstallers.com/
- Painting: https://ilivetopaintinkelo.wixsite.com/painters-in-kelowna/post/what-does-a-house-painter-do-and-why-should-you-hire-one
- AC service: https://www.servis-klima-beograd.com/

## Checks

`npm run typecheck` validates TypeScript. `npm run build` validates production compilation. Browser QA and optional WebMCP runtime verification require a supported browser environment. The search tool is feature-detected and does not affect browsers without WebMCP.
