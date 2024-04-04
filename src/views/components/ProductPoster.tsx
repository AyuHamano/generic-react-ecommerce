import {Card, CardContent, Grid, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ProductType} from "../../types/ProductType";


export function ProductPoster({title, thumbnail, description, price}: ProductType) {
    return (
        <Grid item sx={{cursor: "pointer", backgroundColor: "white", pb: 2,}}>
            <Card sx={{width: 270, height: 450}}>
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
        </Grid>
    )


}