import { AppBar, Button, Toolbar, Typography } from "@mui/material"

export interface NavBarProps {
    toggleAction: () => void;
}


export const NavBar =({toggleAction}: NavBarProps) => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Te Store</Typography>
                <Button onClick={toggleAction}>Darkmode</Button>
            </Toolbar>
        </AppBar>
    )
}