import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftAllowListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftAllowListService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserWhiteListEntry } from '../../../../../net/minecraft/server/players/UserWhiteListEntry.d.ts'
export class MinecraftAllowListServiceImpl extends Object implements MinecraftAllowListService {
    constructor(server: DedicatedServer, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private server: DedicatedServer;
    add(infos: UserWhiteListEntry, clientInfo: ClientInfo): boolean;
    clear(clientInfo: ClientInfo): void;
    getEntries(): E[];
    kickUnlistedPlayers(clientInfo: ClientInfo): void;
    remove(nameAndId: NameAndId, clientInfo: ClientInfo): void;
}