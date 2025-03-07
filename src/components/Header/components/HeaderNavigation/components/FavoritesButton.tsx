import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import { FavoritesButtonStyled } from "@/styles/muiStyles";

const FavoritesButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/favorites");
  };

  return (
    <FavoritesButtonStyled startIcon={<FavoriteIcon />} onClick={handleClick}>
      Ulubione
    </FavoritesButtonStyled>
  );
};

export default FavoritesButton;
