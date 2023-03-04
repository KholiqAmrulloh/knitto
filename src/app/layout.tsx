import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'PT. Knitto Tekstil Indonesia',
  description: 'Generated by create next app',
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
