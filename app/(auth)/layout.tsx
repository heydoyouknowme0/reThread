import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ReThreads",
  description:
    "A next.js Meta threads app meant to actually thread them together.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
