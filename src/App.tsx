import socket from "./web-sockets/WebSocketManager";
import { TextField, Button, Box } from "@mui/material";

const App = () => {
  socket;

  const sendWebSocketMessage = (message: string) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open. Ready state:', socket.readyState);
    }
  }

  return (
    <>
        <h1>Battle Ships Game</h1>
        <Box display="flex" alignItems="center" gap={2}>
            <TextField label="Enter value" variant="outlined" />
            <Button variant="contained" onClick={(e) => {sendWebSocketMessage("Hello from client!")}}>
                Submit
            </Button>
        </Box>
    </>
  );
};

export default App;
