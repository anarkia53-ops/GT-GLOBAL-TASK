import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const modules = [
  'Diagnostic Engine',
  'Voice Brief Studio',
  'Portfolio Intelligence',
  'Risk Modeling',
  'Execution Network Map',
  'Audit & Governance'
] as const

export function EcosystemHub() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>AI‑Driven Intelligence Ecosystem</CardTitle>
            <CardDescription>Hub‑and‑spoke architecture (2D preview; 3D map planned)</CardDescription>
          </div>
          <Badge>GT Core Intelligence</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="text-sm font-semibold">GT Hub</div>
            <p className="mt-2 text-sm text-slate-300">
              Normalizes signals, enforces governance, and generates decisions. Each module can be activated independently.
            </p>
            <div className="mt-4 grid gap-2">
              {modules.map((m) => (
                <div key={m} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="text-sm font-semibold">Network View</div>
            <p className="mt-2 text-sm text-slate-300">
              Visualizes teams, partners, projects, dependencies, and risk propagation.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <div className="relative h-[260px] w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-gradient-to-br from-gt-glowBlue/25 to-gt-glowViolet/25" />
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-9 w-9 rounded-full border border-white/12 bg-black/30"
                    style={{
                      left: `${12 + (i * 12) % 76}%`,
                      top: `${14 + ((i * 17) % 72)}%`
                    }}
                  />
                ))}
                <div className="absolute inset-0 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
