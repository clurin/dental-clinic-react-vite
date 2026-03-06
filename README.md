# Dental Clinic Frontend

React + TypeScript + Vite frontend for dental clinic operations: overview, patients, visits, services, payments, and staff management.

## Tech Stack
- React 19
- TypeScript 5
- Vite 7
- Redux Toolkit + RTK Query
- React Router 7
- Tailwind CSS 4

## Requirements
- Node.js 20+
- npm 10+

## Getting Started
```bash
npm install
npm run dev
```

App runs at `http://localhost:5173` by default.

## Environment Variables
API base URL is configured in `src/app/api.ts` and Vite proxy in `vite.config.ts`.

- `VITE_API_URL` (optional)
  - Default: `/api`
  - Used by RTK Query as base URL
- `VITE_DEV_API_TARGET` (optional, dev only)
  - Default: `http://localhost:4000`
  - Used by Vite dev server proxy for `/api`

### Typical Local Setup
Create `.env.local`:
```env
VITE_API_URL=/api
VITE_DEV_API_TARGET=http://localhost:4000
```

## Scripts
- `npm run dev` - start development server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Routing
Main routes are configured in `src/App.tsx`:
- `/overview`
- `/patients`
- `/visits`
- `/services`
- `/payments`
- `/staff`

Root path `/` redirects to `/overview`.

## Project Structure
```text
src/
  app/
    api.ts              # RTK Query base API
    endpoints.ts        # endpoint constants
    *Api.ts             # feature API slices
    models/             # TypeScript domain types
    schemas/            # validation schemas
    store.ts            # Redux store
  components/           # UI components (tables, modals, layout)
  pages/                # route pages
  features/             # shared helpers
```

## Build Notes
Vite manual chunks are configured in `vite.config.ts` for:
- `react`
- `redux`
- `charts`

## Known Constraints
- Backend API must provide routes compatible with constants in `src/app/endpoints.ts`.
- In production, if `VITE_API_URL` is not `/api`, ensure CORS and deployment routing are configured accordingly.

<img width="3076" height="1405" alt="Drawing 2026-03-06 17 56 50 excalidraw" src="https://github.com/user-attachments/assets/2b70e482-82a0-4b24-ac0b-f996e7155100" />
