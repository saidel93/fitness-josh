'use client'

import { motion } from 'framer-motion'

interface StoryBlockProps {
  name: string
  before: number
  after: number
  duration: string
  story: string
  image?: string | null
}

const StoryBlock = ({
  name,
  before,
  after,
  duration,
  story,
  image,
}: StoryBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-navy-light border border-white/10 rounded-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
        <div className="flex items-center justify-center bg-white/5 rounded-lg overflow-hidden aspect-square">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white/40 text-center p-8">
              <div className="text-6xl font-bold mb-2">{name.charAt(0)}</div>
              <div className="text-sm">Photo placeholder</div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-heading mb-4">
            {name}'s Transformation
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-red text-sm font-semibold mb-1">Before</div>
              <div className="text-2xl font-bold">{before} lbs</div>
            </div>
            <div>
              <div className="text-red text-sm font-semibold mb-1">After</div>
              <div className="text-2xl font-bold">{after} lbs</div>
            </div>
            <div>
              <div className="text-red text-sm font-semibold mb-1">Time</div>
              <div className="text-2xl font-bold">{duration}</div>
            </div>
          </div>
          <p className="text-white/80 leading-relaxed">{story}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default StoryBlock
