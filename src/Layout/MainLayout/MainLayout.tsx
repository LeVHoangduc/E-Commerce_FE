import Bheader from 'src/components/Bheader'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      {/* <Header /> */}
      <Bheader />
      {children}
      <Footer />
    </div>
  )
}
