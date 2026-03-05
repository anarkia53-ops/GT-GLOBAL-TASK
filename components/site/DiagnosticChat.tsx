'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MessageSquare, Sparkles } from 'lucide-react'

type Msg = { role: 'user' | 'assistant'; text: string }

const seed: Msg[] = [
  {
    role: 'assistant',
    text: 'Hello. I’m GT Diagnostic. Tell me what you’re trying to execute — and what feels unstable right now.'
  }
]

export function DiagnosticChat() {
  const [messages, setMessages] = React.useState<Msg[]>(seed)
  const [draft, setDraft] = React.useState('')
  const [busy, setBusy] = React.useState(false)

  const send = async () => {
    const text = draft.trim()
    if (!text || busy) return

    setDraft('')
    setMessages((m) => [...m, { role: 'user', text }])

    // Local deterministic response (no external dependency) to guarantee "works on first run".
    setBusy(true)
    try {
      const reply = buildDeterministicReply(text)
      await new Promise((r) => setTimeout(r, 280))
      setMessages((m) => [...m, { role: 'assistant', text: reply }])
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> AI Diagnostic Tool
            </CardTitle>
            <CardDescription>Chat-based diagnostic (offline-safe placeholder). OpenAI API hook is ready for activation.</CardDescription>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs text-slate-200">
            <Sparkles className="h-4 w-4" /> Diagnostic Mode
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[280px] overflow-auto rounded-2xl border border-white/10 bg-black/25 p-4">
          <div className="space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    (m.role === 'user'
                      ? 'bg-gradient-to-r from-gt-glowBlue/25 to-gt-glowViolet/25 border-white/15'
                      : 'bg-white/6 border-white/10') +
                    ' max-w-[92%] rounded-2xl border px-3 py-2 text-sm text-slate-100'
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-200">
                  Thinking…
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Describe your execution: goals, teams, blockers, deadlines…"
            onKeyDown={(e) => {
              if (e.key === 'Enter') send()
            }}
          />
          <Button onClick={send} disabled={busy || !draft.trim()}>
            Send
          </Button>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Note: This build ships with an offline-safe diagnostic reply to ensure zero runtime dependencies. When you enable OpenAI,
          switch the reply source to /api/diagnostic.
        </p>
      </CardContent>
    </Card>
  )
}

function buildDeterministicReply(input: string): string {
  const bullets = [
    'Scope clarity (what “done” means)',
    'Dependency map (who/what must happen first)',
    'Cadence (weekly scan + brief)',
    'Risk triggers (signals that indicate drift)',
    'Decision rights (who can unblock)'
  ]
  const hint = input.length > 80 ? 'I see multiple threads. Let’s isolate the highest-impact execution path first.' : 'Let’s focus on the core execution path.'

  return [
    `${hint}`,
    '',
    'Quick diagnostic checklist:',
    ...bullets.map((b, i) => `${i + 1}. ${b}`),
    '',
    'Answer this in one line: What outcome must be true in 30 days for you to call this “on track”?'
  ].join('\n')
}
