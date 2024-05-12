import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StringContextProvider } from "@/utils/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xiron",
  description: "Created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="select-none">
          <StringContextProvider>
            {children}
          </StringContextProvider>
        </div>
      </body>
    </html>
  );
}
