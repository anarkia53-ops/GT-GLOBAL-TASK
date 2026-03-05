import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, Waves } from 'lucide-react'

export function ExecutiveVoiceBrief() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Waves className="h-4 w-4" /> Executive Voice Brief
          </CardTitle>
          <CardDescription>Weekly audio brief (preview component)</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" aria-label="Play">
            <Play className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" aria-label="Pause">
            <Pause className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">This Week — Execution Snapshot</span>
            <span className="text-slate-200">03:12</span>
          </div>
          <div className="mt-4 h-12 rounded-xl border border-white/10 bg-white/5" />
          <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-3">
            <div>
              <div className="text-xs text-slate-400">Theme</div>
              <div className="text-slate-200">Alignment → pace</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Top risk</div>
              <div className="text-slate-200">Dependency churn</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Next action</div>
              <div className="text-slate-200">Decision sync</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
