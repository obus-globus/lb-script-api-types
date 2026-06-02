import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LanServer } from '../../../../net/minecraft/client/server/LanServer.d.ts'
export class LanServerDetection$LanServerList extends Object {
    constructor()
    // private isDirty: boolean;
    // private servers: LanServer[];
    addServer(pingData: string, socketAddress: InetAddress): void;
    takeDirtyServers(): LanServer[];
}