"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MessageSquare, Mail, Clock, Calendar } from "lucide-react"
import SectionHeader from "@/components/section-header"
import CTAButton from "@/components/cta-button"
import { siteConfig } from "@/content/site"

export default function Schedule() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDay: "",
    preferredTime: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submission:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Schedule Your Training" subtitle="Book Your Session" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-red/20 border border-red rounded-lg px-6 py-3 mb-6">
              <Clock className="w-5 h-5 text-red" />
              <span className="font-semibold">Available {siteConfig.hours.weekday}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-navy-light border border-white/10 rounded-xl p-8 text-center mb-12"
          >
            <h3 className="text-2xl font-heading mb-4">Preferred Booking Method</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              All bookings are done by phone call, text message, or email. Choose your preferred method below to get
              started immediately.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href={`tel:${siteConfig.phone}`} variant="primary" size="lg">
                <Phone className="w-5 h-5" />
                Call {siteConfig.phoneDisplay}
              </CTAButton>
              <CTAButton href={`sms:${siteConfig.phone}`} variant="secondary" size="lg">
                <MessageSquare className="w-5 h-5" />
                Text Us Now
              </CTAButton>
              <CTAButton href={`mailto:${siteConfig.email}`} variant="outline" size="lg">
                <Mail className="w-5 h-5" />
                Send Email
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-2xl font-heading text-center mb-2">Or Submit an Inquiry</h3>
            <p className="text-white/70 text-center mb-8">We'll get back to you within 24 hours</p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red/20 border border-red rounded-lg p-4 mb-6 text-center"
              >
                <p className="font-semibold">Thank you! We'll be in touch soon.</p>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-navy-light border border-white/10 rounded-xl p-6 md:p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Day</label>
                  <select
                    name="preferredDay"
                    value={formData.preferredDay}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                  >
                    <option value="">Select a day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (6am-10am)</option>
                    <option value="midday">Midday (10am-2pm)</option>
                    <option value="afternoon">Afternoon (2pm-5pm)</option>
                    <option value="evening">Evening (5pm-7pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="personal-training">Personal Training (1:1)</option>
                  <option value="program-design">Program Design</option>
                  <option value="nutrition">Weight Loss & Nutrition</option>
                  <option value="boxing">Boxing Training</option>
                  <option value="group">Group Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, experience level, or any questions you have..."
                  className="w-full px-4 py-3 bg-navy border border-white/10 rounded-lg focus:outline-none focus:border-red transition-colors resize-none"
                ></textarea>
              </div>

              <CTAButton type="submit" variant="primary" size="lg" fullWidth>
                <Calendar className="w-5 h-5" />
                Submit Inquiry
              </CTAButton>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
