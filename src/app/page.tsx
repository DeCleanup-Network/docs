'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/introduction')
  }, [router])

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Redirecting...</h1>
        <p className='text-muted-foreground'>Taking you to the documentation</p>
      </div>
    </div>
  )
}
