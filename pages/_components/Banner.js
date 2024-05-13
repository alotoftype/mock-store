import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Banner() {

  const isTablet = useMediaQuery('(max-width:1200px)')

  // full width on desktop, horizontally cropped on tablet and smaller
  const imageContainerStyle = {
    position: "relative", 
    width: "100%", 
    height: isTablet ? "28rem" : "100%",
    marginTop: "-4rem"
  }

  return (
    <Box sx={imageContainerStyle}>
    <img 
      src="/assets/Hero.png" 
      alt="shirts on a rack" 
      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
    />
    <img 
      src="/assets/Logo.png" 
      alt="company logo" 
      style={{ 
        position: "absolute", 
        height: "120px", 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        margin: "auto" 
      }} 
    />
  </Box>
  )
}
