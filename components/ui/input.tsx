import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-xl bg-white/6 border border-white/12 px-3 text-sm text-white placeholder:text-slate-400',
        'focus:outline-none focus:ring-2 focus:ring-gt-glowViolet/40',
        className
      )}
      {...props}
    />
  )
})
