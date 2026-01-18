import { PortableTextBlock } from 'sanity'

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  tags?: string[]
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  body?: PortableTextBlock[]
  author?: string
  featured?: boolean
}

export interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  tags?: string[]
  image?: string | null
}