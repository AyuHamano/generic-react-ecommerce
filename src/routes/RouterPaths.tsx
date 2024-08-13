import {createBrowserRouter} from "react-router-dom";
import Home from "../views/apps/home/Home.tsx";
import Layout from "../layout/Layout.tsx";
import {Login} from "./Login.tsx";
import {ProductView} from "../views/apps/product/ProductView.tsx";

const routerPaths = createBrowserRouter([
    {
        path: "generic-react-ecommerce",
        element: <Layout/>,
        children: [
            {
                path: '', element: <Home/>
            }
            , {
                path: 'login', element: <Login/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'products',
                element: <Home/>
            },
            {
                path: 'products/:id',
                element: <ProductView/>
            }]
    }

])

export default routerPaths
