import {Grid} from "@mui/material";
import ProductsList from "../views/apps/product/ProductsList.tsx";

export function Home() {

    return (
        <Grid item xs={12}>
            <ProductsList/>
        </Grid>
    )
}