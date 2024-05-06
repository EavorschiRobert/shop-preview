import { Outlet } from "react-router-dom"
import Topbar from "./components/Topbar"

const App = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default App