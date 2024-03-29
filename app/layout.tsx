import { NEXT_PUBLIC_URL } from './config';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
