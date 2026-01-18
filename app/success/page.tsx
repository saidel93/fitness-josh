import SectionHeader from "@/components/section-header"
import TestimonialCard from "@/components/testimonial-card"
import StoryBlock from "@/components/story-block"
import ContactStrip from "@/components/contact-strip"
import { testimonials } from "@/content/testimonials"
import { stories } from "@/content/stories"

export default function Success() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Client Success Stories" subtitle="Real People, Real Results" />
          <p className="mt-6 text-center text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our clients' transformations speak for themselves. From significant weight loss to improved athletic
            performance, these are real results from dedicated individuals who committed to their goals.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {stories.map((story) => (
            <StoryBlock key={story.id} {...story} />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What Our Clients Say" subtitle="Testimonials" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
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
