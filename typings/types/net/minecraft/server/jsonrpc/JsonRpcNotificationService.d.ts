import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { ManagementServer } from '../../../../net/minecraft/server/jsonrpc/ManagementServer.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { NotificationService } from '../../../../net/minecraft/server/notifications/NotificationService.d.ts'
import type { IpBanListEntry } from '../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { ServerOpListEntry } from '../../../../net/minecraft/server/players/ServerOpListEntry.d.ts'
import type { UserBanListEntry } from '../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class JsonRpcNotificationService extends Object implements NotificationService {
    constructor(minecraftApi: MinecraftApi, managementServer: ManagementServer)
    // private managementServer: ManagementServer;
    // private minecraftApi: MinecraftApi;
    // private broadcastNotification<Params extends Object | number | string | boolean>(method: Holder$Reference<OutgoingRpcMethod<Params, Object>>, params: Params): void;
    // private broadcastNotification(method: Holder$Reference<OutgoingRpcMethod<void, Object>>): void;
    ipBanned(ban: IpBanListEntry): void;
    ipUnbanned(ip: string): void;
    onGameRuleChanged<T extends Object | number | string | boolean>(gameRule: GameRule<T>, value: T): void;
    playerAddedToAllowlist(player: NameAndId): void;
    playerBanned(ban: UserBanListEntry): void;
    playerDeoped(operator: ServerOpListEntry): void;
    playerJoined(player: ServerPlayer): void;
    playerLeft(player: ServerPlayer): void;
    playerOped(operator: ServerOpListEntry): void;
    playerRemovedFromAllowlist(player: NameAndId): void;
    playerUnbanned(player: NameAndId): void;
    serverActivityOccured(): void;
    serverSaveCompleted(): void;
    serverSaveStarted(): void;
    serverShuttingDown(): void;
    serverStarted(): void;
    statusHeartbeat(): void;
}