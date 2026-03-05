import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold">/app — Client Platform (Placeholder)</div>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button size="sm" variant="secondary">Public Site</Button>
            </Link>
            <Link href="/app/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
    </div>
  )
}
