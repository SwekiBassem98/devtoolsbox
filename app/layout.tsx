import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevToolsBox - Free Developer Tools',
  description: 'A collection of free developer tools including JSON formatter, password generator, Base64 encoder, markdown preview, and slug generator.',
  keywords: ['developer tools', 'JSON formatter', 'password generator', 'Base64 encoder', 'markdown preview', 'slug generator', 'SEO tools'],
  authors: [{ name: 'DevToolsBox' }],
  openGraph: {
    title: 'DevToolsBox - Free Developer Tools',
    description: 'A collection of free developer tools to boost your productivity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🔧</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                  DevToolsBox
                </span>
              </Link>

              {/* Navigation - Desktop */}
              <nav className="hidden md:flex items-center gap-8">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/tools" 
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                >
                  All Tools
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <nav className="md:hidden flex items-center gap-4">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm"
                >
                  Home
                </Link>
                <Link 
                  href="/tools" 
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm"
                >
                  Tools
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} DevToolsBox. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-gray-500 hover:text-primary-600 transition-colors text-sm"
                >
                  Home
                </Link>
                <Link 
                  href="/tools" 
                  className="text-gray-500 hover:text-primary-600 transition-colors text-sm"
                >
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
