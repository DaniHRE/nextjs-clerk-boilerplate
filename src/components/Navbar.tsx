import React, { useEffect, useState } from "react"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { usePathname, useSearchParams } from "next/navigation"
import MobileMenuButton from "./MobileMenuButton"
import UserAvatar from "./UserAvatar"
import { useUpdateURL } from "../utils"
import { Input } from "./ui/input"

const Navbar = () => {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  )
  const pathName = usePathname()
  const updateURL = useUpdateURL()

  useEffect(() => {
    updateURL(searchTerm)
  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.reload();
  }

  return (
    <div className="flex h-14 items-center border-b justify-between bg-white dark:bg-[#1f1f1f] px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <MobileMenuButton />

        {pathName !== "/dashboard" && (
          <form
            onSubmit={handleSubmit}
            className="w-64 2xl:w-[400px] relative"
          >
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 text-sm bg-muted placeholder:text-muted-foreground rounded-full"
            />
          </form>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <UserAvatar />
      </div>
    </div>
  )
}

export default Navbar