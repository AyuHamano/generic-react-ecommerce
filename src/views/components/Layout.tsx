import {Grid} from "@mui/material";
import HorizontalMenu from "../HorizontalMenu.tsx";
import {ReactNode, useState} from "react";
import {ProductsList} from "../../pages/ProductsList.tsx";
import {CategoryPoster} from "./CategoryPoster.tsx";

export function Layout({children}: { children: ReactNode }) {
    const [search, setSearch] = useState('')


    return (
        <Grid container justifyContent={'center'}>
            <CategoryPoster name={'ayumi'}
                            image={'https://images.unsplash.com/photo-1546177461-79dfec0b0928?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3600&q=80'}/>


            <HorizontalMenu search={search} setSearch={setSearch}/>
            <ProductsList search={search}/>
            {children}
        </Grid>
    )
}