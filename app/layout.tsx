import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["cyrillic"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velvet to my skin",
  description: "Skin care products at your desired quality",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="w-full xl:px-24">{children}</main>
      </body>
    </html>
  );
}
