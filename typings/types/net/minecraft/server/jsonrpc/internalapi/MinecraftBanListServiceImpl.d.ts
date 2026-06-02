import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftBanListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftBanListService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { IpBanListEntry } from '../../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserBanListEntry } from '../../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export class MinecraftBanListServiceImpl extends Object implements MinecraftBanListService {
    constructor(server: MinecraftServer, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private server: MinecraftServer;
    addIpBan(ipBanEntry: IpBanListEntry, clientInfo: ClientInfo): void;
    addUserBan(ban: UserBanListEntry, clientInfo: ClientInfo): void;
    clearIpBans(clientInfo: ClientInfo): void;
    clearUserBans(clientInfo: ClientInfo): void;
    getIpBanEntries(): E[];
    getUserBanEntries(): E[];
    removeIpBan(ip: string, clientInfo: ClientInfo): void;
    removeUserBan(nameAndId: NameAndId, clientInfo: ClientInfo): void;
}