import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/execution-intelligence', label: 'Execution Intelligence' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/insights', label: 'Insights' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' }
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="GT" width={34} height={34} priority />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">GT Global Task</div>
            <div className="text-[11px] text-slate-300">Execution Intelligence Platform</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-200/90 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#start">
            <Button size="sm">Start Diagnostic</Button>
          </Link>
          <Link href="/login" className="hidden sm:block">
            <Button size="sm" variant="secondary">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
