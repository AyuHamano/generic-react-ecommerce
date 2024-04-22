import {Card, CardContent, Grid, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ProductType} from "../../types/ProductType";
import {useState} from "react";


export function ProductPoster({title, thumbnail, description, price}: ProductType) {
    const [cardHover, setCardHover] = useState('')

    return (
        <Card sx={{width: 270, cursor: "pointer", height: 450, boxShadow: cardHover || 'none', m: 5}}
              onMouseOver={() => setCardHover('bold')} onMouseOut={() => setCardHover('none')}>
            <img style={{objectFit: "contain", borderRadius: 5}} width={270} height={280}
                 src={thumbnail}
                 alt={""}/>
            <CardContent>
                <Typography height={45} variant={"body1"} sx={{color: "primary"}}>
                    {title.length > 60 ? title.slice(0, 60) + '...' : title}
                </Typography>


                <Typography sx={{height: 60}} variant={"subtitle2"} color={"secondary.contrastText"}>
                    {description.length > 60 ? description.slice(0, 60) + '...' : description}
                </Typography>
                <Grid item xs={12} justifyContent={'space-between'} display={'flex'}>
                    <Typography variant={"body1"} color={"primary"}>
                        {'R$ ' + price}
                    </Typography>
                    <FavoriteBorderIcon color={"primary"}/>
                </Grid>
            </CardContent>
        </Card>
    )


}