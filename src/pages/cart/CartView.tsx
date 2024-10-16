import {Card, CardContent, CardHeader, Container, Divider, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export function CartView() {

    const cartItems = useSelector(state => state.cart.items);
    const totalValue = useSelector(state => state.cart.totalValue);

    return (
        <Grid container sx={{backgroundColor: '#ede7e7', height: '100vh', width: '100.4%'}} >
            <Container maxWidth="lg" sx={{mt: 20}}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={'Shopping Cart'}></CardHeader>

                        <CardContent>
                            <Divider />
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </Grid>
    )

}