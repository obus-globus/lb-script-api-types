import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { ServerData } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
export class ServerListFunctionsKt extends Object {
    static getByAddress(paramarg0: ServerList, paramarg1: string): ServerData;
    static getServers(paramarg0: ServerList): ServerData[];
    static serverListRoutes(paramarg0: Node): Node;
}