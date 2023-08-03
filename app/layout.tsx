"use client"
import ShadowPanel from '@/components/rpui/ShadowPanel'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/rpui/NavbarCgpt/Navbar'
// import Navbar from "@/components/rpui/NavbarGPT2/Navbar";
// import Navbar from "@/components/rpui/NavbarBard/Navbar";

import './globals.scss'

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Lambi", url: "/lambi" },
];

const menuItems: never[] = [
];

// const Page = () => {
//   return (
//     <>
//       <Navbar logo="/path/to/logo.png" links={links} menuItems={menuItems} />
//       {/* Rest of your page content */}
//     </>
//   );
// };

// export default Page;

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'Next App exebitions',
//     description: 'Just an example of stupidity of todays frontend framvorks',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar logo="/icon3.png" links={links} menuItems={menuItems} />

      <ShadowPanel>
        {children}
      </ShadowPanel>  

      <footer>
        <h1>Next02-testapp ver. ver - 0.04.02-Tupti </h1>
      </footer>
      </body>
    </html>
  );

}
