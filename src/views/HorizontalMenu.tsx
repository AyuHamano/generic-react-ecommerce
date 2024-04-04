import {AppBar, Box, Button, Container, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SearchIcon from '@mui/icons-material/Search';

export default function HorizontalMenu({search, setSearch}: { search: string, setSearch: (search: string) => void }) {
    const theme = useTheme()
    return (
        <AppBar sx={{
            backgroundColor: theme.palette.primary.main
        }}>
            <Container>
                <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <Box sx={{ml: 4, display: "flex", justifyContent: "flex-start", alignItems: "center "}}>
                        <AcUnitIcon fontSize={'large'}/>
                        <Typography variant={'h4'}>
                            LoopStore
                        </Typography>

                        <Button size={'small'} sx={{color: "white", ml: 5, mr: 2}}>
                            PRODUCTS
                        </Button>
                        <Button size={'small'} sx={{color: "white"}}>
                            CATEGORIES
                        </Button>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>

                        <InputBase style={{color: "inherit", border: "0.5px solid", fontSize: "small", borderRadius: 5}}
                                   placeholder={"Search by title..."}
                                   value={search}
                                   onChange={event => setSearch(event.target.value)}
                                   startAdornment={<SearchIcon fontSize={"small"} sx={{marginInline: 1}}/>}/>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    )
}
