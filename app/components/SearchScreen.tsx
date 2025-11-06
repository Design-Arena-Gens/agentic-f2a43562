'use client'

import { motion } from 'framer-motion'
import { Search, MapPin, SlidersHorizontal, Map as MapIcon } from 'lucide-react'
import { useState } from 'react'
import PropertyCard from './PropertyCard'

const searchResults = [
  {
    id: 5,
    title: 'Heritage House',
    price: 'NPR 3,25,00,000',
    location: 'Bhaktapur, Bagmati',
    region: 'Pahad',
    beds: 5,
    baths: 4,
    area: '4000 sq ft',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    id: 6,
    title: 'Resort Property',
    price: 'NPR 8,00,00,000',
    location: 'Lumbini, Lumbini',
    region: 'Terai',
    beds: 10,
    baths: 8,
    area: '12000 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },
]

export default function SearchScreen() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="safe-top min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Search Properties</h1>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500 focus:border-transparent"
          />
        </div>

        {/* Location & Filters */}
        <div className="flex gap-2">
          <button className="touch-target flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-himalayan-50 text-himalayan-700 rounded-xl font-medium border border-himalayan-200">
            <MapPin className="w-5 h-5" />
            Near Me
          </button>
          <button className="touch-target flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-xl font-medium border border-gray-200">
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
          <button
            onClick={() => setShowMap(!showMap)}
            className="touch-target flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-xl font-medium border border-gray-200"
          >
            <MapIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Map View */}
      {showMap && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '300px' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-200 relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Map view with property markers</p>
              <p className="text-sm text-gray-500">Location services enabled</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Price Range Filters */}
      <div className="px-4 py-4 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          {['Any Price', 'Under 50L', '50L - 1Cr', '1Cr - 5Cr', '5Cr+'].map((range) => (
            <button
              key={range}
              className="touch-target px-4 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-himalayan-500 hover:text-himalayan-700 transition-colors"
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type Filters */}
      <div className="px-4 pb-4 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          {['All Types', 'House', 'Apartment', 'Land', 'Commercial'].map((type) => (
            <button
              key={type}
              className="touch-target px-4 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-himalayan-500 hover:text-himalayan-700 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 pb-6">
        <p className="text-sm text-gray-600 mb-4">Found {searchResults.length} properties</p>
        <div className="space-y-4">
          {searchResults.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
