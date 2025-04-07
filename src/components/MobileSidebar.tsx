'use client'

import { useRef, Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { Sidebar } from './Sidebar'
import { X } from '@phosphor-icons/react'
import { useMobileSidebar } from '@/contexts/MobileSidebarContext'

export default function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useMobileSidebar()
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  return (
    <Transition
      show={isSidebarOpen}
      as={Fragment}
      enter="transition-transform duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="fixed inset-0 z-50 flex md:hidden">
        <div className="fixed inset-0 " onClick={closeSidebar} />

        <Transition
          show={isSidebarOpen}
          as={Fragment}
          enter="transition-transform duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div
            ref={mobileMenuRef}
            className="relative z-10 w-3/4 bg-white h-full shadow-2xl"
          >
            <div className="w-full flex justify-end px-5 pt-5">
              <button onClick={closeSidebar} className="flex z-10 justify-end items-end">
                <X size={25} />
              </button>
            </div>

            <div className="-mt-10">
              <Sidebar isMobile />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  )
}
