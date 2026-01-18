"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      {subtitle && <div className="text-red text-sm font-semibold uppercase tracking-wider mb-2">{subtitle}</div>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">{title}</h2>
    </motion.div>
  )
}

export default SectionHeader
