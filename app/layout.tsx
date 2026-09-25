import type {Metadata} from 'next';
import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Aurelia Home | Luxury Home Décor',
  description: 'Curating timeless pieces that harmonize heritage craftsmanship with contemporary minimalism.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-cream text-charcoal font-montserrat antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="flex-grow pt-24 md:pt-32">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
