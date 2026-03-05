import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function Insights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights</CardTitle>
        <CardDescription>Example intelligence output — real insights activate after integrations + scans.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-3">
          <InsightCard title="Execution Drift" body="Volatility rising across two dependencies. Recommend a decision sync within 48h." />
          <InsightCard title="Ownership Gap" body="Ambiguous decision rights on one deliverable. Assign a single owner and SLA." />
          <InsightCard title="Risk Contagion" body="One blocked item propagates to three initiatives. Add a mitigation branch now." />
        </div>
      </CardContent>
    </Card>
  )
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  )
}
