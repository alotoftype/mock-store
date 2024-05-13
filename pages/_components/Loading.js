import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box 
      className="loading"
      sx={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20rem"
      }}
    >
      <CircularProgress color="sandyBrown" />
    </Box>  
  )
}
