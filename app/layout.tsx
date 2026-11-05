import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://adeenaramzan.github.io/obys-agency-clone"),
  title: "Obys Agency — Creative Design & Development Agency",
  description:
    "We design unique web and graphic experiences. Award-winning boutique design agency crafting wow digital projects worldwide.",
  openGraph: {
    title: "Obys Agency — Creative Design & Development Agency",
    description:
      "We design unique web and graphic experiences. Award-winning boutique design agency crafting wow digital projects worldwide.",
    url: "https://adeenaramzan.github.io/obys-agency-clone",
    siteName: "Obys Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Obys Agency — We Design Unique Web & Graphic Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obys Agency — Creative Design & Development Agency",
    description:
      "We design unique web and graphic experiences. Award-winning boutique design agency crafting wow digital projects worldwide.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
