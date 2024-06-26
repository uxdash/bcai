import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import PlanetaryBackground from '@/components/PlanetaryBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BirthChart.ai',
  description: 'Discover Your Cosmic Blueprint With AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanetaryBackground />
        <nav className="bg-purple-900/30 backdrop-blur-md shadow-md z-20 fixed top-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image src="/images/logo.png" alt="BirthChart.ai Logo" width={40} height={40} />
                </div>
                <span className="ml-2 text-2xl font-bold text-white font-display">BirthChart.ai</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-purple-900/30 backdrop-blur-md shadow-md mt-8">
          <div className="container mx-auto px-4 py-4 text-center text-white">
            <p>&copy; 2024 BirthChart.ai. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}