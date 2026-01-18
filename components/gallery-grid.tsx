'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import type { GalleryImage } from '@/content/gallery'

interface GalleryGridProps {
  images: GalleryImage[]
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelected(img)}
            className="aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer relative"
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <div className="text-xs px-4">{img.alt}</div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] relative"
            >
              {selected.src ? (
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
              ) : (
                <div className="w-full h-[80vh] flex items-center justify-center text-white/20 bg-white/5 rounded-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <div className="text-lg">{selected.alt}</div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryGrid
