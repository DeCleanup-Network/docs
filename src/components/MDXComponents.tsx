import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import Zoom from 'react-medium-image-zoom'
import { ArrowRight } from 'lucide-react'
import { ComponentProps } from 'react'

interface CustomLinkProps extends ComponentProps<'a'> {
  href: string
}

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  const isExternalLink = href.startsWith('http') || href.startsWith('//')

  if (isExternalLink) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  )
}

const MDXComponents = {
  a: CustomLink,
  Link,
  Zoom,
  ArrowRight,
}

export default MDXComponents
