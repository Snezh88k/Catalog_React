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

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "product/:id",
        loader: productLoader,
        Component: Product,
      },
      {
        path: "admin",
        Component: AdminPanel,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
