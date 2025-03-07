import Image from "next/image";
import {
  styled,
  Button,
  Box,
  IconButton,
  TextField,
  InputLabel,
  Select,
  outlinedInputClasses,
  createTheme,
} from "@mui/material";

export const MoviePosterStyled = styled(Image)({
  borderRadius: "8px",
  objectFit: "cover",
  objectPosition: "center",
});

export const FavoritesButtonStyled = styled(Button)({
  color: "#fff",
  paddingX: 2,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
  },
  marginLeft: "16px",
});

export const StyledMovieInfoBox = styled(Box)(({ theme }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: theme.spacing(1),
  color: "#fff",
  position: "absolute",
  textAlign: "center",
  padding: theme.spacing(2),
  boxSizing: "border-box",
}));

export const StyledFavoriteButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isFavorite",
})<{ isFavorite: boolean }>(({ theme, isFavorite }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: isFavorite ? "#ff0000" : "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  transition:
    "transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  transform: isFavorite ? "scale(1)" : "scale(0.8)",
  zIndex: 2,
}));

export const StyledMovieCardContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
  },
}));

export const CardContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  "&:hover .movie-info": {
    opacity: 1,
  },
}));

export const MovieInfo = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: theme.spacing(1),
  color: "white",
  textAlign: "center",
  padding: theme.spacing(2),
  boxSizing: "border-box",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  zIndex: 2,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#666",
      borderRadius: "10px",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "#999",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#ccc",
    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    padding: "10px 14px",
  },

  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: "#ccc",
  "&.Mui-focused": {
    color: theme.palette.primary.main,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: "2px solid #666",
    borderRadius: "10px",
  },
  [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
    border: "2px solid #999",
  },
  [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      border: `2px solid ${theme.palette.primary.main}`, // Niebieski w focusie
    },
  "& .MuiOutlinedInput-input": {
    color: "#fff",
    padding: "10px 14px",
  },
  "& .MuiSelect-select": {
    marginTop: "0px",
    marginBottom: "0px",
  },
  "& .MuiList-root": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "& .MuiMenuItem-root.Mui-selected": {
    backgroundColor: "rgba(0, 0, 255, 0.2)",
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    fill: "#ccc",
  },
  "& .MuiSelect-icon": {
    color: "#ccc",
  },
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
}));

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },

        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        ".mySwiper": {
          display: "flex",

          "& .swiper-slide": {
            display: "flex",
            alignItems: "end",
            width: "auto",
          },
        },
        MuiTextField: {
          defaultProps: {
            InputProps: {
              disableUnderline: true,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "#ccc",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#1976d2",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },
    },
  },
});
