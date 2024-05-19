import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieConsent from "react-cookie-consent";
const App = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <Topbar />
      {/* <CookieConsent
        location="bottom"
        buttonText="Agree"
        enableDeclineButton
        cookieName="myAwesomeCookieName2"
        style={{ background: "#102C57" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px"}}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent> */}
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
