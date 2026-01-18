"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Mail, Phone } from "lucide-react"
import SectionHeader from "@/components/section-header"
import FAQItem from "@/components/faq-item"
import ContactStrip from "@/components/contact-strip"
import { siteConfig } from "@/content/site"

export default function Contact() {
  const faqs = [
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24-hour notice for cancellations. Cancellations made less than 24 hours before your scheduled session will be charged the full session fee. Emergency situations are handled on a case-by-case basis.",
    },
    {
      question: "How do I reschedule a session?",
      answer:
        "To reschedule, simply call, text, or email us at least 24 hours before your scheduled session. We'll work with you to find a new time that fits your schedule within our Monday-Saturday, 6am-7pm availability.",
    },
    {
      question: "What should I bring to my first session?",
      answer:
        "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. If you have boxing gloves and hand wraps, bring them, but we also have equipment available for beginners. Come ready to work hard and have fun!",
    },
    {
      question: "Do you allow sparring?",
      answer:
        "Sparring is available for experienced boxers and those who have completed foundational training. All sparring is supervised, controlled, and follows strict safety protocols including proper protective equipment. Sparring is never required and is only offered to those who request it.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Session packages are non-refundable but can be transferred to another person with advance notice. Unused sessions do not expire and can be used at any time during our operating hours.",
    },
    {
      question: "Do you offer online training?",
      answer:
        "Yes, we offer online training programs for clients who cannot train in person. Online training includes customized workout programs, video demonstrations, form checks via video, nutrition guidance, and regular check-ins. Contact us to discuss online training options.",
    },
  ]

  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Get In Touch" subtitle="Contact Us" />
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-heading mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Studio Address</div>
                    <a
                      href={siteConfig.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-red transition-colors"
                    >
                      {siteConfig.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Hours</div>
                    <div className="text-white/80">
                      <div>{siteConfig.hours.weekday}</div>
                      <div>{siteConfig.hours.weekend}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href={`tel:${siteConfig.phone}`} className="text-white/80 hover:text-red transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-white/80 hover:text-red transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <ContactStrip variant="compact" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-light border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-8 hover:text-red transition-colors"
                >
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-red" />
                  <div className="text-lg font-semibold mb-2">View on Google Maps</div>
                  <div className="text-sm text-white/70">{siteConfig.address}</div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Frequently Asked Questions" subtitle="FAQ" />
          <div className="mt-12 bg-navy border border-white/10 rounded-xl divide-y divide-white/10">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
