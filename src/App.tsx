import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import HorizontalMenu from "./views/HorizontalMenu.tsx";
import {ProductsList} from "./routes/ProductsList.tsx";


export function App() {
    const [search, setSearch] = useState('')
    
    return (
        <Grid item xs={12}>
            <HorizontalMenu search={search} setSearch={setSearch}/>
            {!!search ?
                <ProductsList search={search}/> :
                <Outlet/>}
        </Grid>)
}