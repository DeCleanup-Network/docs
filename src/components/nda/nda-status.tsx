import { CheckCircle2, XCircle, AlertCircle, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function NDAStatus({
  status,
}: {
  status: 'pending' | 'accepted' | 'declined'
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg px-4 py-3 transition-colors',
        status === 'accepted' &&
          'border border-primary/20 bg-primary/10 text-primary',
        status === 'declined' &&
          'border border-destructive/20 bg-destructive/10 text-destructive',
        status === 'pending' &&
          'border border-muted bg-muted text-muted-foreground',
      )}
    >
      <div className='flex items-center gap-2'>
        {status === 'accepted' && (
          <>
            <CheckCircle2 className='h-5 w-5' />
            <span className='font-medium'>
              Access Granted - Documentation Available
            </span>
          </>
        )}
        {status === 'declined' && (
          <>
            <XCircle className='h-5 w-5' />
            <span className='font-medium'>
              Access Denied - Agreement Declined
            </span>
          </>
        )}
        {status === 'pending' && (
          <>
            <AlertCircle className='h-5 w-5' />
            <span className='font-medium'>Verification Required</span>
          </>
        )}
      </div>
      <Lock className='h-4 w-4' />
    </div>
  )
}
