import { Box } from "@mui/material";
import HeaderLogo from "./components/HeaderLogo";
import FavoritesButton from "./components/FavoritesButton";

const HeaderNavigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingX: { xs: 3, md: 8 },
        pt: 3,
      }}
    >
      <HeaderLogo />
      <FavoritesButton />
    </Box>
  );
};

export default HeaderNavigation;
