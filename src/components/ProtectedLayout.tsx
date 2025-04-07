'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import MobileSidebar from './MobileSidebar'
import { Sidebar } from './Sidebar'
import Navbar from './Navbar'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace(`/log-in?redirect_url=${encodeURIComponent(pathname)}`)
    }
  }, [isLoaded, isSignedIn, pathname, router])

  if (!isLoaded || !isSignedIn) return null

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar desktop */}
      <div className="h-screen bg-white dark:bg-[#1f1f1f] sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar mobile - só renderiza quando aberta */}
      <MobileSidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">{children}</div>
      </div>
    </div>
  )
}