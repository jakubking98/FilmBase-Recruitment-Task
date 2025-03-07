import { HeaderBackgroundProps } from "@/utils/types";
import { Box } from "@mui/material";

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        color: "#fff",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderBackground;
