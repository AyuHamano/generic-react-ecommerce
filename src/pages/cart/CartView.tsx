import {Container, Grid, Typography} from "@mui/material";

export function CartView() {

    return (
        <Grid container spacing={6} sx={{my: 10}}>
            <Container maxWidth="lg">
                <Grid item xs={12}>
                    <Typography color={'error'}>17 items</Typography>
                </Grid>

            </Container>

        </Grid>
    )

}