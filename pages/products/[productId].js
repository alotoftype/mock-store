import Head from 'next/head'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../_components/Loading';
import Error from '../_components/Error';

export default function ProductDetail() {

  const router = useRouter();
  const { productId } = router.query;
  const isMobile = useMediaQuery('(max-width:900px)')

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setProduct(data.product);
            setIsLoading(false);
          } else {
            setError(data.error);
            setIsLoading(false);
          }
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        })
    }
  }, [productId])

  const handleAddToCart = () => {
    console.log("Add to cart", product);
  }

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Grid container sx={{ py: "4rem", px: "3rem" }}>
        <Grid item xs={12} md={6} sx={{ px: "2rem", mb: "3rem" }}>
          <img
            src={product.image}
            style={{ width: "100%" }}
          />
          {
            // thumbnail images not visible on mobile
            !isMobile && (
              <Box sx={{ display: "flex", mt: "3rem", justifyContent: "space-between" }}>
                <img
                  src={product.image}
                  style={{ width: "20%" }}
                />
                <img
                  src={product.image}
                  style={{ width: "20%" }}
                />
                <img
                  src={product.image}
                  style={{ width: "20%" }}
                />
              </Box>
            )
          }
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: "2rem" }}>
          <Typography variant="h4" sx={{ mb: "2rem", color: "cafeNoir.main" }}>
            {product.title}
          </Typography>
          <Typography sx={{ my: "1rem", color: "sandyBrown.main" }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Button 
            color="cafeNoir" 
            sx={{ border: "1px solid", borderColor: "cafeNoir.main", my: "1rem", py: "0.5rem", px: "5rem", borderRadius: 0 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Typography sx={{ my: "2rem", color: "cafeNoir.main" }}>
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
