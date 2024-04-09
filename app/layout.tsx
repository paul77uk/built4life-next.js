import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  title: "Built4Life",
  description: "workout app to track your workouts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark`}
        suppressHydrationWarning={true}
      >
        <div className="container mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
