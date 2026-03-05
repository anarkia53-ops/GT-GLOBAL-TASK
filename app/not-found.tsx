import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-4 px-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-slate-300">The page you are looking for doesn’t exist in this build.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}
