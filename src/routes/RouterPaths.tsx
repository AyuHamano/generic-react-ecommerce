import {createBrowserRouter} from "react-router-dom";
import {Login} from "../views/apps/Login.tsx";
import Home from "../views/apps/home/Home.tsx";
import * as React from "react";
import Layout from "../layout/Layout.tsx";

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
