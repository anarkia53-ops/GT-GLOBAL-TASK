import { Hero } from '@/components/site/Hero'
import { DiagnosticChat } from '@/components/site/DiagnosticChat'
import { ExecutiveVoiceBrief } from '@/components/site/ExecutiveVoiceBrief'
import { DashboardPreview } from '@/components/site/DashboardPreview'
import { EcosystemHub } from '@/components/site/EcosystemHub'
import { Insights } from '@/components/site/Insights'
import { StartLoginCTA } from '@/components/site/StartLoginCTA'
import { SectionShell } from '@/components/shared/SectionShell'

export default function HomePage() {
  return (
    <div>
      <section className="pb-16">
        <Hero />
      </section>

      <SectionShell id="platform">
        <div className="grid gap-6">
          <DiagnosticChat />
        </div>
      </SectionShell>

      <SectionShell id="execution" className="pt-0">
        <div className="grid gap-6">
          <ExecutiveVoiceBrief />
          <DashboardPreview />
        </div>
      </SectionShell>

      <SectionShell id="ecosystem" className="pt-0">
        <EcosystemHub />
      </SectionShell>

      <SectionShell id="insights" className="pt-0">
        <Insights />
      </SectionShell>

      <SectionShell id="start" className="pt-0">
        <StartLoginCTA />
      </SectionShell>

      <SectionShell id="login" className="pt-0">
        {/* Kept as an anchor target for the prototype nav; real login page is /login */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="glass neon rounded-2xl p-6 text-sm text-slate-300">
            Login is available at <span className="text-slate-100">/login</span>. The /app routes are placeholders ready for activation.
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
