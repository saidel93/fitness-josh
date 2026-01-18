'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Award } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '@/components/section-header'
import ServiceCard from '@/components/service-card'
import TestimonialCard from '@/components/testimonial-card'
import ContactStrip from '@/components/contact-strip'
import { services } from '@/content/services'
import { testimonials } from '@/content/testimonials'

export default function Home() {
  const expectations = [
    'Cardio training for heart health and endurance',
    'Muscle endurance through high-rep functional movements',
    'Functional training for real-world strength',
    'Strength training with progressive overload',
  ]

  const certifications = [
    { name: 'ACE Certified', org: 'American Council on Exercise' },
    {
      name: 'NESTA Certified',
      org: 'National Exercise & Sports Trainers Association',
    },
    { name: 'USA Boxing Coach', org: 'USA Boxing' },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Free Consultation',
      desc: 'Discuss your goals and assess your fitness level',
    },
    {
      step: '2',
      title: 'Customized Plan',
      desc: 'Receive a personalized training and nutrition program',
    },
    {
      step: '3',
      title: 'Measured Progress',
      desc: 'Track results and adjust for continuous improvement',
    },
  ]

  const trainerImages = [
    { src: '/3-0.jpg', alt: 'Professional trainer in action' },
    { src: '/3-1.jpg', alt: 'Boxing coaching session' },
    { src: '/3-2.jpg', alt: 'Personal training expertise' },
    { src: '/3-3.jpg', alt: 'Fitness training demonstration' },
  ]

  return (
    <div>
      {/* Hero Section with Main Trainer Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/3-0.jpg"
            alt="Professional boxing trainer"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40 z-10"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading mb-6 text-balance"
          >
            Train Hard. Fight Smart.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Boxing-based coaching for real-world results in West County.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactStrip variant="compact" />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy-light py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg"
              >
                <Award className="w-8 h-8 text-red flex-shrink-0" />
                <div>
                  <div className="font-heading font-semibold">{cert.name}</div>
                  <div className="text-sm text-white/70">{cert.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Featured Trainer Image */}
      <section className="py-20 px-4 sm:px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Meet Your Coach"
            subtitle="Professional Training Excellence"
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/90">
                With multiple certifications and years of experience in boxing
                and personal training, I'm dedicated to helping you achieve your
                fitness goals through proven methods and personalized attention.
              </p>
              <p className="text-white/80">
                Whether you're looking to lose weight, build strength, or learn
                boxing fundamentals, I'll create a customized program that fits
                your lifestyle and pushes you to reach your full potential.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red" />
                  <span className="text-white/90">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red" />
                  <span className="text-white/90">Certified Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red" />
                  <span className="text-white/90">Results-Driven</span>
                </div>
              </div>
            </motion.div>

            {/* Featured Single Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-red/30 shadow-2xl"
            >
              <Image
                src="/3-1.jpg"
                alt="Professional boxing trainer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="What to Expect"
            subtitle="Your Training Experience"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expectations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 p-4 bg-navy-light rounded-lg border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-red flex-shrink-0 mt-0.5" />
                <span className="text-white/90">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Services" subtitle="Training Programs" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformations */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Client Transformations"
            subtitle="Real Results"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-navy-light rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-red mb-2">95</div>
              <div className="text-white/70">Pounds Lost</div>
              <div className="text-sm text-white/50 mt-1">
                Fernando - 9 months
              </div>
            </div>
            <div className="text-center p-8 bg-navy-light rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-red mb-2">55</div>
              <div className="text-white/70">Pounds Lost</div>
              <div className="text-sm text-white/50 mt-1">Paula - 5 months</div>
            </div>
            <div className="text-center p-8 bg-navy-light rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-red mb-2">15</div>
              <div className="text-white/70">Pounds Gained</div>
              <div className="text-sm text-white/50 mt-1">David - 6 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What Clients Say" subtitle="Testimonials" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="How It Works" subtitle="Getting Started" />

          {/* Process Steps with Images */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md mx-auto h-[600px] rounded-2xl overflow-hidden border-2 border-white/10 bg-navy-light"
            >
              <Image
                src="/3-2.jpg"
                alt="Professional training consultation"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {howItWorks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Image with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-white/10 bg-navy-light"
          >
            <Image
              src="/3-3.jpg"
              alt="Outdoor training session"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-heading mb-4">
                  Ready to Transform Your Fitness?
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  Join athletes and fitness enthusiasts who are achieving their
                  goals through personalized boxing and strength training.
                </p>
                <ContactStrip variant="compact" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ContactStrip />
        </div>
      </section>
    </div>
  )
}
