export const runtime = 'nodejs'

export async function GET() {
  return Response.json({ ok: true, service: 'gt-global-task', timestamp: new Date().toISOString() })
}
