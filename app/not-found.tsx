"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Calendar, Mail } from "lucide-react"
import CTAButton from "@/components/cta-button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl">
        <div className="text-8xl md:text-9xl font-bold text-red mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-heading mb-4">Page Not Found</h1>
        <p className="text-white/70 text-lg mb-8">
          Looks like you've wandered into the wrong corner. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <CTAButton variant="primary">
              <Home className="w-5 h-5" />
              Go Home
            </CTAButton>
          </Link>
          <Link href="/programs">
            <CTAButton variant="secondary">View Programs</CTAButton>
          </Link>
          <Link href="/schedule">
            <CTAButton variant="outline">
              <Calendar className="w-5 h-5" />
              Schedule Training
            </CTAButton>
          </Link>
          <Link href="/contact">
            <CTAButton variant="ghost">
              <Mail className="w-5 h-5" />
              Contact Us
            </CTAButton>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
