import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  output: 'export',
  images: { unoptimized: true },
}
export default config
