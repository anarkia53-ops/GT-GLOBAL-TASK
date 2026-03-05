# GT Global Task — Stable Scaffold

## What you get
- Public Website + Client Platform (/app)
- **Home page contains the full command-center experience** (Hi CEO → Diagnostic → Voice Brief → Dashboard Preview → Ecosystem → Insights → Start → Login)
- All other public pages and /app routes are **placeholders** (same layout, ready for future development)
- Offline-safe diagnostic reply (no external dependency) + API placeholders under `/api/*`

## Run (first time)
```bash
npm install
npm run dev
```
Then open: http://localhost:3000

## Health check
- `GET /api/health`

## OpenAI
This stable scaffold intentionally does **not** make external OpenAI calls.
When you’re ready, wire the OpenAI client under `lib/openai/` and enable `/api/diagnostic` live mode.

## Notes
- Assets are sourced from the provided prototype: `public/assets/bg.png` and `public/assets/logo.png`.
- Dark-only UI with glass + neon accents.
