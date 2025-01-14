import { useEffect, useState } from "react"
import { Product } from "./models/product"
import { Catalog } from "../../features/catalog/catalog"
import { Box, Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { NavBar } from "./NavBar"
import { light } from "@mui/material/styles/createPalette"

function App() {
  const [products, setProducts] = useState<Product[]>([]);
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

  useEffect(()=> {
    fetch('https://localhost:7083/api/Product')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])


  const handleDarkmodeToggle = () => {
    setDarkmode(!darkmode)
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar toggleAction={handleDarkmodeToggle}/>
      <Box sx={{minHeight: '100vh',
        background: !darkmode ? 'radial-gradient(circle, #1e3aBa, #111B27)' : 'radial-gradient(circle, #baecf9, #f09ff)',
        py: 6
      }}>
        <Container maxWidth='xl' sx={{mt:14}}>
          <Box display='flex' justifyContent='center' gap={3} margin={3}>
          </Box>
          <Catalog products={products}/>
        </Container>
      </Box>
      
    </ThemeProvider>
  )
}

export default App
