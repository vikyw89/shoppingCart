import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProductPage, loader as productLoader } from './routes/ProductPage';
import { Root } from './routes/Root';
import ErrorPage from './error-page';
import { Cart } from './routes/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products/:id",
    element: <ProductPage/>,
    loader: productLoader
  },
  {
    path: "/cart",
    element: <Cart/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
