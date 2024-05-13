import Link from "next/link"
import Head from 'next/head'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import Banner from './_components/Banner';
import Loading from "./_components/Loading";
import Error from "./_components/Error";

export default function Home() {

  const isTablet = useMediaQuery('(max-width:1200px)')
  const isPhone = useMediaQuery('(max-width:600px)')

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featured, setFeatured] = useState([]);

  const imageContainerStyle = {
    position: "relative", 
    display: "flex", 
    padding: isTablet ? 0 : "0 5rem",
    marginTop: "5rem", 
    width: "100%", 
    height: isTablet ? "28rem" : "100%"
  }

  const imageOverlayStyle = {         
    color: isTablet ? "#000" : "#fff",
    textAlign: isTablet ? "center" : "left",
    position: isTablet ? "relative" : "absolute", 
    top: isTablet ? null : "40%", 
    left: isTablet? null : "10%",  
    padding: isTablet ? "4rem" : 0
  }

  useEffect(() => {
    fetch('/api/products/featured')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFeatured(data.featured)
          setIsLoading(false);
        } else {
          setError(data.error);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [])

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Head>
        <title>Bob's Super Spectacular Wonderful Amazing Store</title>
        <meta name="description" content="A super spectacular wonderful amazing store with men's and women's clothing." />
      </Head>

      <Banner />

      <Box sx={{ position: "relative" }}>
        <Box sx={imageContainerStyle}>
          <img
            src="/assets/Rectangle.png"
            alt="woman in a hat and green dress"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={imageOverlayStyle}>
          <Typography sx={{ fontSize: "40px" }}>
            Free your wardrobe
          </Typography>
          <Link href='/products/list'>
            <Button 
              variant="contained" 
              color="sandyBrown" 
              fullWidth 
              sx={{ p: "1rem", mt: "0.5rem" }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
      </Box>

      <Grid container sx={{ p: '5%', textAlign: "center" }}>
        {
          featured?.length > 0 && featured.map(product => (
            <Grid item xs={6} lg={3} key={product.id} sx={{ mb: "3rem", display: "flex", justifyContent: "space-around" }}>
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: isPhone ? "10rem" : "20rem", padding: "0 1rem" }}
                />
                <Typography sx={{ mt: "2rem", color: "sandyBrown.main" }}>${product.price.toFixed(2)}</Typography>
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}
