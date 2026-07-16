import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { ServerData } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
export class ServerListFunctionsKt extends Object {
    static getByAddress(self: ServerList, address: string): ServerData | null;
    static getServers(routing: ServerList): ServerData[];
    static serverListRoutes(self: Node): Node;
}