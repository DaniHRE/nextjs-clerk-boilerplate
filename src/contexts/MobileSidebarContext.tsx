'use client'

import { createContext, useContext, useState } from 'react'

interface MobileSidebarContextType {
  isSidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

const MobileSidebarContext = createContext<MobileSidebarContextType | null>(null)

export function MobileSidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  return (
    <MobileSidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}>
      {children}
    </MobileSidebarContext.Provider>
  )
}

export function useMobileSidebar() {
  const context = useContext(MobileSidebarContext)
  if (!context) {
    throw new Error("useMobileSidebar must be used within a MobileSidebarProvider")
  }
  return context
}
