import {Box, Grid, Typography} from "@mui/material";
import {useFetch} from "../hooks/useFetch.ts";
import {ProductPoster} from "../views/components/ProductPoster.tsx";
import {ProductType} from "../types/ProductType.ts";

export function ProductsList({search}: { search?: string }) {
    const url = 'https://dummyjson.com/products' + (search ? '/search' : '')
    const params = {
        url: url,
        search: search,
        type: 'products',
        limit: 20
    }
    const {data}: { data: ProductType[] } = useFetch(params)

    return (
        <Grid item container spacing={4} justifyContent={'center'} sx={{my: 13}}>
            {data?.length > 0 ? data.map(item => (
                    <>
                        <ProductPoster title={item.title} thumbnail={item.thumbnail} description={item.description}
                                       price={item.price}/>

                    </>

                )
            ) : <Box><Typography>There's no items to show</Typography></Box>}
        </Grid>
    )

}