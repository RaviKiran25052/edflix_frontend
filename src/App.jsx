import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WebDev from "./pages/WebDev"
import AppDev from "./pages/AppDev"
import ProdDev from "./pages/ProdDev"
import CyberSecurity from "./pages/CyberSecurity"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebDev />} />
        <Route path="/app" element={<AppDev />} />
        <Route path="/product" element={<ProdDev />} />
        <Route path="/cyber" element={<CyberSecurity />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App