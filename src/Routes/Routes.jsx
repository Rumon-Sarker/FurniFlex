import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";
import SignUp from "../pages/SignUp/SignUp";

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
            }
        ]

    },
]);