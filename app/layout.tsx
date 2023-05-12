import './global.css'

export const metadata = {
  title: 'Card Game',
  description: 'A CARD GAME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
