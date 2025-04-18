'use client'

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  GearSix,
  TestTube,
} from "@phosphor-icons/react"
import { useUser } from "@clerk/nextjs"
import { useMobileSidebar } from "@/contexts/MobileSidebarContext"
import { NextLogo } from "./logos/NextLogo"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  onClick?: () => void
}

interface SidebarProps {
  isMobile?: boolean
}

const linkData = [
  // Set labels and links for the sidebar items
  // { label: "Dashboard", link: "/dashboard", icon: ChartLine },
  { label: "Test Page", link: "/test", icon: TestTube },
]

export function Sidebar({ isMobile = false }: SidebarProps) {
  const pathname = usePathname()
  const { user, isLoaded: userLoaded } = useUser()
  const { closeSidebar } = useMobileSidebar()

  const SidebarItem = ({ icon: Icon, label, href, onClick }: SidebarItemProps) => {
    const isActive = pathname === `/${href}` || pathname.startsWith(`/${href}/`)
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "flex font-semibold items-center gap-3 rounded-full px-3 py-2 text-sm transition-all hover:bg-blue-50 hover:text-blue-600 w-full lg:w-3/4",
          isActive
            ? "bg-blue-700 text-white hover:bg-blue-700 hover:text-white"
            : "text-gray-700 dark:text-gray-400"
        )}
      >
        <Icon size={24} />
        <span>{label}</span>
      </Link>
    )
  }

  if (!userLoaded) return null

  const isAdmin = user?.organizationMemberships?.[0]?.role === "org:admin"
  const sidebarLinks = isAdmin ? linkData : linkData.slice(0, 5)

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white dark:bg-gray-900 h-full",
        isMobile ? "w-full" : "w-64"
      )}
    >
      <div className="flex h-14 items-center border-b px-5">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <NextLogo />
          </div>
          <span className="text-lg dark:text-white">NextJS + Clerk</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto p-5">
        <nav className="flex flex-col gap-y-5 py-8">
          {sidebarLinks.map((link) => (
            <SidebarItem
              key={link.label}
              icon={link.icon}
              label={link.label}
              href={link.link}
              onClick={isMobile ? closeSidebar : undefined}
            />
          ))}
        </nav>
      </div>

      <div className="p-5">
        <button
          className="flex w-full items-center gap-2 rounded-full p-2 text-gray-800 dark:text-white hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800"
          onClick={() => {
            console.log("Settings clicked");
          }}
        >
          <GearSix size={24} weight="bold" />
          <span className="font-semibold">Settings</span>
        </button>
      </div>
    </div>
  )
}
