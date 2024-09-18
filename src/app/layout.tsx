import "@styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Providers } from "@/components/Generic/ThemeProvider";

export const metadata: Metadata = {
  title: "NexLabs - Index your trades, your investment, your future",
  description: "NexLabs: Index your trades, your investment, your future.",
  icons: [{ rel: "icon", url: "/favico.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-white dark:bg-nexBlack-500">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
