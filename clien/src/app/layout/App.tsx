import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { NavBar } from "./NavBar"
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(true);

  const paletteType = darkmode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  const handleDarkmodeToggle = () => {
    setDarkmode(!darkmode)
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar toggleAction={handleDarkmodeToggle}/>
      <Box sx={{minHeight: '100vh',
        background: darkmode 
        ? 'radial-gradient(circle, #1e3aBa, #111B27)' 
        : 'radial-gradient(circle, #baecf9, #f09ff)',
        py: 6
      }}>
        <Container maxWidth='xl' sx={{mt:14}}>
          <Outlet/>
        </Container>
      </Box>
      
    </ThemeProvider>
  )
}

export default App
