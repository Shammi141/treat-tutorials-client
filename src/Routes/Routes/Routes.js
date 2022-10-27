import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category/Category";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Premium from "../../Pages/Premium/Premium";
import Tutorial from "../../Pages/Tutorial/Tutorial/Tutorial";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/tutorial')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/tutorial/:id',
                element: <Tutorial></Tutorial>,
                loader: ({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            },
            {
                path: '/tutorial/premium-checkout/:id',
                element: <PrivateRoute>
                    <Premium></Premium>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`)
            },
            {
                path: '/tutorial',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: '*',
        element: <div className="fs-5 mt-5 fw-bold">You got<span className="text-warning">404</span> route! Please correct the URL. <br />
        </div>
    }

]) 