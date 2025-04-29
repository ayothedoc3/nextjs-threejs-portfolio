// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ayokunle Ademola-John | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Ayokunle Ademola-John, specializing in Next.js, Three.js, and React Three Fiber development" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
