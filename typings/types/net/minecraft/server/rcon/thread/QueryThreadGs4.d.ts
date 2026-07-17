import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { DatagramPacket } from '../../../../../java/net/DatagramPacket.d.ts'
import type { DatagramSocket } from '../../../../../java/net/DatagramSocket.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { ServerInterface } from '../../../../../net/minecraft/server/ServerInterface.d.ts'
import type { NetworkDataOutputStream } from '../../../../../net/minecraft/server/rcon/NetworkDataOutputStream.d.ts'
import type { GenericThread } from '../../../../../net/minecraft/server/rcon/thread/GenericThread.d.ts'
import type { QueryThreadGs4$RequestChallenge } from '../../../../../net/minecraft/server/rcon/thread/QueryThreadGs4$RequestChallenge.d.ts'
export class QueryThreadGs4 extends GenericThread {
    static create(paramserverInterface: ServerInterface): QueryThreadGs4;
    private constructor(serverInterface: ServerInterface, port: number)
    // private buffer: number[];
    // private hostIp: string;
    // private lastChallengeCheck: number;
    // private lastRulesResponse: number;
    // private maxPlayers: number;
    // private port: number;
    // private rulesResponse: NetworkDataOutputStream;
    // private serverInterface: ServerInterface;
    // private serverIp: string;
    // private serverName: string;
    // private serverPort: number;
    // private socket: DatagramSocket;
    // private validChallenges: JavaMap<SocketAddress, QueryThreadGs4$RequestChallenge>;
    // private worldName: string;
    // private buildRuleResponse(packet: DatagramPacket): number[];
    // private getIdentBytes(src: SocketAddress): number[];
    // private initSocket(): boolean;
    // private processPacket(packet: DatagramPacket): boolean;
    // private pruneChallenges(): void;
    // private recoverSocketError(e: Exception): void;
    run(): void;
    // private sendChallenge(src: DatagramPacket): void;
    // private sendTo(data: number[], src: DatagramPacket): void;
    start(): boolean;
    // private validChallenge(src: DatagramPacket): boolean;
}