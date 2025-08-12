import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LunrJS Search POC',
  description: 'Next.js application with LunrJS search functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 