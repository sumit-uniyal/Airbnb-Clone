import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './provider/ToasterProvider';
import LoginModal from './components/modals/LoginModal';

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Full stack Airbnb Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
