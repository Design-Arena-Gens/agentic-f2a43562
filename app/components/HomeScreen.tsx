'use client'

import { motion } from 'framer-motion'
import { MapPin, Heart, TrendingUp } from 'lucide-react'
import PropertyCard from './PropertyCard'

const featuredProperties = [
  {
    id: 1,
    title: 'Luxury Villa in Kathmandu',
    price: 'NPR 5,50,00,000',
    location: 'Kathmandu, Bagmati',
    region: 'Pahad',
    beds: 4,
    baths: 3,
    area: '3500 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Mountain View Cottage',
    price: 'NPR 2,75,00,000',
    location: 'Pokhara, Gandaki',
    region: 'Himal',
    beds: 3,
    baths: 2,
    area: '2200 sq ft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Agricultural Land',
    price: 'NPR 1,25,00,000',
    location: 'Chitwan, Bagmati',
    region: 'Terai',
    beds: 0,
    baths: 0,
    area: '1.5 Bigha',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Modern Apartment',
    price: 'NPR 85,00,000',
    location: 'Lalitpur, Bagmati',
    region: 'Pahad',
    beds: 2,
    baths: 2,
    area: '1200 sq ft',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    featured: false,
  },
]

export default function HomeScreen() {
  return (
    <div className="safe-top">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-himalayan-600 to-himalayan-700 px-4 pt-6 pb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-2xl font-bold">Namaste! 🏔️</h1>
            <p className="text-himalayan-100 text-sm mt-1">Find your dream property</p>
          </div>
          <button className="touch-target p-2 rounded-full bg-white/10 backdrop-blur">
            <Heart className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Region Pills */}
        <div className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar">
          {['All', 'Terai', 'Pahad', 'Himal'].map((region) => (
            <button
              key={region}
              className="touch-target px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium whitespace-nowrap hover:bg-white/30 transition-colors"
            >
              {region}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Featured Section */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-himalayan-600" />
            Featured Properties
          </h2>
          <button className="text-sm text-himalayan-600 font-medium">See All</button>
        </div>

        <div className="space-y-4">
          {featuredProperties.slice(0, 2).map((property, index) => (
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

      {/* Recent Listings */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-terai-600" />
            Recent Listings
          </h2>
          <button className="text-sm text-himalayan-600 font-medium">See All</button>
        </div>

        <div className="space-y-4">
          {featuredProperties.slice(2).map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
