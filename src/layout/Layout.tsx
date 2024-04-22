import {Grid} from "@mui/material";
import HorizontalMenu from "./HorizontalMenu.tsx";
import ProductsListSearch from "../views/apps/ProductsListSearch.tsx";
import * as React from "react";
import {useState} from "react";
import {Outlet} from "react-router";

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