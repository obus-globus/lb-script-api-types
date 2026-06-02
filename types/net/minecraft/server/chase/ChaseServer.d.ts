import type { ServerSocket } from '../../../../java/net/ServerSocket.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChaseServer$PlayerPosition } from '../../../../net/minecraft/server/chase/ChaseServer$PlayerPosition.d.ts'
import type { PlayerList } from '../../../../net/minecraft/server/players/PlayerList.d.ts'
export class ChaseServer extends Object {
    constructor(serverBindAddress: string, serverPort: number, playerList: PlayerList, broadcastIntervalMs: number)
    // private broadcastIntervalMs: number;
    // private clientSockets: Socket[];
    // private playerList: PlayerList;
    // private serverBindAddress: string;
    // private serverPort: number;
    // private serverSocket: ServerSocket;
    // private wantsToRun: boolean;
    // private getPlayerPosition(): ChaseServer$PlayerPosition;
    // private runAcceptor(): void;
    // private runSender(): void;
    start(): void;
    stop(): void;
}