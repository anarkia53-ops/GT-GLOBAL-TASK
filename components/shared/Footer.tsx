import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold">GT Global Task</div>
          <p className="mt-2 text-sm text-slate-300">
            Execution intelligence you can govern — built for leaders who want visibility, control, and pace.
          </p>
        </div>
        <div className="text-sm text-slate-300">
          <div className="font-semibold text-slate-200">Links</div>
          <div className="mt-2 grid gap-2">
            <Link className="hover:text-white" href="/platform">Platform</Link>
            <Link className="hover:text-white" href="/ecosystem">Ecosystem</Link>
            <Link className="hover:text-white" href="/insights">Insights</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
        <div className="text-sm text-slate-300">
          <div className="font-semibold text-slate-200">Status</div>
          <p className="mt-2">Early-stage platform. Pages outside Home are placeholders ready for activation.</p>
          <p className="mt-3 text-xs text-slate-400">© {new Date().getFullYear()} GT Global Task. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
