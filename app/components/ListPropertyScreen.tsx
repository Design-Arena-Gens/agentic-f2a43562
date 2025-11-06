'use client'

import { motion } from 'framer-motion'
import { Camera, MapPin, Home, FileText, Upload, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function ListPropertyScreen() {
  const [step, setStep] = useState(1)

  return (
    <div className="safe-top min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">List Your Property</h1>
        <p className="text-sm text-gray-600">Share your property with thousands of buyers</p>
      </div>

      {/* Progress Steps */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= num ? 'bg-himalayan-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}
                animate={{ scale: step === num ? 1.1 : 1 }}
              >
                {step > num ? <CheckCircle className="w-6 h-6" /> : num}
              </motion.div>
              <span className="text-xs mt-2 text-gray-600">
                {num === 1 && 'Details'}
                {num === 2 && 'Photos'}
                {num === 3 && 'Location'}
                {num === 4 && 'KYC'}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Property Details */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Title</label>
              <input
                type="text"
                placeholder="e.g., Modern Villa in Kathmandu"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['House', 'Apartment', 'Land', 'Commercial'].map((type) => (
                  <button
                    key={type}
                    className="touch-target px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-himalayan-500 transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <div className="grid grid-cols-3 gap-2">
                {['Terai', 'Pahad', 'Himal'].map((region) => (
                  <button
                    key={region}
                    className="touch-target px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-himalayan-500 transition-colors text-sm"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <input
                  type="number"
                  placeholder="3"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <input
                  type="number"
                  placeholder="2"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
              <input
                type="text"
                placeholder="2500"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (NPR)</label>
              <input
                type="text"
                placeholder="3,50,00,000"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full touch-target py-4 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors"
            >
              Next: Add Photos
            </button>
          </motion.div>
        )}

        {/* Step 2: Photos */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Add Property Photos</h3>
              <p className="text-sm text-gray-600 mb-4">
                Upload high-quality images of your property
              </p>
              <button className="touch-target px-6 py-3 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors">
                <Upload className="w-5 h-5 inline mr-2" />
                Upload Photos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="aspect-square bg-gray-200 rounded-lg" />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 touch-target py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 touch-target py-4 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors"
              >
                Next: Location
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
              <button className="w-full touch-target py-3 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors">
                <MapPin className="w-5 h-5 inline mr-2" />
                Use Current Location
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                placeholder="Enter complete address"
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  placeholder="Kathmandu"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                <input
                  type="text"
                  placeholder="Bagmati"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 touch-target py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 touch-target py-4 bg-himalayan-600 text-white rounded-xl font-medium hover:bg-himalayan-700 transition-colors"
              >
                Next: KYC
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: KYC Verification */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-himalayan-50 border border-himalayan-200 rounded-xl p-4">
              <h3 className="font-medium text-himalayan-900 mb-2">📋 KYC Verification Required</h3>
              <p className="text-sm text-himalayan-700">
                To ensure trust and security, we need to verify your identity before listing your property.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-himalayan-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">Citizenship Card</h4>
                      <p className="text-sm text-gray-600">Front and back photos</p>
                    </div>
                  </div>
                  <button className="touch-target px-4 py-2 bg-himalayan-100 text-himalayan-700 rounded-lg font-medium">
                    Scan
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8 text-terai-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">Property Documents</h4>
                      <p className="text-sm text-gray-600">Ownership papers</p>
                    </div>
                  </div>
                  <button className="touch-target px-4 py-2 bg-terai-100 text-terai-700 rounded-lg font-medium">
                    Upload
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Camera className="w-8 h-8 text-pahad-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">Selfie Verification</h4>
                      <p className="text-sm text-gray-600">Take a live photo</p>
                    </div>
                  </div>
                  <button className="touch-target px-4 py-2 bg-pahad-100 text-pahad-700 rounded-lg font-medium">
                    Capture
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(3)}
                className="flex-1 touch-target py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
              <button className="flex-1 touch-target py-4 bg-terai-600 text-white rounded-xl font-medium hover:bg-terai-700 transition-colors">
                Submit Property
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
