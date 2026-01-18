'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Calendar,
  Tag,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react'
import { PortableText } from '@portabletext/react'
import CTAButton from '@/components/cta-button'
import { useEffect, useState } from 'react'
import { client, urlFor } from '@/lib/sanity.client'
import { blogPostBySlugQuery } from '@/lib/sanity.queries'
import { BlogPost } from '@/types/blog'

// Portable Text components for rich text rendering
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-heading mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-heading mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-heading mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-red pl-4 italic my-6 text-white/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-red-light">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red hover:text-red-light underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || 'Blog post image'}
          className="w-full rounded-xl"
        />
        {value.alt && (
          <p className="text-center text-sm text-white/60 mt-2">{value.alt}</p>
        )}
      </div>
    ),
  },
}

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await client.fetch(blogPostBySlugQuery, { slug })
        setPost(fetchedPost)
      } catch (error) {
        console.error('Error fetching post:', error)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red mx-auto mb-4"></div>
          <p className="text-white/70">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-heading mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <CTAButton onClick={() => router.push('/blog')} variant="primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </CTAButton>
        </div>
      </div>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-navy-light border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-red hover:text-red-light transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-red/20 rounded text-red text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-white/70">Share:</span>
              <div className="flex gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {post.mainImage ? (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.mainImage.alt || post.title}
              className="w-full aspect-video object-cover rounded-xl mb-12"
            />
          ) : (
            <div className="w-full aspect-video bg-white/5 rounded-xl mb-12 flex items-center justify-center">
              <div className="text-center text-white/40">
                <div className="text-6xl mb-2">📝</div>
                <div>Featured Image Placeholder</div>
              </div>
            </div>
          )}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="text-white/80 leading-relaxed space-y-6">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-white/60 italic">
                  No content available for this post.
                </p>
              )}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-heading mb-4">
            Ready to Start Training?
          </h3>
          <p className="text-white/80 mb-6">
            Get personalized coaching and achieve your fitness goals.
          </p>
          <CTAButton
            onClick={() => router.push('/schedule')}
            variant="primary"
            size="lg"
          >
            Book Your Session
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
