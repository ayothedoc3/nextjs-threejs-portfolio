// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Ayokunle Ademola-John | Full Stack Developer',
  description: 'Portfolio of Ayokunle Ademola-John, specializing in Next.js, Three.js, and React Three Fiber development',
  openGraph: {
    title: 'Ayokunle Ademola-John | Full Stack Developer',
    description: 'Portfolio of Ayokunle Ademola-John, specializing in Next.js, Three.js, and React Three Fiber development',
    url: 'https://yourdomain.com',
    siteName: 'Ayokunle Ademola-John Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayokunle Ademola-John | Full Stack Developer',
    description: 'Portfolio of Ayokunle Ademola-John, specializing in Next.js, Three.js, and React Three Fiber development',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
