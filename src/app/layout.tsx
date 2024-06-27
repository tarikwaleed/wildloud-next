import type { Metadata } from "next";
import "./globals.css";
import { Alexandria as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import ConvexClientProvider from "./ConvexClientProvider";
import { ClerkProvider } from '@clerk/nextjs'
import { PrimeReactProvider } from 'primereact/api';


const fontSans = FontSans({
  subsets: ["arabic"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={cn(
        "min-h-screen bg-gray-50 font-sans antialiased",
        fontSans.className
      )}>
        <PrimeReactProvider>
          <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} >
            <ConvexClientProvider >
              {children}
            </ConvexClientProvider>
          </ClerkProvider>
        </PrimeReactProvider>
      </body>
    </html >
  );
}
