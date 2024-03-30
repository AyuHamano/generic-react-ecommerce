import {Grid, Typography} from "@mui/material";

interface CategoryPosterProps {
    image: string
    name: string
}

export function CategoryPoster({image, name}: CategoryPosterProps) {

    return (
        <Grid item justifyContent={'center'} sx={{mt: 10}}>
            <Grid item>
                <img style={{objectFit: "cover", borderRadius: 80}} height={120} width={120} src={image}/>
            </Grid>
            <Typography textAlign={'center'} variant={'body1'} color={"primary.light"} sx={{fontWeight: 'bold'}}>
                {name}
            </Typography>
        </Grid>
    )
}