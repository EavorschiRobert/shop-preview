import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
      <div className="w-screen h-screen bg-primary">
        <Topbar />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
        />
        <Outlet />
      </div>
  );
};

export default App;
