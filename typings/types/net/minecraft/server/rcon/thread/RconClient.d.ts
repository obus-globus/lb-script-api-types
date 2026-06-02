import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { ServerInterface } from '../../../../../net/minecraft/server/ServerInterface.d.ts'
import type { GenericThread } from '../../../../../net/minecraft/server/rcon/thread/GenericThread.d.ts'
export class RconClient extends GenericThread {
    constructor(serverInterface: ServerInterface, rconPassword: string, socket: Socket)
    // private authed: boolean;
    // private buf: number[];
    // private client: Socket;
    // private rconPassword: string;
    // private serverInterface: ServerInterface;
    // private closeSocket(): void;
    run(): void;
    // private send(requestid: number, cmd: number, str: string): void;
    // private sendAuthFailure(): void;
    // private sendCmdResponse(requestid: number, response: string): void;
    stop(): void;
}