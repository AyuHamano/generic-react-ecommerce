import {Box, Grid, Pagination, Typography} from "@mui/material";

import {useState} from "react";
import {useFetchList, useFetchProps} from "../../../hooks/useFetchList.ts";
import {ProductPoster} from "./components/ProductPoster.tsx";
import {ProductType} from "../../../types/ProductType.ts";
import {useNavigate} from "react-router-dom";
import {getCategoryProducts, getProductsSearch} from "../../../services/apiUrls.ts";

function ProductsListSearch({search, category}: { search?: string, category?: string }) {
    const url = category ? getCategoryProducts(category) : getProductsSearch()

    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const params: useFetchProps = {
        url: url,
        search: search,
        type: 'products',
        limit: 20,
        skip: !search ? (page - 1) * 20 : 0,
        category: category
    }
    const {data, total} = useFetchList<ProductType>(params)

    const pagesNumber = () => {
        const number = total / 20
        return Math.floor(number)
    }

    const goTo = (id: number | undefined) => {
        navigate(`/generic-react-ecommerce/products/${id}`)
    }

    return (
        <Grid item container spacing={4} justifyContent={'center'} display={'flex'} sx={{my: 15}}>
            {data?.length > 0 ?
                (<>
                        {data?.map(item =>

                            <ProductPoster key={item.id} product={item} onClick={goTo}/>
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
                <Box sx={{my: 10}}><Typography>There's no items to show</Typography></Box>}
        </Grid>
    )
}

export default ProductsListSearch