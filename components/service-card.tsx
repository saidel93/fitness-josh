"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  link?: string
}

const ServiceCard = ({ icon: Icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-navy-light border border-white/10 rounded-xl p-6 hover:border-red/50 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-red/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-red" />
      </div>
      <h3 className="text-xl font-heading mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
              <span className="text-red mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {link && (
        <Link href={link} className="inline-flex items-center gap-2 text-red hover:text-red-light transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </motion.div>
  )
}

export default ServiceCard
