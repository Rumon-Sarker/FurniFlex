import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./pages/Navbar/Navbar"
import Footer from "./pages/Footer/Footer"

function App() {

  const location = useLocation().pathname;

  const showHeaderFooter = location === "/signUp" || location === "/login";
  console.log("location name", showHeaderFooter)

  return (
    <div >
      {!showHeaderFooter && <Navbar />}

      <Outlet />
      {!showHeaderFooter && <Footer />}

    </div>
  )
}

export default App
