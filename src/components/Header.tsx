import ThemeToggle from './ThemeToggle'
import { SidebarTrigger } from './ui/sidebar'

const Header = () => (
  <header className='sticky top-0 z-50 mb-4 w-full border-b bg-background shadow-md'>
    <SidebarTrigger />
    <ThemeToggle />
  </header>
)

export default Header
