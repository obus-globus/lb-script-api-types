import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftPlayerListService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftPlayerListService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export class MinecraftPlayerListServiceImpl extends Object implements MinecraftPlayerListService {
    constructor(notificationManager: NotificationManager, jsonRpcLogger: JsonRpcLogger)
    // private jsonRpcLogger: JsonRpcLogger;
    // private notificationManager: NotificationManager;
    fetchUserById(id: UUID): Optional<NameAndId>;
    fetchUserByName(name: string): Optional<NameAndId>;
    getCachedUserById(id: UUID): Optional<NameAndId>;
    getPlayer(id: Optional<UUID>, name: Optional<string>): Optional<ServerPlayer>;
    getPlayer(uuid: UUID): ServerPlayer;
    getPlayerByName(name: string): ServerPlayer;
    getPlayers(): ServerPlayer[];
    getPlayersWithAddress(ip: string): ServerPlayer[];
    getUser(id: Optional<UUID>, name: Optional<string>): CompletableFuture<Optional<NameAndId>>;
    remove(serverPlayer: ServerPlayer, clientInfo: ClientInfo): void;
    // private server(): DedicatedServer;
}