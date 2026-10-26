# Cozy Pieces ❄️

A real two-player cooperative jigsaw game built around the supplied photo. It uses a Socket.IO room as the single source of truth: swaps, progress, shared hints, chat, restarts, and completion all go through the Node server before both clients are updated.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173`) in two browsers or a normal and incognito window. If port 5173 is already in use, Vite selects another available port. Create a room in one, then enter the six-character code in the other. The host starts the countdown.

The frontend is on port 5173 and the Socket.IO/Express server is on port 3001. `npm run dev` builds once and uses Vite Preview for the most reliable local Windows startup; use `npm run dev:hot` if you specifically need hot reload. Copy `.env.example` to `.env` to set `VITE_SERVER_URL` for a deployed frontend. The backend reads `PORT`.

## Project map

- `client/` — React 19 + Vite interface, dnd-kit interaction, Canvas jigsaw image generation, Zustand UI state, Framer Motion feedback.
- `server/` — Express/Socket.IO authoritative room manager.
- `shared/types/` — common room, piece, and typed Socket.IO event contracts.

The default source image is in `client/src/assets/reference-image.jpeg`. Replace that asset to use another image; the Canvas renderer will crop the new source into jigsaw pieces while preserving the reference panel aspect ratio.

## Deployment

Deploy `client` to Vercel with `npm run build -w client`, and deploy `server` to Render with `npm run build -w server` / `npm run start -w server`. Set Vercel's `VITE_SERVER_URL` to the public Render URL and configure CORS appropriately for the final domain.
