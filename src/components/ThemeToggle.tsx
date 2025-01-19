'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Mount check to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null // Render nothing until mounted

  const handleToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <Button
      onClick={handleToggle}
      variant='ghost'
      size='icon'
      className='p-2'
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ? (
        <SunIcon className='h-5 w-5' aria-hidden='true' />
      ) : (
        <MoonIcon className='h-5 w-5' aria-hidden='true' />
      )}
    </Button>
  )
}

export default ThemeToggle
