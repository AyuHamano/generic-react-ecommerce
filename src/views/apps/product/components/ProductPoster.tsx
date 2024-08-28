import {Button, Card, CardContent, Grid, Rating, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ProductType} from "../../../../types/ProductType.ts";


export function ProductPoster({product, onClick}: {
    product: ProductType, onClick:
        (id: number | undefined) => void
}) {

    return (
        <Card sx={{width: 300, cursor: "pointer", height: 480, boxShadow: 'bold', m: 5}}
              onClick={() => onClick(product?.id)}>
            <img style={{objectFit: "contain", borderRadius: 5}} width={270} height={280}
                 src={product.thumbnail}
                 alt={""}/>
            <CardContent>
                <Typography height={45} variant={"body1"} sx={{color: "primary"}}>
                    {product.title}
                </Typography>

                <Rating name="read-only" value={product.rating} readOnly/>

                <Typography height={60} variant={"subtitle2"} color={"secondary.contrastText"}>
                    {product.description.length > 60 ? product.description.slice(0, 60) + '...' : product.description}
                </Typography>
                <Grid item xs={12} justifyContent={'space-between'} display={'flex'} alignItems={'center'}>
                    <Typography variant={"body1"} color={"primary"}>
                        {'R$ ' + product.price}
                    </Typography>
                    <Typography color={'error'}>- {product?.discountPercentage}%</Typography>
                    <Button size={'small'} variant={'contained'} sx={{backgroundColor: 'secondary.main'}}>
                        {/*Adicionar ao Carrinho*/}
                        <AddShoppingCartIcon/>
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    )


}