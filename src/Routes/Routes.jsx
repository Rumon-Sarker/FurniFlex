import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";
import Products from "../pages/Products/Products";
import Cart from "../components/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/carts",
                element: <Cart />
            }
        ]

    },
]);