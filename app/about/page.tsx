"use client"

import { motion } from "framer-motion"
import { Award, Target, Heart, Shield } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ContactStrip from "@/components/contact-strip"
import { siteConfig } from "@/content/site"

export default function About() {
  const certifications = [
    {
      icon: Award,
      name: "ACE Certified Personal Trainer",
      org: "American Council on Exercise",
      desc: "Nationally recognized certification for comprehensive fitness training",
    },
    {
      icon: Award,
      name: "NESTA Personal Trainer",
      org: "National Exercise & Sports Trainers Association",
      desc: "Advanced certification in exercise science and program design",
    },
    {
      icon: Award,
      name: "USA Boxing Coach",
      org: "USA Boxing",
      desc: "Official coaching certification for boxing technique and competition",
    },
  ]

  const philosophy = [
    {
      icon: Shield,
      title: "Safety First",
      desc: "Proper form, injury prevention, and progressive training are our foundation",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      desc: "Every program is designed around your specific objectives and timeline",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      desc: "Combining boxing, strength training, and nutrition for complete transformation",
    },
  ]

  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="About West County Fitness" subtitle="Meet Your Coach" />
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <div className="text-center p-12 text-white/40">
                <div className="text-8xl mb-4">👤</div>
                <div className="text-xl">Coach Photo Placeholder</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-heading mb-4">17+ Years of Transforming Lives</h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Welcome to {siteConfig.brand}, where passion meets expertise. With over 17 years of experience in
                  personal training and boxing coaching, I've dedicated my career to helping people achieve their
                  fitness goals through personalized training, boxing instruction, and comprehensive nutrition guidance.
                </p>
                <p>
                  My approach combines the discipline and intensity of boxing with proven strength and conditioning
                  methods to deliver real, measurable results. Whether you're looking to lose weight, build muscle,
                  learn self-defense, or compete in boxing, I'll create a customized program that fits your goals,
                  schedule, and fitness level.
                </p>
                <p>
                  What sets {siteConfig.brand} apart is the personal attention and accountability you'll receive. Every
                  client gets a tailored program, proper technique instruction, and ongoing support to ensure success. I
                  believe in building not just stronger bodies, but also confidence, discipline, and lifelong healthy
                  habits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Certifications & Credentials" subtitle="Qualified Expertise" />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-navy border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red" />
                  </div>
                  <h3 className="text-xl font-heading mb-2">{cert.name}</h3>
                  <div className="text-red text-sm font-semibold mb-3">{cert.org}</div>
                  <p className="text-white/70 text-sm">{cert.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Training Philosophy" subtitle="Our Approach" />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-navy-light border border-white/10 rounded-xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-heading mb-4 text-center">Periodization & Progressive Training</h3>
            <p className="text-white/80 leading-relaxed text-center">
              Our training methodology is built on periodization principles – systematically varying training intensity,
              volume, and focus to ensure continuous progress while preventing plateaus and overtraining. Combined with
              boxing fundamentals, strength training, and conditioning work, this approach delivers sustainable,
              long-term results.
            </p>
          </motion.div>
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
