import {Grid} from "@mui/material";
import {useFetch} from "../../hooks/useFetch.ts";
import {CategoryPoster} from "./CategoryPoster.tsx";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SpaIcon from "@mui/icons-material/Spa";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ChairIcon from "@mui/icons-material/Chair";

export function CategoryList() {
    const params = {
        url: 'https://dummyjson.com/products/categories',
        type: 'categories'
    }

    const {data} = useFetch(params)

    function returnIcon(category: string) {
        switch (category) {
            case 'smartphones':
                return (<SmartphoneIcon fontSize={'large'}/>)
            case 'laptops':
                return <LaptopMacIcon fontSize={'large'}/>
            case 'fragrances':
                return <SpaIcon fontSize={'large'}/>
            case 'skincare':
                return <FaceRetouchingNaturalIcon fontSize={'large'}/>
            case 'groceries':
                return <RestaurantIcon fontSize={'large'}/>
            case 'home-decoration':
                return <ChairIcon fontSize={'large'}/>
        }
    }

    return (
        <Grid container spacing={2}>
            {data?.map(item =>
                <CategoryPoster name={item}>
                    {returnIcon(item)}
                </CategoryPoster>
            )}
        </Grid>
    )
}