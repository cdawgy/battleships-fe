import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const Join = () => {
  const [roomId, setRoomId] = useState<string>("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId && Number(roomId) > 0) {
      navigate(`/lobby/${roomId}`);
    }
  };

  return (
    <>
      <Typography>Join room</Typography>
      <TextField
        onChange={(event) => {
          setRoomId(event.target.value);
        }}
      />
      <Button variant="contained" onClick={() => joinRoom()}>
        Join
      </Button>
    </>
  );
};

export default Join;
