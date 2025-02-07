import LayoutWrapper from '@/components/layout/wrapper'
import 'react-loading-skeleton/dist/skeleton.css'
import '@/styles/global.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}

export default RootLayout
