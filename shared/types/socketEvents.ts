export type Difficulty = 3 | 4 | 5;
export type EdgeType = "flat" | "tab" | "socket";
export interface PuzzlePiece { id: string; correctIndex: number; currentIndex: number; row: number; column: number; topEdge: EdgeType; rightEdge: EdgeType; bottomEdge: EdgeType; leftEdge: EdgeType; placed: boolean; }
export interface Player { id: string; name: string; socketId: string; connected: boolean; }
export interface ChatMessage { id: string; playerId: string; playerName: string; message: string; timestamp: number; type: "text" | "reaction"; }
export interface PuzzleState { imageId: string; gridSize: Difficulty; pieces: PuzzlePiece[]; progress: number; hintsRemaining: number; moves: number; }
export interface GameRoom { roomId: string; players: Player[]; puzzle: PuzzleState; status: "waiting" | "countdown" | "playing" | "completed"; startedAt?: number; completedAt?: number; chatMessages: ChatMessage[]; }
export interface ServerToClientEvents { "room-state": (room: GameRoom) => void; "room-error": (message: string) => void; "countdown": (value: number) => void; "hint": (payload: { level: number; pieceId: string; destination?: number }) => void; }
export interface ClientToServerEvents { "create-room": (payload: { name: string; difficulty: Difficulty }, cb: (result: { roomId: string; playerId: string }) => void) => void; "join-room": (payload: { roomId: string; name: string }, cb: (result: { ok: boolean; playerId?: string; error?: string }) => void) => void; "start-game": () => void; "piece-swapped": (payload: { firstIndex: number; secondIndex: number }) => void; "chat-message": (message: string) => void; "reaction": (emoji: string) => void; "use-hint": (confirm?: boolean) => void; "restart-game": () => void; }
