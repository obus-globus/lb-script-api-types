import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { Scanner } from '../../../../java/util/Scanner.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
export class ChaseClient extends Object {
    constructor(serverHost: string, serverPort: number, server: MinecraftServer)
    // private server: MinecraftServer;
    // private serverHost: string;
    // private serverPort: number;
    // private socket: Socket;
    // private thread: Thread;
    // private wantsToRun: boolean;
    // private executeCommand(command: string): void;
    // private handleMessage(message: string): void;
    // private handleTeleport(scanner: Scanner): void;
    run(): void;
    start(): void;
    stop(): void;
}