import {Box, Grid, Pagination, Typography} from "@mui/material";
import {useFetch, useFetchProps} from "../../hooks/useFetch.ts";
import {ProductPoster} from "../components/ProductPoster.tsx";
import {useState} from "react";

function ProductsListSearch({search}: { search?: string }) {
    const url = 'https://dummyjson.com/products' + (search ? '/search' : '')
    const [page, setPage] = useState(1)

    const params: useFetchProps = {
        url: url,
        search: search,
        type: 'products',
        limit: 20,
        skip: !search ? (page - 1) * 20 : 0
    }
    const {data, total} = useFetch(params)

    const pagesNumber = () => {
        const number = total / 20
        return Math.floor(number)
    }

    return (
        <Grid item container spacing={6} justifyContent={'center'} display={'flex'} sx={{my: 13}}>
            {data?.length > 0 ?
                (<>
                        {data?.map(item =>

                            <ProductPoster key={item.id} title={item.title} thumbnail={item.thumbnail}
                                           description={item.description}
                                           price={item.price}/>
                        )}
                        <Grid item xs={12} justifyContent={'center'} display={'flex'}>
                            {total > 20 && <Pagination count={pagesNumber()} color={"primary"}
                                                       onChange={(e, value) => {
                                                           setPage(value)
                                                           console.log(e)
                                                       }}/>}
                        </Grid>
                    </>
                ) :
                <Box><Typography>There's no items to show</Typography></Box>}
        </Grid>
    )

}

export default ProductsListSearch