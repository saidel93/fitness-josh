"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  tags?: string[]
  image?: string | null
}

const BlogCard = ({ slug, title, excerpt, date, tags, image }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-navy-light border border-white/10 rounded-xl overflow-hidden hover:border-red/50 transition-all duration-300"
    >
      <Link href={`/blog/${slug}`}>
        <div className="aspect-video bg-white/5 overflow-hidden">
          {image ? (
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40">
              <div className="text-center p-8">
                <div className="text-6xl mb-2">📝</div>
                <div className="text-sm">Blog post image</div>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {tags && tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span>{tags[0]}</span>
              </div>
            )}
          </div>
          <h3 className="text-xl font-heading mb-2 hover:text-red transition-colors">{title}</h3>
          <p className="text-white/70 text-sm line-clamp-2">{excerpt}</p>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard
