import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import About from "../pages/About.jsx";
import NewsCards from "../components/cards/NewsCards.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/category/:id",
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <NewsCards/>,
            },
            {
                path: "/career",
                element: <About></About>,
            }
        ]
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/career",
        element: <About></About>,
    }
])


export  default router;