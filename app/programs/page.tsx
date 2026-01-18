"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"
import ContactStrip from "@/components/contact-strip"
import { services } from "@/content/services"
import { siteConfig } from "@/content/site"

export default function Programs() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Training Programs & Services" subtitle="Customized for Your Goals" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Every program at {siteConfig.brand} is designed around your specific goals, fitness level, and schedule.
            Whether you're training for weight loss, boxing competition, or overall fitness, we'll create a plan that
            delivers results.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ServiceCard {...service} />
                <div className="mt-4">
                  <ContactStrip variant="compact" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Training Locations" subtitle="Where We Train" centered />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-navy-light border border-white/10 rounded-xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-heading mb-2">Primary Training Studio</h3>
                <p className="text-white/80 mb-3">
                  All training sessions take place at our fully-equipped studio in Chesterfield, Missouri. The facility
                  features boxing equipment, strength training equipment, cardio machines, and dedicated training space.
                </p>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red hover:text-red-light transition-colors font-medium"
                >
                  {siteConfig.address}
                </a>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h4 className="font-heading font-semibold mb-2">Mobile Training (Limited Availability)</h4>
              <p className="text-white/70 text-sm">
                On-site training at your location may be available on request for established clients. Contact us to
                discuss mobile training options and availability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="What's Included" subtitle="Every Session" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              "Customized workout programming",
              "Proper form and technique coaching",
              "Progress tracking and adjustments",
              "Nutrition guidance and meal planning",
              "Boxing equipment (gloves, wraps, pads)",
              "Accountability and motivation",
              "Flexible scheduling (Mon-Sat, 6am-7pm)",
              "Email support between sessions",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 bg-navy rounded-lg border border-white/10"
              >
                <div className="w-6 h-6 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ContactStrip />
        </div>
      </section>
    </div>
  )
}
