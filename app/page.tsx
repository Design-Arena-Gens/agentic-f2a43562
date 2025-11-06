'use client'

import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import SearchScreen from './components/SearchScreen'
import ListPropertyScreen from './components/ListPropertyScreen'
import MessagesScreen from './components/MessagesScreen'
import ProfileScreen from './components/ProfileScreen'
import BottomNav from './components/BottomNav'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="min-h-screen pb-20 safe-bottom">
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'search' && <SearchScreen />}
      {activeTab === 'list' && <ListPropertyScreen />}
      {activeTab === 'messages' && <MessagesScreen />}
      {activeTab === 'profile' && <ProfileScreen />}

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  )
}
