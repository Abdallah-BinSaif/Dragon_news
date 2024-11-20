import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import NewsCards from "../components/cards/NewsCards.jsx";
import DetailLayout from "../layouts/DetailLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../components/authentication/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "",
                element:<Navigate to={"/category/01"}/>,
            },
            {
                path: "/category/:id",
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <NewsCards/>,
            }
        ]
    },
    {
        path: "/news/:id",
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <DetailLayout />,
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children:[
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <div>Register</div>
            }
        ]
    }
])


export  default router;