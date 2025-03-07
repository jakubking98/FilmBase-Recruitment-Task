import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => router.push("/")}
      sx={{
        color: "#fff",
        mb: 2,
        p: 1,
        paddingX: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      Powrót do strony głównej
    </Button>
  );
};

export default BackButton;
