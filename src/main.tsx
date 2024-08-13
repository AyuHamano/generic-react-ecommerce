import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import routerPaths from "./routes/RouterPaths.tsx";
import {grey} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: '#527853',
            light: '#9CA986',
            dark: '#5F6F65'
        },
        secondary: {
            light: '#AF8F6F',
            main: '#FFBF00',
            contrastText: grey[500]
        }
    },
})

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={routerPaths}/>
    </ThemeProvider>
)
