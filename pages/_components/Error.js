import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Divider } from '@mui/material';

export default function Error({ error }) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      color: "cafeNoir.main",
      py: "2rem"
    }}>
      <Box sx={{      
        backgroundColor: "softGrey.light",
        py: "2rem",
        px: "3rem",
        borderRadius: "0.5rem"
      }}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <ErrorOutlineIcon sx={{ mr: "0.5rem" }} /> ERROR
        </Typography>
        <Divider sx={{ my: "1rem" }} />
        <Typography>{error}</Typography>
      </Box>
    </Box>  
  )
}
