import { Box, Typography } from "@mui/material";

const HeaderLogo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
        FilmBase
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
