import SectionHeader from '@/components/section-header'
import BlogCard from '@/components/blog-card'
import { client } from '@/lib/sanity.client'
import { blogPostsQuery } from '@/lib/sanity.queries'
import { BlogPost } from '@/types/blog'
import { urlFor } from '@/lib/sanity.client'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'
// OR use revalidation instead
// export const revalidate = 60 // Revalidate every 60 seconds

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(blogPostsQuery, {}, { cache: 'no-store' })
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function Blog() {
  const blogPosts = await getBlogPosts()

  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Training & Fitness Blog"
            subtitle="Tips, Guides & Insights"
          />
          <p className="mt-6 text-center text-white/80 max-w-3xl mx-auto">
            Expert advice on boxing, strength training, nutrition, and fitness.
            Learn techniques, get training tips, and stay motivated on your
            fitness journey.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post._id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  tags={post.tags}
                  image={
                    post.mainImage
                      ? urlFor(post.mainImage).width(800).height(600).url()
                      : null
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
