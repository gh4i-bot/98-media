import { DM_Sans, Libre_Caslon_Display, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'optional',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-sans',
});

const editorial = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  display: 'optional',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-editorial',
});

const endorsement = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  display: 'optional',
  variable: '--font-endorsement',
});

export const metadata = {
  title: '98 Media | Facebook Ads, Read Through the Numbers',
  description: 'Facebook advertising strategy, creative, and campaign systems grounded in your margins, customer value, offer, and follow-up.',
  icons: { icon: '/98-media-square.svg' },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${sans.variable} ${editorial.variable} ${endorsement.variable}`}><body>{children}</body></html>;
}
