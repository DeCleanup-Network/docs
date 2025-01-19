import { ThemeProvider } from 'next-themes'
import { JetBrains_Mono } from 'next/font/google'

import '@/app/globals.css'

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Docs/Blog template starter',
  description: 'React next tailwind shadcb based',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
