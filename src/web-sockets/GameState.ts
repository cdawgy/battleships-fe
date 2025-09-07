export type Player = {
    name: string
}

export type Game = {
    players: Player[]
    state: "lobby" | "start" | "joining"
}