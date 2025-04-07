import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { ClerkLogo } from "@/components/logos/ClerkLogo"
import { NextLogo } from "@/components/logos/NextLogo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <div className="absolute right-8 top-8">
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="border-b border-[#F2F2F4]">
              <div className="bg-[#F4F4F5] px-4 py-3 rounded-full inline-flex gap-4">
                <ClerkLogo />
                <div aria-hidden className="w-px h-6 bg-[#C7C7C8]" />
                <NextLogo />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold text-gray-900">Next.js + Clerk Boilerplate</h1>
            <p className="text-lg text-gray-600">A starter template with authentication built-in</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Authentication Ready</h2>
            <p className="mb-4 text-gray-600">
              User authentication is already set up with Clerk. Sign in, sign up, and user management work out of the
              box.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-3 text-xl font-semibold text-gray-800">Protected Routes</h2>
            <p className="mb-4 text-gray-600">
              Easily create protected routes that only authenticated users can access.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/sample">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90">
              Go to Protected Sample Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

