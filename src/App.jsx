import { Outlet } from "react-router-dom"
import Navbar from "./pages/Navbar/Navbar"
import Footer from "./pages/Footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
