import {Box, Grid, Typography} from "@mui/material";
import {useFetch} from "../hooks/useFetch.ts";
import {ProductPoster} from "../views/components/ProductPoster.tsx";
import {ProductType} from "../types/ProductType.ts";

export function ProductsList({search}: { search: string }) {
    const url = 'https://dummyjson.com/products' + !search ? '/search' : ''
    const {data, loading}: { data: ProductType[], loading: boolean } = useFetch({url, search})

    return (
        <Grid item container spacing={4} justifyContent={'center'} sx={{my: 13}}>
            {loading && <Grid item xs={12} justifyContent={'center'}><Typography>loading...</Typography></Grid>}
            {data?.length > 0 ? data.map(item =>

                (<ProductPoster title={item.title} thumbnail={item.thumbnail} description={item.description}/>)
            ) : <Box> <Typography>There's no items to be show</Typography></Box>}


        </Grid>
    )

}