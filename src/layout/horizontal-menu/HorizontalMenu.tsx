import {AppBar, Badge, Box, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoriesHorizontalMenu from "./CategoriesHorizontalMenu.tsx";

export default function HorizontalMenu({search, setSearch}: { search: string, setSearch: (search: string) => void }) {
    const theme = useTheme()
    return (
        <AppBar sx={{
            backgroundColor: theme.palette.primary.main,
        }}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <Box sx={{ml: 4, display: "flex", justifyContent: "flex-start", alignItems: "center "}}>
                    <AcUnitIcon fontSize={'large'}/>
                    <Typography variant={'h4'}>
                        LoopStore
                    </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>

                    <InputBase
                        style={{
                            minWidth: 500,
                            borderRadius: 5,
                            backgroundColor: "white",
                            borderColor: theme.palette.primary.main
                        }}
                        placeholder={"Search by title..."}
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                        startAdornment={<SearchIcon fontSize={"small"} sx={{marginInline: 1}}/>}/>
                </Box>

                <Box sx={{display: "flex", alignItems: "center", gap: 5}}>
                    <Badge badgeContent={17} color="secondary">
                        <ShoppingCartIcon fontSize="large"/>
                    </Badge>
                    <AccountCircleIcon fontSize="large"/>
                </Box>

            </Toolbar>

            <CategoriesHorizontalMenu/>
        </AppBar>
    )
}
