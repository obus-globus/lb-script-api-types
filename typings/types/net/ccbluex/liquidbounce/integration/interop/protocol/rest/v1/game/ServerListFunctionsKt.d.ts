import type { Route } from '../../../../../../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ServerData } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
export class ServerListFunctionsKt extends Object {
    static getByAddress(self: ServerList, address: string): ServerData | null;
    static getServers(route: ServerList): ServerData[];
    static serverListRoutes(self: Route): Route;
}