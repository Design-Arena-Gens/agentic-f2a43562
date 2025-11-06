'use client'

import { motion } from 'framer-motion'
import { User, Heart, Home, Settings, FileText, Bell, Lock, HelpCircle, LogOut, ChevronRight, Shield } from 'lucide-react'

export default function ProfileScreen() {
  const menuItems = [
    {
      icon: Home,
      label: 'My Listings',
      color: 'text-himalayan-600',
      bgColor: 'bg-himalayan-100',
      count: 3,
    },
    {
      icon: Heart,
      label: 'Saved Properties',
      color: 'text-pahad-600',
      bgColor: 'bg-pahad-100',
      count: 12,
    },
    {
      icon: Shield,
      label: 'KYC Verification',
      color: 'text-terai-600',
      bgColor: 'bg-terai-100',
      badge: 'Verified',
    },
    {
      icon: Bell,
      label: 'Notifications',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: FileText,
      label: 'Documents',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Settings,
      label: 'Settings',
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
    },
    {
      icon: Lock,
      label: 'Privacy & Security',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  return (
    <div className="safe-top min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-himalayan-600 to-himalayan-700 px-4 pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-3xl border-4 border-white/30">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold">Ram Bahadur</h1>
            <p className="text-himalayan-100 text-sm">ram.bahadur@example.com</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="px-3 py-1 bg-terai-500 rounded-full text-white text-xs font-medium flex items-center gap-1">
                <Shield className="w-3 h-3" />
                KYC Verified
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-4"
        >
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-himalayan-600">3</p>
              <p className="text-xs text-gray-600 mt-1">Listings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-terai-600">12</p>
              <p className="text-xs text-gray-600 mt-1">Saved</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pahad-600">24</p>
              <p className="text-xs text-gray-600 mt-1">Views</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-2 pb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow touch-target"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-900">{item.label}</h3>
              </div>
              {item.count !== undefined && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                  {item.count}
                </span>
              )}
              {item.badge && (
                <span className="px-2 py-1 bg-terai-100 text-terai-700 text-xs rounded-full font-medium">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          )
        })}

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: menuItems.length * 0.05 }}
          className="w-full bg-red-50 rounded-xl p-4 flex items-center gap-4 hover:bg-red-100 transition-colors touch-target mt-4"
        >
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
            <LogOut className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-medium text-red-600">Logout</h3>
          </div>
          <ChevronRight className="w-5 h-5 text-red-400" />
        </motion.button>
      </div>

      {/* App Info */}
      <div className="px-4 pb-8 text-center">
        <p className="text-sm text-gray-500">Nepal Real Estate v1.0.0</p>
        <p className="text-xs text-gray-400 mt-1">Made with ❤️ in Nepal</p>
      </div>
    </div>
  )
}
