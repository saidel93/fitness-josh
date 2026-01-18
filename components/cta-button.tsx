"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CTAButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

const CTAButton = ({
  children,
  href,
  variant = "primary",
  size = "md",
  fullWidth,
  onClick,
  className = "",
  type = "button",
}: CTAButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200"

  const variants = {
    primary: "bg-red hover:bg-red-dark text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-white/90 text-navy shadow-lg hover:shadow-xl",
    ghost: "bg-white/10 hover:bg-white/20 text-white",
    outline: "border-2 border-red text-red hover:bg-red hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`

  const content = (
    <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}

export default CTAButton
