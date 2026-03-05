import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import type { ReactNode } from 'react'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.05) contrast(1.05)'
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-gt-bg" />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
