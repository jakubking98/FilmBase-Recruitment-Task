import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      <CircularProgress sx={{ color: "#fff" }} />
    </Box>
  );
};

export default Loading;
