import { Phone, MessageSquare, Mail } from "lucide-react"
import { siteConfig } from "@/content/site"
import CTAButton from "./cta-button"

interface ContactStripProps {
  variant?: "default" | "compact"
}

const ContactStrip = ({ variant = "default" }: ContactStripProps) => {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        <CTAButton href={`tel:${siteConfig.phone}`} variant="primary">
          <Phone className="w-5 h-5" />
          Call Now
        </CTAButton>
        <CTAButton href={`sms:${siteConfig.phone}`} variant="secondary">
          <MessageSquare className="w-5 h-5" />
          Text Us
        </CTAButton>
        <CTAButton href={`mailto:${siteConfig.email}`} variant="outline">
          <Mail className="w-5 h-5" />
          Email Us
        </CTAButton>
      </div>
    )
  }

  return (
    <div className="bg-red rounded-xl p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-heading mb-4">Ready to Start Your Transformation?</h3>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto">
        Book your session today by calling, texting, or emailing us. We're available Monday–Saturday, 6am–7pm.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <CTAButton href={`tel:${siteConfig.phone}`} variant="secondary" size="lg">
          <Phone className="w-5 h-5" />
          Call {siteConfig.phoneDisplay}
        </CTAButton>
        <CTAButton href={`sms:${siteConfig.phone}`} variant="secondary" size="lg">
          <MessageSquare className="w-5 h-5" />
          Text Us
        </CTAButton>
        <CTAButton href={`mailto:${siteConfig.email}`} variant="secondary" size="lg">
          <Mail className="w-5 h-5" />
          Email Us
        </CTAButton>
      </div>
    </div>
  )
}

export default ContactStrip
