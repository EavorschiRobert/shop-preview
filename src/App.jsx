import { Outlet } from "react-router-dom"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default App