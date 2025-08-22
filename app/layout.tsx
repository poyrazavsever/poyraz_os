import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
