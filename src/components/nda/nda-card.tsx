'use client'

import { useState } from 'react'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { NDAStatus } from './nda-status'
import { NDAContentDisplay } from './nda-content'
import { NDAStatusMessage } from './nda-status-msg'
import { ndaContent } from '@/content/nda'
import { useRouter } from 'next/navigation'

export default function NDACard() {
  const title = ndaContent.title
  const description = ndaContent.description
  const content = ndaContent.agreement
  const router = useRouter()

  const [status, setStatus] = useState<'pending' | 'accepted' | 'declined'>(
    'pending',
  )

  const handleAccept = () => {
    setTimeout(() => {
      setStatus('accepted')
    }, 500)

    setTimeout(() => {
      router.push('/introduction')
    }, 2000)
  }

  const handleDecline = () => {
    setStatus('declined')
  }

  return (
    <Card className='max-w-2xl'>
      <CardHeader>
        <div className='flex items-start justify-between'>
          <div className='space-y-1'>
            <CardTitle className='text-2xl font-bold tracking-tight'>
              {title}
            </CardTitle>
            <CardDescription className='text-base'>
              {description}
            </CardDescription>
          </div>
          <Shield className='h-8 w-8 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <NDAStatus status={status} />
        {status === 'pending' && (
          <div className='relative'>
            <NDAContentDisplay content={content} />
          </div>
        )}
        <NDAStatusMessage status={status} />
      </CardContent>
      {status === 'pending' && (
        <CardFooter className='flex gap-4'>
          <Button size='lg' className='w-full' onClick={handleAccept}>
            Accept & Continue
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='w-full'
            onClick={handleDecline}
          >
            Decline
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
