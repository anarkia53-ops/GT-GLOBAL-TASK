import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function DashboardPreview() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Intelligence Dashboard</CardTitle>
            <CardDescription>Preview — client dashboards live under /app (placeholders in this build)</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Portfolio</Badge>
            <Badge>Risk Monitor</Badge>
            <Badge>Ecosystem</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <Panel title="Risk Heat" lines={[62, 44, 71]} />
          <Panel title="Delivery" lines={[38, 55, 41]} />
          <Panel title="Signals" lines={[80, 60, 66]} />
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-5">
          <div className="text-sm font-semibold">Action Queue</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Row label="Unblock dependency: Data pipeline" status="High" />
            <Row label="Align owners: Q2 initiative" status="Medium" />
            <Row label="Finalize scope: partner delivery" status="Low" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Panel({ title, lines }: { title: string; lines: number[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 space-y-2">
        {lines.map((w, i) => (
          <div key={i} className="h-2 w-full rounded-full bg-white/6">
            <div className="h-2 rounded-full bg-gradient-to-r from-gt-glowBlue/70 to-gt-glowViolet/70" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Row({ label, status }: { label: string; status: 'High' | 'Medium' | 'Low' }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-slate-200">{label}</div>
      <div className="text-xs text-slate-300">{status}</div>
    </div>
  )
}
