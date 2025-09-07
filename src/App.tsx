import { DirectionsBoat } from "@mui/icons-material";
import socket from "./web-sockets/WebSocketManager";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  socket;

  const sendWebSocketMessage = (message: string) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open. Ready state:", socket.readyState);
    }
  };

  return (
    <Container sx={{mt:5}}>
      <Typography>
        <DirectionsBoat />
        Battleships
      </Typography>
      <Box>
        <TextField
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
            localStorage.setItem("username", username);
          }}
          sx={{ width: "100%", mb: 1 }}
          label="Username"
          variant="outlined"
        />
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
            onClick={() => navigate("/create")}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
