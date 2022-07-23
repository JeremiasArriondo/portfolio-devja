import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = {
  children: JSX.Element
}

export default function Layout ({ children}: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}