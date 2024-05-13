import Head from 'next/head'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery';
import Banner from '../_components/Banner';

export default function ProductList() {

  const isMobile = useMediaQuery('(max-width:900px)');

  // overlay image on desktop, display below image on mobile
  const categoryLabelStyle = {
    position: isMobile ? "static" : 'absolute', 
    bottom: "1rem", 
    left: "1.5rem", 
    color: isMobile ? "#000" : "#fff",
    fontSize: "2rem",
    textAlign: "center",
    mt: "1rem"
  }

  // has padding on desktop, full width on mobile
  const categoryContainerStyle = {
    pt: "4rem",
    px: isMobile ? 0 : "4rem"
  }

  return (
    <>
      <Head>
        <title>Product List | Bob's Super Spectacular Wonderful Amazing Store</title>
        <meta name="description" content="Super spectacular wonderful amazing men's and women's clothing." />
      </Head>

      <Banner />
      
      {/* Note: these pictures weren't in the assets download so they are screenshots from the sketch file */}
      <Grid container sx={{ pb: "6rem" }}>
        <Grid item xs={12} md={6} sx={categoryContainerStyle}>
          <Box sx={{ position: 'relative' }}>
            <img
              src="/assets/men.png"
              alt="men's clothing"
              style={{ width: "100%" }}
            />
            <Typography sx={categoryLabelStyle}>
              MEN
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={categoryContainerStyle}>
          <Box sx={{ position: "relative" }}>
            <img
              src="/assets/women.png"
              alt="women's clothing"
              style={{ width: "100%" }}
            />
            <Typography sx={categoryLabelStyle}>
              WOMEN
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
