import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { connectMongoDB } from "@/config/database-config";
import LayoutProvider from "@/providers/layout-provider";

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

export const metadata: Metadata = {
  title: "ELEARN.DEV",
  description: "E-Learning platform for developers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectMongoDB();

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
