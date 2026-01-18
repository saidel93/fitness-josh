import { groq } from 'next-sanity'

// Get all blog posts
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    tags,
    mainImage,
    featured,
    author
  }
`

// Get a single blog post by slug
export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    tags,
    mainImage,
    body,
    author,
    featured
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    tags,
    mainImage,
    author
  }
`
