
// 🦄🦄👉내 프로젝트가 정리 더 잘되어있음
// 👉me_2023-0914-ecommerce-sass-redux_react

import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"


// 🍉Layout
const Layout = () => {
  return (
    <div className="app">
      <Navbar />

      {/* 🍉children👉 <Outlet/> */}
      <Outlet />
      <Footer />
    </div>
  );
};

// 🍀router
// 🍉createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // 🍉children
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
    {/* 🍉<RouterProvider router={router} />  */}
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App;
