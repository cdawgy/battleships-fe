import { DirectionsBoat } from "@mui/icons-material";
import { Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { randomIntFromInterval } from "./utils/RandomNumberGenerator";

const App = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography>
        <DirectionsBoat />
        Battleships
      </Typography>
      <Box>
        <Box
          display={"flex"}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Button
            sx={{ width: "48%" }}
            variant="contained"
            onClick={() => navigate("/join")}
          >
            Join
          </Button>
          <Button
            sx={{ width: "48%" }}
            variant="contained"
            onClick={() => {
              const roomId = randomIntFromInterval(1, 9999);
              navigate(`/lobby/${roomId}`);
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
