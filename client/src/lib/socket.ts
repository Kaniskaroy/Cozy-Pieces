import { io, type Socket } from "socket.io-client"; import type { ClientToServerEvents, ServerToClientEvents } from "../types/game";
export const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3001", { autoConnect: true }) as Socket<ServerToClientEvents, ClientToServerEvents>;
