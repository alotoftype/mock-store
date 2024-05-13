import Head from 'next/head'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Loading from "./_components/Loading";
import Error from "./_components/Error";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export default function cart() {

  const isPhone = useMediaQuery('(max-width:600px)')

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});
  const [productsData, setProductsData] = useState([]);

  const total = productsData?.reduce((acc, product, idx) => {
    return acc + (product.price * cart.products[idx].quantity);
  }, 0).toFixed(2);

  useEffect(() => {
    fetch('/api/cart')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCart(data.cart);
          setProductsData(data.productsData);
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
  }, []);

  const handleRemoveProduct = (idx) => {
    const cartCopy = {...cart};
    cartCopy.products.splice(idx, 1);
    setCart(cartCopy);

    const productsDataCopy = [...productsData]
    productsDataCopy.splice(idx, 1);
    setProductsData(productsDataCopy);
  }

  const handleDecreaseQty = (idx) => {
    const copy = {...cart};
    const productsDataCopy = [...productsData]

    const currentQty = copy.products[idx].quantity 
    if (currentQty <= 1) {
      copy.products.splice(idx, 1);
      setCart(copy);

      productsDataCopy.splice(idx, 1);
      setProductsData(productsDataCopy);
    } else {
      copy.products[idx].quantity = currentQty - 1;
      setCart(copy);
    }
  }

  const handleIncreaseQty = (idx) => {
    const copy = {...cart};
    copy.products[idx].quantity += 1;
    setCart(copy);
  }

  const handleCheckout = () => {
    console.log("Checkout cart", cart);
  }

  //helper function to render a cart item on mobile
  const MobileItem = ({ product, idx }) => (
    <>
      <Grid item xs={12} sx={{ display: "flex", mb: "1rem" }}>
        <Typography sx={{ mr: "1rem" }}>{product.title}</Typography>
        <Typography sx={{ color: "sandyBrown.main", ml: "auto" }}>
          ${product.price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <img 
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={9} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", pl: "1rem" }}>
        <Box sx={{ 
          border: "1px solid", 
          borderColor: "softGrey.main", 
          p: "0.5rem", 
          display: "flex",
          alignItems: "center"
        }}>
          <IconButton
            size="small"
            edge="start"
            color="cafeNoir"
            aria-label="decrease-quantity"
            sx={{ color: "softGrey.main" }}
            onClick={() => handleDecreaseQty(idx)}
          >
            <RemoveIcon fontSize="inherit" />
          </IconButton> 
          <Typography sx={{ mx: "0.5rem" }}>
            {cart.products[idx].quantity}
          </Typography>
          <IconButton
            size="small"
            edge="start"
            color="cafeNoir"
            aria-label="increase-quantity"
            sx={{ color: "softGrey.main" }}
            onClick={() => handleIncreaseQty(idx)}
          >
            <AddIcon fontSize="inherit" />
          </IconButton> 
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="cafeNoir"
          aria-label="remove-product"
          sx={{ marginTop: "auto", marginLeft: "auto" }}
          onClick={() => handleRemoveProduct(idx)}
        >
          <CloseIcon />
        </IconButton> 
      </Grid>
    </>
  )

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="A super spectacular wonderful amazing cart." />
      </Head>
    
      <Grid container sx={{ py: isPhone ? "2rem" : "5rem", px: isPhone ? "2rem" : "6rem" }}>
        <Grid item xs={12} lg={6} xl={7} sx={{ mb: "1rem" }}>
          <Typography variant="h5" sx={{ color: "cafeNoir.main", mb: "1rem" }}>
            Shopping Bag
          </Typography>
          <Divider sx={{ color: "cafeNoir.main", my: "1rem" }} />
          {
            productsData?.map((product, idx) => (
              <Grid container key={product.id}>
                {
                  isPhone ? <MobileItem product={product} idx={idx} />
                  : (
                    <>
                      <Grid item xs={3} xl={2}>
                        <img 
                          src={product.image}
                          alt={product.title}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Grid>
                      <Grid item xs={9} xl={10} sx={{ pl: "2rem", display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                        <Box sx={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
                          <Typography sx={{ mr: "1rem" }}>{product.title}</Typography>
                          <Box sx={{ 
                            border: "1px solid", 
                            borderColor: "softGrey.main", 
                            p: "0.5rem", 
                            display: "flex",
                            alignItems: "center",
                            ml: "auto"
                          }}>
                            <IconButton
                              size="small"
                              edge="start"
                              color="cafeNoir"
                              aria-label="decrease-quantity"
                              sx={{ color: "softGrey.main" }}
                              onClick={() => handleDecreaseQty(idx)}
                            >
                              <RemoveIcon fontSize="inherit" />
                            </IconButton> 
                            <Typography sx={{ mx: "0.5rem" }}>
                              {cart.products[idx].quantity}
                            </Typography>
                            <IconButton
                              size="small"
                              edge="start"
                              color="cafeNoir"
                              aria-label="increase-quantity"
                              sx={{ color: "softGrey.main" }}
                              onClick={() => handleIncreaseQty(idx)}
                            >
                              <AddIcon fontSize="inherit" />
                            </IconButton> 
                          </Box>
                          <Typography sx={{ color: "sandyBrown.main", pl: "2rem" }}>
                            ${product.price.toFixed(2)}
                          </Typography>
                        </Box>
                        <IconButton
                          size="large"
                          edge="start"
                          color="cafeNoir"
                          aria-label="remove-product"
                          sx={{ marginTop: "auto", marginLeft: "auto" }}
                          onClick={() => handleRemoveProduct(idx)}
                        >
                          <CloseIcon />
                        </IconButton> 
                      </Grid>
                    </>
                  )
                }
                <Grid item xs={12}>
                  <Divider sx={{ color: "cafeNoir.main", my: "2rem" }} />
                </Grid>
              </Grid>
            ))
          }
        </Grid>
        <Grid item xs={12} lg={6} xl={5}>
          <Box sx={{ 
            border: "1px solid", 
            borderColor: "softGrey.main", 
            p: "1rem",
            mx: isPhone ? 0 : "4rem"
          }}>
            <Typography sx={{ mb: "1rem" }}>ORDER SUMMARY</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography>Subtotal: </Typography>
              <Typography sx={{ ml: "auto", color: "sandyBrown.main" }}>${total}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography>Shipping: </Typography>
              <Typography sx={{ ml: "auto", fontWeight: 600 }}>Free</Typography>
            </Box>
            <Button 
              variant="contained" 
              color="sandyBrown"
              sx={{ width: "100%", borderRadius: 0, mt: "2rem", p: "1rem" }}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
