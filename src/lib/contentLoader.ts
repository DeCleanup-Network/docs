import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ContentItem = {
  name: string
  relativePath: string
  content: string
  slug: string[]
  //@todo mb union of available types better ?
  metadata?: Record<string, unknown>
}

let cachedContentTree: ContentItem[] | null = null

const cleanName = (name: string): string =>
  name.replace(/^\d+-/, '').replace(/\.mdx$/, '')

const generateSlug = (relativePath: string): string[] => {
  const parts = relativePath
    .replace(/\\/g, '/')
    .replace(/\.mdx$/, '')
    .split('/')
    .map(cleanName)

  if (parts[parts.length - 1] === 'index') parts.pop()
  return parts
}

const getContentItems = (
  dirPath: string,
  basePath = 'src/content',
): ContentItem[] => {
  const items: ContentItem[] = []

  const sortedFiles = fs
    .readdirSync(dirPath)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  sortedFiles.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      items.push(...getContentItems(filePath, basePath))
    } else if (file.endsWith('.mdx')) {
      const relativePath = path.relative(basePath, filePath)
      const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))

      items.push({
        name: cleanName(file),
        relativePath,
        content,
        slug: generateSlug(relativePath),
        metadata: data,
      })
    }
  })

  return items
}

export const loadContentTree = (): ContentItem[] => {
  if (!cachedContentTree) {
    const contentPath = path.join(process.cwd(), 'src/content')
    cachedContentTree = getContentItems(contentPath)
  }
  return cachedContentTree
}

export const getAllSlugs = (): string[][] =>
  loadContentTree().map(item => item.slug)

export const findContentBySlug = (slug: string[]): ContentItem | null =>
  loadContentTree().find(item => item.slug.join() === slug.join()) || null
