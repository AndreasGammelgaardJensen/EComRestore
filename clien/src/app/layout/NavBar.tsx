import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";


const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
];

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}


export interface NavBarProps {
    toggleAction: () => void;
}


export const NavBar =({toggleAction}: NavBarProps) => {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} to='/' variant="h6" sx={navStyles}>Te Store</Typography>
                    <Button onClick={toggleAction}>Darkmode</Button>
                </Box>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}, index) => (
                        <ListItem key={index}
                            component={NavLink}
                            to={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{color: 'inherit'}}>
                        <Badge badgeContent='4' color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}, index) => (
                            <ListItem key={index}
                                component={NavLink}
                                to={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}

                            </ListItem>
                        ))}
                    </List>
                </Box>
                
                
            </Toolbar>
        </AppBar>
    )
}