'use client'

import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { Lock, SignOut, User } from '@phosphor-icons/react'
import { useUser, useClerk, UserButton } from '@clerk/nextjs'

const UserAvatar = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [openPassword, setOpenPassword] = useState(false)
    const { user, isLoaded } = useUser()
    const { signOut } = useClerk()

    const logoutHandler = async () => {
        try {
            await signOut()
            window.location.href = "/logout"
        } catch (error) {
            console.error('Logout error:', error)
            toast.error('Something went wrong. Please try again.')
        }
    }

    if (!isLoaded || !user) return null

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <UserButton />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 mt-2 mr-2 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 shadow-2xl">
                    <DropdownMenuItem onClick={() => setOpen(true)} className="text-gray-700 dark:text-gray-300 text-base gap-2">
                        <User className="mr-2" />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenPassword(true)} className="text-gray-700 dark:text-gray-300 text-base gap-2">
                        <Lock className="mr-2" />
                        Change Password
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler} className="text-red-600 text-base gap-2">
                        <SignOut className="mr-2" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* <AddUser open={open} setOpen={setOpen} userData={user} />
      <ChangePassword open={openPassword} setOpen={setOpenPassword} /> */}
        </>
    )
}

export default UserAvatar
