import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { HomeIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TForge",
    template: "%s | TForge",
  },
  description: "Organization is time... and time is money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="#"
                >
                  <span className="">TForge</span>
                </Link>
                <Button
                  className="ml-auto h-8 w-8"
                  size="icon"
                  variant="outline"
                >
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40">
              <Link className="block lg:hidden" href="#">
                <HomeIcon />
                <span className="sr-only">Home</span>
              </Link>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-zinc-950"
                      placeholder="Search projects and tasks..."
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border border-zinc-200 w-8 h-8 dark:border-zinc-800"
                    size="icon"
                    variant="ghost"
                  >
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            {children}
          </div>
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
