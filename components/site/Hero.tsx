import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Mic, ShieldAlert, Activity } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Execution Intelligence Platform</Badge>
              <Badge className="bg-white/6">Build execution you can govern</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Hi CEO!{' '}
              <span className="text-slate-200/90">Your execution risk is measurable.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-300">
              GT turns scattered signals into a governed execution system: diagnose risk, generate a voice brief, and act inside a
              command-center dashboard.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#platform">
                <Button size="lg">Run AI Diagnostic</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="secondary">Login</Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <MiniStat icon={<ShieldAlert className="h-4 w-4" />} label="Risk" value="Monitored" />
              <MiniStat icon={<Activity className="h-4 w-4" />} label="Signals" value="Unified" />
              <MiniStat icon={<Mic className="h-4 w-4" />} label="Brief" value="Executive" />
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle>Executive Risk Meter</CardTitle>
                <CardDescription>Sample preview (static)</CardDescription>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/6 px-3 py-2 text-xs text-slate-200">
                <Mic className="h-4 w-4" /> Voice Assistant
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">Current risk</div>
                  <div className="text-sm font-semibold">Moderate</div>
                </div>
                <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/6">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-gt-glowBlue/80 to-gt-glowViolet/80" />
                </div>
                <div className="mt-4 grid gap-2 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Delivery volatility</span>
                    <span className="text-slate-200">+18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dependency pressure</span>
                    <span className="text-slate-200">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Execution clarity</span>
                    <span className="text-slate-200">Needs alignment</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Image src="/assets/logo.png" alt="GT" width={28} height={28} />
                <div className="text-sm">
                  <div className="font-medium">Mic-ready assistant</div>
                  <div className="text-xs text-slate-300">Ask: “What is driving risk this week?”</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/7 border border-white/10">{icon}</span>
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold">{value}</div>
    </div>
  )
}
