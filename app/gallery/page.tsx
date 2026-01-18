import SectionHeader from "@/components/section-header"
import GalleryGrid from "@/components/gallery-grid"
import { galleryImages } from "@/content/gallery"

export default function Gallery() {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Training Gallery" subtitle="See Our Facility & Training in Action" />
          <p className="mt-6 text-center text-white/80 max-w-3xl mx-auto">
            Take a look inside West County Fitness and see our training sessions, equipment, and client transformations.
            Click any image to view full size.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  )
}
