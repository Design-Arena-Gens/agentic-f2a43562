'use client'

import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Maximize, Heart, Star } from 'lucide-react'
import { useState } from 'react'

interface Property {
  id: number
  title: string
  price: string
  location: string
  region: string
  beds: number
  baths: number
  area: string
  image: string
  featured?: boolean
}

export default function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false)

  const regionColors = {
    Terai: 'bg-terai-100 text-terai-700',
    Pahad: 'bg-pahad-100 text-pahad-700',
    Himal: 'bg-himalayan-100 text-himalayan-700',
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 touch-target p-2 rounded-full bg-white/90 backdrop-blur shadow-lg"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              liked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
        {property.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-yellow-900" />
            Featured
          </div>
        )}
        <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${regionColors[property.region as keyof typeof regionColors]}`}>
          {property.region}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          {property.beds > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.beds} Beds
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.baths} Baths
            </div>
          )}
          <div className="flex items-center">
            <Maximize className="w-4 h-4 mr-1" />
            {property.area}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-himalayan-600">{property.price}</p>
          </div>
          <button className="touch-target px-4 py-2 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}
