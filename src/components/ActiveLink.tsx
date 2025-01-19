'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { capitalize } from '@/lib/capitalize'

export default function ActiveLink({
  slug,
  name,
}: {
  slug: string[]
  name: string
}) {
  const pathname = usePathname()
  const isActive = pathname === `/${slug.join('/')}`

  return (
    <Link
      href={`/${slug.join('/')}`}
      className={cn(
        'block w-full rounded-md px-2 py-1 text-sm transition-all',
        'text-foreground',
        isActive ? 'bg-primary/80' : 'hover:bg-primary/50',
      )}
    >
      {capitalize(name)}
    </Link>
  )
}
