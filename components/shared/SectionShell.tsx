import * as React from 'react'
import { cn } from '@/lib/utils'

export function SectionShell({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 md:py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  )
}
