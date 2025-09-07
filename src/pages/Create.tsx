import { DirectionsBoat } from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import WebSocketConnectionManager from "../web-sockets/WebSocketManager";
import type { Game } from "../web-sockets/GameState";
import { useParams } from "react-router";

const Lobby = () => {
  const [loadingPlayer, setLoadingPlayer] = useState<boolean>(true);
  const params = useParams<{roomId: string}>()
  const [connectionManager, setConnectionManager] =
    useState<WebSocketConnectionManager>();
//   const [roomId, setRoomId] = useState<number>(0);

  const handleMessage = (data: string) => {
    const gameState = JSON.parse(data) as Game;
    setLoadingPlayer(gameState.status !== "lobby")
  };

  useEffect(() => {
    const newConnection = new WebSocketConnectionManager(Number(params.roomId), handleMessage);
    setConnectionManager(newConnection);
    newConnection.connect();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography>
        <DirectionsBoat />
        Battleships
      </Typography>
      <Box>
        <Typography sx={{ mb: 2 }}>Room ID: {params.roomId}</Typography>

        <Box>
          <Avatar />
          <Typography>Alice</Typography>
          <Typography>VS</Typography>
          {loadingPlayer ? (
            <CircularProgress />
          ) : (
            <>
              <Avatar />
              <Typography>Bob</Typography>
            </>
          )}
        </Box>

        <Button disabled={loadingPlayer} variant="contained">
          Start
        </Button>
      </Box>
    </Container>
  );
};

export default Lobby;
