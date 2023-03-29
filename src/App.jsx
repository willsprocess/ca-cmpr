import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App