import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Home from "../components/Home";

export const router = createBrowserRouter([
  {path: '/', element: <App/>, children: [
    {index: true, element: <Home/>},
    {path: 'menu', element: <Menu/>},
    {path: 'contact', element: <Contact/>}
  ] }
])