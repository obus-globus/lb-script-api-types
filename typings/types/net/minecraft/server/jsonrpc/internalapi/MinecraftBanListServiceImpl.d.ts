import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftBanListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftBanListService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { IpBanListEntry } from '../../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserBanListEntry } from '../../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export class MinecraftBanListServiceImpl extends Object implements MinecraftBanListService {
    constructor(notificationManager: NotificationManager, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private notificationManager: NotificationManager;
    addIpBan(ipBanEntry: IpBanListEntry, clientInfo: ClientInfo): void;
    addUserBan(ban: UserBanListEntry, clientInfo: ClientInfo): void;
    clearIpBans(clientInfo: ClientInfo): void;
    clearUserBans(clientInfo: ClientInfo): void;
    getIpBanEntries(): IpBanListEntry[];
    getUserBanEntries(): UserBanListEntry[];
    removeIpBan(ip: string, clientInfo: ClientInfo): void;
    removeUserBan(nameAndId: NameAndId, clientInfo: ClientInfo): void;
    // private server(): DedicatedServer;
}