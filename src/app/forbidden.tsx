import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Forbidden() {
 return (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
   <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
    <div className="mb-6 text-center">
     <h2 className="mb-2 text-2xl font-bold text-gray-900">Access Denied</h2>
     <p className="text-gray-600">You are not authorized to access this resource.</p>
    </div>

    <div className="mt-6 flex justify-center">
     <Link href="/sign-in">
      <Button className="mr-4 bg-teal-600 hover:bg-teal-700">Sign In</Button>
     </Link>
     <Link href="/">
      <Button variant="outline">Return Home</Button>
     </Link>
    </div>
   </div>
  </div>
 )
}