import Image from "next/image";
import { Box } from "@mui/material";
import { MoviePosterProps } from "@/utils/types";

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "400px", md: "600px" },
        position: "relative",
      }}
    >
      {posterPath && (
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          fill
          sizes="100vw"
          loading="lazy"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      )}
    </Box>
  );
};

export default MoviePoster;
