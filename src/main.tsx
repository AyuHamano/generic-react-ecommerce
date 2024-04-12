import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {colors, createTheme, ThemeProvider} from "@mui/material";
import {pink, purple} from "@mui/material/colors";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./routes/Home.tsx";
import {Login} from "./routes/Login.tsx";
import {App} from "./App.tsx";


const theme = createTheme({
    palette: {
        primary: {
            main: purple[800],
        },
        secondary: {
            main: pink[200],
            contrastText: colors.grey[600]
        }
    },
})

const router = createBrowserRouter([{path: '', element: <Home/>}, {path: '/login', element: <Login/>}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
            <App/>
        </ThemeProvider>

    </React.StrictMode>,
)
