import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftOperatorListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftOperatorListService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { ServerOpListEntry } from '../../../../../net/minecraft/server/players/ServerOpListEntry.d.ts'
export class MinecraftOperatorListServiceImpl extends Object implements MinecraftOperatorListService {
    constructor(notificationManager: NotificationManager, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private notificationManager: NotificationManager;
    clear(clientInfo: ClientInfo): void;
    deop(nameAndId: NameAndId, clientInfo: ClientInfo): void;
    getEntries(): ServerOpListEntry[];
    op(nameAndId: NameAndId, permissionLevel: Optional<PermissionLevel>, canBypassPlayerLimit: Optional<boolean>, clientInfo: ClientInfo): void;
    op(nameAndId: NameAndId, clientInfo: ClientInfo): void;
    // private server(): DedicatedServer;
}