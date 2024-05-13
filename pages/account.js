import Head from 'next/head'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Loading from "./_components/Loading";
import Error from "./_components/Error";
import { useEffect, useState } from 'react';

export default function account() {

  const isPhone = useMediaQuery('(max-width:600px)')

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/account')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.user);
          setUser(data.user)
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

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="A super spectacular wonderful amazing user." />
      </Head>

      <Box sx={{ px: isPhone ? "2rem" : "8rem", py: "6rem" }}>
        <Typography variant="h5" sx={{ mb: "1rem" }}>
          Account
        </Typography>
        <Box sx={{ border: "1px solid", borderColor: "softGrey.main", p: "3rem" }}>
          <Typography variant="h6" sx={{ mb: "1rem" }}>Login Information</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mr: "0.5rem" }}>Username:</Typography>
            <Typography sx={{ fontWeight: 600 }}>{user.username}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mr: "0.5rem" }}>Email:</Typography>
            <Typography sx={{ fontWeight: 600 }}>{user.email}</Typography>
          </Box>
          <Divider sx={{ my: "2rem" }} />
          <Typography variant="h6" sx={{ mb: "1rem" }}>Address Book</Typography>
          <Typography>{user.name.firstname} {user.name.lastname}</Typography>
          <Typography>{user.address.number} {user.address.street}</Typography>
          <Typography>{user.address.city} {user.address.zipcode}</Typography>
          <Divider sx={{ my: "2rem" }} />
          <Typography variant="h6" sx={{ mb: "1rem" }}>Order History</Typography>
          <Box sx={{ border: "1px solid", borderColor: "softGrey.main" }}>
            <Box sx={{ borderBottom: "1px solid", borderColor: "softGrey.main", py: "2rem", display: "flex", justifyContent: "space-around" }}>
              <Typography>Order #</Typography>
              {
                !isPhone && (
                  <>
                    <Typography>Ship Status</Typography>
                    <Typography>Date</Typography>
                    <Typography>Payment Status</Typography>
                  </>
                )
              }
              <Typography>Total</Typography>
            </Box>
            <Box sx={{ height: "10rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography sx={{ color: "softGrey.main", fontStyle: "italic" }}>No Orders Yet</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </>
  )
}
