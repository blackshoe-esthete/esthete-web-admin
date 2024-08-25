import type { Metadata } from 'next'
import { Nav } from '@/components/ui/nav'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header className="pb-4 pt-16">
        <div className="container px-4 mx-auto">
          <Nav />
        </div>
      </header>
      {children}
    </>
  )
}