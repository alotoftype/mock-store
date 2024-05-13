import '../styles/globals.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Link from "next/link"
import { createTheme, alpha, ThemeProvider, darken } from '@mui/material/styles';

const lapisLazuli = "#2660A4";
const azure = "#EDF7F6";
const sandyBrown = "#F19953";
const copper = "#C47335";
const cafeNoir = "#56351E";
const softGrey = "#D8D8D8";

// these are accessible throughout the application CSS by name ( color: "lapisLazuli.main" )
// or as an MUI color prop ( color="lapisLazuli" )
const theme = createTheme({
  palette: {
    lapisLazuli: {
      main: lapisLazuli,
      light: alpha(lapisLazuli, 0.7),
      dark: darken(lapisLazuli, 0.1),
      contrastText: "white"
    },
    azure: {
      main: azure,
      light: alpha(azure, 0.7),
      dark: darken(azure, 0.1),
      contrastText: "black"
    },
    sandyBrown: {
      main: sandyBrown,
      light: alpha(sandyBrown, 0.7),
      dark: darken(sandyBrown, 0.1),      
      contrastText: "white"
    },
    copper: {
      main: copper,
      light: alpha(copper, 0.7),
      dark: darken(copper, 0.1), 
      contrastText: "black"
    },
    cafeNoir: {
      main: cafeNoir,
      light: alpha(cafeNoir, 0.7),
      dark: darken(cafeNoir, 0.1), 
      contrastText: "white"
    },
    softGrey: {
      main: softGrey,
      light: alpha(softGrey, 0.7),
      dark: darken(softGrey, 0.1), 
      contrastText: "black"
    }
  }
})

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="softGrey" elevation={1}>
          <Toolbar sx={{ position: "relative" }}>
            <Link href="/">
              <img 
                src="/assets/Logo.png" 
                alt="company logo" 
                style={{ height: "70%", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto" }}
              />
            </Link>
            <Link href='/cart' style={{ marginLeft: "auto" }}>
              <IconButton
                size="large"
                edge="start"
                color="cafeNoir"
                aria-label="cart"
              >
                <ShoppingCartIcon />
              </IconButton>
            </Link>
            <Link href='/account' style={{ marginLeft: "1.5rem" }}>
              <IconButton
                size="large"
                edge="start"
                color="cafeNoir"
                aria-label="account"
              >
                <PersonIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ minHeight: "100vh", pt: "4rem" }}>
        <Component {...pageProps} />
      </Box>

      <Container maxWidth="0" disableGutters sx={{ width: "100vw" }}>
        <Box sx={{ bgcolor: "softGrey.main", height: "5rem", width: "100vw", borderTop: "4px solid sandyBrown" }}>
          <footer></footer>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
