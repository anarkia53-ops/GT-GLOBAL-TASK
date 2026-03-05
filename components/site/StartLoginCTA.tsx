import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function StartLoginCTA() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Start Diagnostic</CardTitle>
        <CardDescription>Enter the command center. Run the diagnostic, then move into /app.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Link href="#platform">
          <Button size="lg">Start Diagnostic</Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="secondary">Login</Button>
        </Link>
        <Link href="/app/dashboard">
          <Button size="lg" variant="ghost">Open /app (placeholder)</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
