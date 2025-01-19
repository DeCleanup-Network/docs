import { MDXRemote } from 'next-mdx-remote/rsc'

import { getAllSlugs, findContentBySlug } from '@/lib/contentLoader'
import { wrapSlugs } from '@/lib/slugWrapper'

import MDXComponents from '@/components/MDXComponents'

export const generateStaticParams = async () => wrapSlugs(getAllSlugs())

type DocPageParams = {
  params: Promise<{ slug: string[] }>
}
const DocPage = async ({ params }: DocPageParams) => {
  const { slug } = await params
  const content = findContentBySlug(slug)

  if (!content) {
    return (
      <div className='prose mx-auto p-6'>
        <h1>Not Found</h1>
        <p>The requested document was not found.</p>
      </div>
    )
  }

  return <MDXRemote source={content.content} components={MDXComponents} />
}

export default DocPage
