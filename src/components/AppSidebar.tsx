import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import ActiveLink from '@/components/ActiveLink'
import { ContentItem, loadContentTree } from '@/lib/contentLoader'

const groupContentBySection = (contentItems: ContentItem[]) => {
  const grouped: Array<[ContentItem, ContentItem[]]> = []

  contentItems.forEach(item => {
    if (item.slug.length === 1) {
      const section = item
      const files = contentItems.filter(
        file => file.slug.length === 2 && file.slug[0] === section.slug[0],
      )
      grouped.push([section, files])
    }
  })

  return grouped
}

const contentTree = loadContentTree() // Server-side loaded content
const groupedItems = groupContentBySection(contentTree)

export const AppSidebar = () => (
  <Sidebar variant='floating'>
    <SidebarContent className='space-y-6 p-4 font-mono'>
      {groupedItems.map(([sectionItem, files]) => (
        <SidebarGroup key={sectionItem.slug.join('/')} className='space-y-1'>
          <SidebarGroupLabel>
            <ActiveLink
              slug={sectionItem.slug}
              name={
                sectionItem.name === 'index'
                  ? sectionItem.slug[0]
                  : sectionItem.name
              }
            />
          </SidebarGroupLabel>
          {files.length > 0 && (
            <SidebarGroupContent className='ml-4 space-y-1'>
              {files.map(file => (
                <ActiveLink
                  key={file.slug.join('/')}
                  slug={file.slug}
                  name={file.name}
                />
              ))}
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      ))}
    </SidebarContent>
  </Sidebar>
)
