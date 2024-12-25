import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Share/ErrorPage";
import AllProject from "../Pages/Projects/AllProject";
import Contact from "../Pages/Contact/Contact";

 export  const router = createBrowserRouter([
    { path: "/", 
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/project',
                element:<AllProject></AllProject>,
            }
            ,
            {
                path:'/contact',
                element:<Contact></Contact>,
            }
        ]

    },
]);
