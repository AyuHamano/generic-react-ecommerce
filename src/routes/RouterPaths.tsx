import {createBrowserRouter} from "react-router-dom";
import Home from "../views/apps/home/Home.tsx";
import Layout from "../layout/Layout.tsx";
import {Login} from "./Login.tsx";

const routerPaths = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '', element: <Home/>
            }
            , {
                path: '/login', element: <Login/>
            },
            {
                path: '/home',
                element: <Home/>
            }]
    }

])

export default routerPaths
