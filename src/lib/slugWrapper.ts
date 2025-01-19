export const wrapSlugs = (slugs: string[][]): { slug: string[] }[] =>
  slugs.map(slug => ({ slug }))
