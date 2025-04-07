import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function getInitials(fullname: string, username?: string) {
  if (username) {
    return username.charAt(0).toUpperCase();
  }

  const nameParts = fullname?.split(' ') || [];
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');

  return initials;
}

export const useUpdateURL = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateURL = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (searchTerm) {
      params.set("search", searchTerm)
    } else {
      params.delete("search")
    }

    const newURL = `${pathname}?${params.toString()}`
    router.replace(newURL)
    return newURL
  }

  return updateURL
}