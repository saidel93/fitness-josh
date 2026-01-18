"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageSquare, Mail } from "lucide-react"
import { siteConfig } from "@/content/site"
import CTAButton from "./cta-button"

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/gallery", label: "Gallery" },
    { path: "/success", label: "Success" },
    { path: "/schedule", label: "Schedule" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="bg-red text-white text-center py-2 px-4 text-sm">
        <p>Now booking Mon–Sat 6am–7pm • Call/Text to reserve</p>
      </div>
      <header className="sticky top-0 z-50 bg-navy-light border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WC</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading text-lg leading-tight">{siteConfig.brand}</div>
                <div className="text-xs text-white/70">{siteConfig.slogan}</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-red ${
                    isActive(link.path) ? "text-red" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <CTAButton href={`tel:${siteConfig.phone}`} variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call</span>
              </CTAButton>
              <CTAButton href={`sms:${siteConfig.phone}`} variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden xl:inline">Text</span>
              </CTAButton>
              <CTAButton href={`mailto:${siteConfig.email}`} variant="primary" size="sm">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Email</span>
              </CTAButton>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-red transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-red ${
                      isActive(link.path) ? "text-red" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <CTAButton href={`tel:${siteConfig.phone}`} variant="ghost" fullWidth>
                    <Phone className="w-4 h-4" />
                    Call Now
                  </CTAButton>
                  <CTAButton href={`sms:${siteConfig.phone}`} variant="ghost" fullWidth>
                    <MessageSquare className="w-4 h-4" />
                    Text Us
                  </CTAButton>
                  <CTAButton href={`mailto:${siteConfig.email}`} variant="primary" fullWidth>
                    <Mail className="w-4 h-4" />
                    Email Us
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
