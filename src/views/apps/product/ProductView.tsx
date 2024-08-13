import {Container, Grid, Rating, Typography} from "@mui/material";
import {ProductType} from "../../../types/ProductType.ts";
import UseFetchItem from "../../../hooks/UseFetchItem.tsx";
import {getProductById} from "../../../services/apiUrls.ts";
import {useParams} from "react-router-dom";

export function ProductView() {

    const {id} = useParams()

    const url = getProductById(id)

    const {data} = UseFetchItem<ProductType>(url)


    return (
        <Grid container spacing={6} sx={{my: 15}}>
            <Container maxWidth="lg">
                <img src={data?.thumbnail}/>
                <Typography variant="h5">
                    {data?.title}
                </Typography>
                <Typography>
                    {data?.description}
                </Typography>
                <Typography>{data?.rating}</Typography>
                <Rating name="read-only" value={data?.rating} readOnly/>
            </Container>


        </Grid>
    )
}

