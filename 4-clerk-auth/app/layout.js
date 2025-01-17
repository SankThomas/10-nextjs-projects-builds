import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/appsidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next15 Starter Template",
  description:
    "Next15 Starter Template with JavaScript, ShadCN, TailwindCSS and Prettier Plugin TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SidebarProvider className="flex items-center justify-center">
            <SignedIn>
              <AppSidebar />
            </SignedIn>
            {children}
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
