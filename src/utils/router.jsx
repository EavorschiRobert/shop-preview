import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../components/Contact";
import Home from '../components/home/Home';
import Products from "../components/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "product", element: <Products /> },
      { path: "product/:category", element: <Products /> },
    ],
  },
]);
