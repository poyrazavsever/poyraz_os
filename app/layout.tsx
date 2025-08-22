import type { Metadata } from "next";
import "./globals.css";

import LiquidChrome from "../components/background"

export const metadata: Metadata = {
  title: "Welcome to Poyraz Os Distribution",
  description: "A modern operating system distribution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-screen h-screen">
          <LiquidChrome
            baseColor={[0.2, 0.2, 0.4]}
            speed={0.1}
            amplitude={0.5}
            interactive={true}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
