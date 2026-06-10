import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { LayeredRegistryAccess } from '../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { PlayerAdvancements } from '../../../../net/minecraft/server/PlayerAdvancements.d.ts'
import type { RegistryLayer } from '../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ServerScoreboard } from '../../../../net/minecraft/server/ServerScoreboard.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { CommonListenerCookie } from '../../../../net/minecraft/server/network/CommonListenerCookie.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
import type { NotificationService } from '../../../../net/minecraft/server/notifications/NotificationService.d.ts'
import type { LevelBasedPermissionSet } from '../../../../net/minecraft/server/permissions/LevelBasedPermissionSet.d.ts'
import type { IpBanList } from '../../../../net/minecraft/server/players/IpBanList.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { ServerOpList } from '../../../../net/minecraft/server/players/ServerOpList.d.ts'
import type { UserBanList } from '../../../../net/minecraft/server/players/UserBanList.d.ts'
import type { UserWhiteList } from '../../../../net/minecraft/server/players/UserWhiteList.d.ts'
import type { ServerStatsCounter } from '../../../../net/minecraft/stats/ServerStatsCounter.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { PlayerDataStorage } from '../../../../net/minecraft/world/level/storage/PlayerDataStorage.d.ts'
export abstract class PlayerList extends Object {
    static CHAT_FILTERED_FULL: Component;
    static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: Component;
    static IPBANLIST_FILE: File;
    static OPLIST_FILE: File;
    static USERBANLIST_FILE: File;
    static WHITELIST_FILE: File;
    constructor(server: MinecraftServer, registries: LayeredRegistryAccess<RegistryLayer>, playerIo: PlayerDataStorage, notificationService: NotificationService)
    // private advancements: Map<UUID, PlayerAdvancements>;
    readonly allowCommandsForAllPlayers: boolean;
    readonly bans: UserBanList;
    readonly ipBans: IpBanList;
    readonly ops: ServerOpList;
    // private playerIo: PlayerDataStorage;
    readonly players: ServerPlayer[];
    // private playersByUUID: Map<UUID, ServerPlayer>;
    // private registries: LayeredRegistryAccess<RegistryLayer>;
    // private sendAllPlayerInfoIn: number;
    readonly server: MinecraftServer;
    readonly simulationDistance: number;
    // private stats: Map<UUID, ServerStatsCounter>;
    readonly viewDistance: number;
    // private whitelist: UserWhiteList;
    addWorldborderListener(level: ServerLevel): void;
    broadcast(except: Player, x: number, y: number, z: number, range: number, dimension: ResourceKey<Level>, packet: Packet<Object>): void;
    broadcastAll(packet: Packet<Object>): void;
    broadcastAll(packet: Packet<Object>, dimension: ResourceKey<Level>): void;
    // private broadcastChatMessage(message: PlayerChatMessage, isFiltered: (param0: ServerPlayer) => boolean, senderPlayer: ServerPlayer, chatType: ChatType$Bound): void;
    broadcastChatMessage(message: PlayerChatMessage, sender: CommandSourceStack, chatType: ChatType$Bound): void;
    broadcastChatMessage(message: PlayerChatMessage, sender: ServerPlayer, chatType: ChatType$Bound): void;
    broadcastSystemMessage(message: Component, playerMessages: (param0: ServerPlayer) => Component, overlay: boolean): void;
    broadcastSystemMessage(message: Component, overlay: boolean): void;
    broadcastSystemToAllExceptTeam(player: Player, message: Component): void;
    broadcastSystemToTeam(player: Player, message: Component): void;
    canBypassPlayerLimit(nameAndId: NameAndId): boolean;
    canPlayerLogin(address: SocketAddress, nameAndId: NameAndId): Component;
    deop(nameAndId: NameAndId): void;
    disconnectAllPlayersWithProfile(playerId: UUID): boolean;
    getBans(): UserBanList;
    getIpBans(): IpBanList;
    getMaxPlayers(): number;
    getOpNames(): string[];
    getOps(): ServerOpList;
    getPlayer(uuid: UUID): ServerPlayer;
    getPlayer(playerName: string): ServerPlayer;
    getPlayerAdvancements(player: ServerPlayer): PlayerAdvancements;
    getPlayerByName(name: string): ServerPlayer;
    getPlayerCount(): number;
    getPlayerNamesArray(): string[];
    getPlayerStats(player: Player): ServerStatsCounter;
    getPlayers(): ServerPlayer[];
    getPlayersWithAddress(ip: string): ServerPlayer[];
    getServer(): MinecraftServer;
    getSimulationDistance(): number;
    getViewDistance(): number;
    getWhiteList(): UserWhiteList;
    getWhiteListNames(): string[];
    isAllowCommandsForAllPlayers(): boolean;
    isOp(nameAndId: NameAndId): boolean;
    isUsingWhitelist(): boolean;
    isWhiteListed(nameAndId: NameAndId): boolean;
    loadPlayerData(nameAndId: NameAndId): Optional<CompoundTag>;
    // private locateStatsFile(gameProfile: GameProfile): Path[];
    op(nameAndId: NameAndId): void;
    op(nameAndId: NameAndId, permissions: Optional<LevelBasedPermissionSet>, canBypassPlayerLimit: Optional<boolean>): void;
    placeNewPlayer(connection: Connection, player: ServerPlayer, cookie: CommonListenerCookie): void;
    reloadResources(): void;
    reloadWhiteList(): void;
    remove(player: ServerPlayer): void;
    removeAll(): void;
    respawn(serverPlayer: ServerPlayer, keepAllPlayerData: boolean, removalReason: Entity$RemovalReason): ServerPlayer;
    save(player: ServerPlayer): void;
    saveAll(): void;
    sendActiveEffects(livingEntity: LivingEntity, connection: ServerGamePacketListenerImpl): void;
    sendActivePlayerEffects(player: ServerPlayer): void;
    sendAllPlayerInfo(player: ServerPlayer): void;
    sendLevelInfo(player: ServerPlayer, level: ServerLevel): void;
    sendPlayerPermissionLevel(player: ServerPlayer): void;
    // private sendPlayerPermissionLevel(player: ServerPlayer, permissions: LevelBasedPermissionSet): void;
    setAllowCommandsForAllPlayers(allowCommands: boolean): void;
    setSimulationDistance(simulationDistance: number): void;
    setViewDistance(viewDistance: number): void;
    tick(): void;
    updateEntireScoreboard(scoreboard: ServerScoreboard, player: ServerPlayer): void;
    // private verifyChatTrusted(message: PlayerChatMessage): boolean;
}