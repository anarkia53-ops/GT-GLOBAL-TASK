import * as React from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-gt-glowBlue/50 disabled:opacity-50 disabled:pointer-events-none',
        'select-none',
        variant === 'default' && 'bg-white/10 hover:bg-white/14 border border-white/12',
        variant === 'secondary' && 'bg-gt-panel/70 hover:bg-gt-panel/85 border border-white/10',
        variant === 'ghost' && 'bg-transparent hover:bg-white/8 border border-transparent',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-10 px-4 text-sm',
        size === 'lg' && 'h-11 px-5 text-base',
        className
      )}
      {...props}
    />
  )
}
