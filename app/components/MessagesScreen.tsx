'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Send, Clock, CheckCheck, Search } from 'lucide-react'
import { useState } from 'react'

const conversations = [
  {
    id: 1,
    name: 'Support Team',
    lastMessage: 'We are here to help you!',
    time: '2m ago',
    unread: 2,
    avatar: '🏢',
    online: true,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    lastMessage: 'Is the property still available?',
    time: '1h ago',
    unread: 0,
    avatar: '👤',
    online: false,
  },
  {
    id: 3,
    name: 'Maya Sharma',
    lastMessage: 'Thank you for the information',
    time: '3h ago',
    unread: 0,
    avatar: '👤',
    online: true,
  },
]

export default function MessagesScreen() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [message, setMessage] = useState('')

  if (selectedChat) {
    return (
      <div className="safe-top min-h-screen bg-gray-50 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white px-4 py-4 shadow-sm flex items-center gap-3">
          <button
            onClick={() => setSelectedChat(null)}
            className="touch-target text-himalayan-600 font-medium"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-himalayan-400 to-himalayan-600 flex items-center justify-center text-white text-xl">
                {conversations[0].avatar}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-terai-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{conversations[0].name}</h2>
              <p className="text-xs text-terai-600">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-himalayan-400 to-himalayan-600 flex items-center justify-center text-white flex-shrink-0">
              🏢
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
              <p className="text-gray-900">Namaste! How can we help you today?</p>
              <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 justify-end"
          >
            <div className="bg-himalayan-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
              <p>I have a question about property listing</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-xs text-himalayan-100">10:32 AM</p>
                <CheckCheck className="w-4 h-4 text-himalayan-100" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-himalayan-400 to-himalayan-600 flex items-center justify-center text-white flex-shrink-0">
              🏢
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
              <p className="text-gray-900">Of course! What would you like to know about listing your property?</p>
              <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
            </div>
          </motion.div>
        </div>

        {/* Message Input */}
        <div className="bg-white px-4 py-4 border-t border-gray-200 safe-bottom">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
            />
            <button className="touch-target p-3 bg-himalayan-600 text-white rounded-xl hover:bg-himalayan-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="safe-top min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-himalayan-500"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-gray-100">
        {conversations.map((conv, index) => (
          <motion.button
            key={conv.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedChat(conv.id)}
            className="w-full bg-white px-4 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-himalayan-400 to-himalayan-600 flex items-center justify-center text-white text-2xl">
                {conv.avatar}
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-terai-500 border-2 border-white rounded-full" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-gray-900">{conv.name}</h3>
                <span className="text-xs text-gray-500">{conv.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                {conv.unread > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-himalayan-600 text-white text-xs rounded-full font-medium">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Support Banner */}
      <div className="mx-4 my-4 bg-gradient-to-br from-himalayan-600 to-himalayan-700 rounded-2xl p-6 text-white">
        <MessageCircle className="w-12 h-12 mb-3" />
        <h3 className="font-bold text-lg mb-2">Need Help?</h3>
        <p className="text-himalayan-100 text-sm mb-4">
          Our support team is available 24/7 to assist you with any questions.
        </p>
        <button className="touch-target w-full py-3 bg-white text-himalayan-700 rounded-xl font-medium hover:bg-himalayan-50 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  )
}
