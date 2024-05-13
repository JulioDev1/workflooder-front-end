import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactQueryClientProvider } from "./components/ReactQueryProvider";
import "./globals.css";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workflooder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
