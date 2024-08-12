import {createBrowserRouter} from "react-router-dom";
import Home from "../views/apps/home/Home.tsx";
import Layout from "../layout/Layout.tsx";
import {Login} from "./Login.tsx";

const routerPaths = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: 'generic-react-ecommerce/', element: <Home/>
            }
            , {
                path: 'generic-react-ecommerce/login', element: <Login/>
            },
            {
                path: 'generic-react-ecommerce/home',
                element: <Home/>
            }]
    }

])

export default routerPaths
