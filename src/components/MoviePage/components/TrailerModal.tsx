import { TrailerModalProps } from "@/utils/types";
import { Modal, Fade, Box } from "@mui/material";

const TrailerModal: React.FC<TrailerModalProps> = ({
  open,
  onClose,
  trailerKey,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open} timeout={500}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            maxWidth: "900px",
            bgcolor: "black",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          {trailerKey && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default TrailerModal;
