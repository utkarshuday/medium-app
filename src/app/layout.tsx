import type { Metadata } from 'next';
import '@/ui/globals.css';
import { source_serif } from '@/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Medium',
    default: 'Medium',
  },
  description: 'A Medium-like Blog Application by Utkarsh Uday',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={source_serif.variable}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
