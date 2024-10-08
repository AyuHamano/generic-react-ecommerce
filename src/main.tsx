import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import routerPaths from "./routes/RouterPaths.tsx";
import {grey} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            main: '#21094E',
            light: '#511281',
        },
        secondary: {
            light: '#A5E1AD',
            main: '#511281',
            contrastText: grey[500]
        }
    },
})

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={routerPaths}/>
    </ThemeProvider>
)
