import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import {Toaster} from "@/components/ui/sonner"
import { ExitModal } from "@/components/modals/exit-modal";


const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DuoLearn",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal></ExitModal>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
