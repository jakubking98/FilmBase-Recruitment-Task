import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteButtonProps } from "@/utils/types";
import { StyledFavoriteButton } from "@/styles/muiStyles";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onClick,
}) => {
  return (
    <StyledFavoriteButton isFavorite={isFavorite} onClick={onClick}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;
