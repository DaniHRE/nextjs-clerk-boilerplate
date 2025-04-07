import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MobileSidebarProvider } from "@/contexts/MobileSidebarContext";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NextJS + Clerk",
  description: "NextJS + Clerk Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <TooltipProvider>
          <MobileSidebarProvider>
            <body className={`${poppins.variable} antialiased`}>
              <main className="w-full min-h-screen bg-[#f3f4f6]">
                {children}
              </main>
            </body>
          </MobileSidebarProvider>
        </TooltipProvider>
      </ClerkProvider>
    </html>
  );
}