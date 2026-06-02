import type { ServerSocket } from '../../../../../java/net/ServerSocket.d.ts'
import type { ServerInterface } from '../../../../../net/minecraft/server/ServerInterface.d.ts'
import type { GenericThread } from '../../../../../net/minecraft/server/rcon/thread/GenericThread.d.ts'
import type { RconClient } from '../../../../../net/minecraft/server/rcon/thread/RconClient.d.ts'
export class RconThread extends GenericThread {
    static create(paramserverInterface: ServerInterface): RconThread;
    private constructor(serverInterface: ServerInterface, socket: ServerSocket, rconPassword: string)
    // private clients: RconClient[];
    // private rconPassword: string;
    // private serverInterface: ServerInterface;
    // private socket: ServerSocket;
    // private clearClients(): void;
    // private closeSocket(socket: ServerSocket): void;
    run(): void;
    stop(): void;
}