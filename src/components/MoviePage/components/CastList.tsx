import { Grid, ListItem, ListItemText, Typography, Box } from "@mui/material";
import Image from "next/image";
import { CastListProps } from "@/utils/types";

const CastList: React.FC<CastListProps> = ({ cast }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Obsada:
      </Typography>
      <Grid container spacing={2}>
        {cast.map((actor) => (
          <Grid item xs={12} md={6} key={actor.id}>
            <ListItem sx={{ padding: 0 }}>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  position: "relative",
                  mr: 2,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#333",
                }}
              >
                {actor.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    fill
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {actor.name[0]}
                  </Typography>
                )}
              </Box>
              <ListItemText
                primary={actor.name}
                secondary={actor.character}
                sx={{
                  color: "#fff",
                  "& .MuiListItemText-secondary": {
                    color: "#fff",
                  },
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CastList;
