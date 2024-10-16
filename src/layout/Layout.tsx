import {Grid} from "@mui/material";
import {useState} from "react";
import {Outlet} from "react-router";
import HorizontalMenu from "./horizontal-menu/HorizontalMenu.tsx";
import ProductsListSearch from "../pages/product/ProductsList.tsx";
import {useSelector} from "react-redux";

function Layout() {
    const searchRef = useSelector(state => state.search.query);

    return (
        <Grid item xs={12}>
            <HorizontalMenu/>
            <main>
                {searchRef ?
                    <ProductsListSearch/>
                    : <Outlet/>
                }
            </main>
        </Grid>
    )

}

export default Layout