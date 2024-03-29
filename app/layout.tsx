import { NEXT_PUBLIC_URL } from './config';
import './globals.css';
import { Patrick_Hand } from 'next/font/google';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const hand = Patrick_Hand({
  preload: false,
  display: 'swap',
  variable: '--font-patrick-hand',
  weight: '400',
});

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
      <body className={`${hand.variable} bg-black text-white font-hand h-screen `}>{children}</body>
    </html>
  );
}
