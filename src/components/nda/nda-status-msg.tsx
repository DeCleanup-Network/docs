import { cn } from '@/lib/utils'

export function NDAStatusMessage({
  status,
}: {
  status: 'pending' | 'accepted' | 'declined'
}) {
  if (status === 'pending') return null

  return (
    <div
      className={cn(
        'rounded-lg border p-6 text-center',
        status === 'accepted' && 'bg-primary/5',
        status === 'declined' && 'bg-destructive/5',
      )}
    >
      {status === 'accepted' && (
        <p className='font-medium text-primary'>
          You now have access to proprietary documentation.
        </p>
      )}
      {status === 'declined' && (
        <p className='font-medium text-destructive'>
          Access to proprietary documentation has been denied.
        </p>
      )}
    </div>
  )
}
