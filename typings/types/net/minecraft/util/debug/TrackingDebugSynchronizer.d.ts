import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export abstract class TrackingDebugSynchronizer<T extends unknown> extends Object {
    constructor(subscription: DebugSubscription<T>)
    // private subscribedPlayers: UUID[];
    // private subscription: DebugSubscription<T>;
    // private addSubscriber(player: ServerPlayer): void;
    clear(): void;
    pollAndSendUpdates(level: ServerLevel): void;
    sendInitialChunk(player: ServerPlayer, chunkPos: ChunkPos): void;
    sendInitialEntity(player: ServerPlayer, entity: Entity): void;
    sendToPlayersTrackingChunk(level: ServerLevel, trackedChunk: ChunkPos, packet: Packet<ClientGamePacketListener>): void;
    sendToPlayersTrackingEntity(level: ServerLevel, trackedEntity: Entity, packet: Packet<ClientGamePacketListener>): void;
    startTrackingChunk(player: ServerPlayer, chunkPos: ChunkPos): void;
    startTrackingEntity(player: ServerPlayer, entity: Entity): void;
    tick(level: ServerLevel): void;
}