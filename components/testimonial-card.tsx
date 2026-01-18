"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  goal: string
  rating: number
  quote: string
}

const TestimonialCard = ({ name, goal, rating, quote }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-navy-light border border-white/10 rounded-xl p-6"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-red text-red" />
        ))}
      </div>
      <p className="text-white/90 mb-4 italic">"{quote}"</p>
      <div className="border-t border-white/10 pt-4">
        <div className="font-heading font-semibold">{name}</div>
        <div className="text-sm text-white/60">{goal}</div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
