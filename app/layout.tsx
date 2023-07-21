import ShadowPanel from '@/components/rpui/ShadowPanel'
import Navbar from '@/components/rpui/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar />

      <ShadowPanel>
        {children}
      </ShadowPanel>  

      <footer>
      <h1>Next02-testapp ver. ver - 0.01.12 </h1>
      </footer>
      </body>
    </html>
  )
}
