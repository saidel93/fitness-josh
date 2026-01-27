import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin, Clock, Mail } from "lucide-react"
import { siteConfig } from "@/content/site"
import HoursBadge from "./hours-badge"

const Footer = () => {
  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    facebook: Facebook,
    instagram: Instagram,
   
  }

  return (
    <footer className="bg-navy-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">WC</span>
              </div>
              <div>
                <div className="font-heading text-xl">{siteConfig.brand}</div>
                <div className="text-sm text-white/70">{siteConfig.slogan}</div>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">{siteConfig.bio}</p>
            <div className="flex flex-wrap gap-3">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.platform] || Twitter
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red rounded-lg flex items-center justify-center transition-colors"
                    aria-label={item.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/about", label: "About" },
                { path: "/programs", label: "Programs" },
                { path: "/gallery", label: "Gallery" },
                { path: "/success", label: "Success Stories" },
                { path: "/schedule", label: "Schedule" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/70 hover:text-red transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">Contact & Hours</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red transition-colors"
                >
                  {siteConfig.address}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                <div>
                  <div>{siteConfig.hours.weekday}</div>
                  <div>{siteConfig.hours.weekend}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-red transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="mt-4">
              <HoursBadge />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link href="/contact" className="hover:text-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
