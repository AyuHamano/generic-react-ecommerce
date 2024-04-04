import {Grid} from "@mui/material";
import HorizontalMenu from "../HorizontalMenu.tsx";
import {ReactNode, useState} from "react";
import {ProductsList} from "../../routes/ProductsList.tsx";

export function Layout({children}: { children: ReactNode }) {
    const [search, setSearch] = useState('')


    return (
        <Grid container justifyContent={'center'} sx={{pt: 10}}>


            <HorizontalMenu search={search} setSearch={setSearch}/>

            <ProductsList search={search}/>
            {children}
        </Grid>
    )
}