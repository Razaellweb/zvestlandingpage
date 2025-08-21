import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/query";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background antialiased",
          montserrat.className,
        )}
      >
        <QueryProvider>
          {children} <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
