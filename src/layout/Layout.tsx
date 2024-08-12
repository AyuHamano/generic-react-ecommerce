import {Grid} from "@mui/material";
import {useState} from "react";
import {Outlet} from "react-router";
import HorizontalMenu from "../views/HorizontalMenu.tsx";
import ProductsListSearch from "../routes/ProductsList.tsx";

function Layout() {
    const [search, setSearch] = useState('')

    return (
        <Grid item xs={12}>
            <HorizontalMenu search={search} setSearch={setSearch}/>

            <main>
                {search ?
                    <ProductsListSearch search={search}/>
                    : <Outlet/>
                }

            </main>
        </Grid>
    )

}

export default Layout