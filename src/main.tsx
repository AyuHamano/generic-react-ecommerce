import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Layout} from "./views/components/Layout.tsx";
import {colors, createTheme, ThemeProvider} from "@mui/material";
import {purple} from "@mui/material/colors";
import {App} from "./App.tsx";


const theme = createTheme({
    palette: {
        primary: {main: purple[800]},
        secondary: {
            main: colors.yellow[800],
            contrastText: colors.grey[600]
        }
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Layout>
                <App/>
            </Layout>
        </ThemeProvider>
    </React.StrictMode>,
)
