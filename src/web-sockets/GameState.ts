export type Player = {
  name: string;
  board: unknown[];
};

export type Game = {
  players: Player[];
  status: "lobby" | "start" | "joining";
  turn: "";
};
