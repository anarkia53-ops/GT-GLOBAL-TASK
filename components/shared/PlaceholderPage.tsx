import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function PlaceholderPage({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {description ?? 'This page is intentionally left as a placeholder and will be implemented in the next phase.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
          <Link href="/#start">
            <Button variant="secondary">Start Diagnostic</Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
