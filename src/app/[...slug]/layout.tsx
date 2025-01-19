import { AppSidebar } from '@/components/AppSidebar'
import Header from '@/components/Header'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className='min-h-screen items-center justify-center font-mono'>
      <AppSidebar />
      <div className='flex min-h-screen flex-col bg-background p-4'>
        <Header />
        <div className='prose rounded-xl px-6 py-8 shadow-2xl shadow-secondary ring-1 ring-accent dark:prose-invert lg:prose-2xl'>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
