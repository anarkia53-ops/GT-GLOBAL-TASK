export const runtime = 'nodejs'

type Body = { message?: string }

export async function POST(req: Request) {
  let body: Body | null = null
  try {
    body = (await req.json()) as Body
  } catch {
    body = null
  }

  const message = (body?.message ?? '').toString().slice(0, 4000)
  const openaiKey = process.env.OPENAI_API_KEY

  // Stable behavior: if key missing, return a deterministic placeholder instead of throwing.
  if (!openaiKey) {
    return Response.json(
      {
        mode: 'placeholder',
        reply:
          'OpenAI is not configured in this build. Add OPENAI_API_KEY to your environment to activate live diagnostics.\n\nFor now: define your 30‑day outcome, list top 3 blockers, and name the single decision that would accelerate execution this week.',
        input: message
      },
      { status: 200 }
    )
  }

  // Live mode intentionally not implemented in this stable placeholder release.
  // We return a clear message instead of performing a partially-configured network call.
  return Response.json(
    {
      mode: 'disabled',
      reply:
        'OPENAI_API_KEY detected, but live diagnostic calls are intentionally disabled in this stable scaffold. Enable in lib/openai when ready.',
      input: message
    },
    { status: 200 }
  )
}
