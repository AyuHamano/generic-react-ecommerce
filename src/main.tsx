import * as React from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {colors, createTheme, ThemeProvider} from "@mui/material";
import {pink, purple} from "@mui/material/colors";
import routerPaths from "./routes/RouterPaths.tsx";


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

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={routerPaths}/>
    </ThemeProvider>
)
