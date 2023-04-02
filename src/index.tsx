import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import { Product } from "./components/product/Product";
import { productLoader } from "./components/product/productLoader";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { basename } from "path";

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "product/:id",
          loader: productLoader,
          element: <Product />,
        },
        {
          path: "admin",
          element: <AdminPanel />,
        },
      ],
    },
  ],
  { basename: "/Catalog_React" }
);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
