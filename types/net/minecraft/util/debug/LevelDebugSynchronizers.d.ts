import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { ServerDebugSubscribers } from '../../../../net/minecraft/util/debug/ServerDebugSubscribers.d.ts'
import type { TrackingDebugSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer.d.ts'
import type { TrackingDebugSynchronizer$PoiSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer$PoiSynchronizer.d.ts'
import type { TrackingDebugSynchronizer$SourceSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer$SourceSynchronizer.d.ts'
import type { TrackingDebugSynchronizer$VillageSectionSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer$VillageSectionSynchronizer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PoiRecord } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class LevelDebugSynchronizers extends Object {
    constructor(level: ServerLevel)
    // private allSynchronizers: TrackingDebugSynchronizer<Object>[];
    // private enabledSubscriptions: DebugSubscription<Object>[];
    // private level: ServerLevel;
    // private poiSynchronizer: TrackingDebugSynchronizer$PoiSynchronizer;
    // private sleeping: boolean;
    // private sourceSynchronizers: Map<DebugSubscription<Object>, TrackingDebugSynchronizer$SourceSynchronizer<Object>>;
    // private villageSectionSynchronizer: TrackingDebugSynchronizer$VillageSectionSynchronizer;
    broadcastEventToTracking<T extends Object | number | string | boolean>(blockPos: BlockPos, subscription: DebugSubscription<T>, value: T): void;
    // private broadcastToTracking(trackedEntity: Entity, subscription: DebugSubscription<Object>, packet: Packet<ClientGamePacketListener>): void;
    // private broadcastToTracking(trackedChunk: ChunkPos, subscription: DebugSubscription<Object>, packet: Packet<ClientGamePacketListener>): void;
    clearBlockValue(blockPos: BlockPos, subscription: DebugSubscription<T>): void;
    clearEntityValue(entity: Entity, subscription: DebugSubscription<T>): void;
    dropBlockEntity(blockPos: BlockPos): void;
    dropChunk(chunkPos: ChunkPos): void;
    dropEntity(entity: Entity): void;
    dropPoi(pos: BlockPos): void;
    // private getSourceSynchronizer(subscription: DebugSubscription<T>): TrackingDebugSynchronizer$SourceSynchronizer<T>;
    hasAnySubscriberFor(subscription: DebugSubscription<Object>): boolean;
    registerBlockEntity(blockEntity: BlockEntity): void;
    registerChunk(chunk: LevelChunk): void;
    registerEntity(entity: Entity): void;
    registerPoi(poi: PoiRecord): void;
    sendBlockValue<T extends Object | number | string | boolean>(blockPos: BlockPos, subscription: DebugSubscription<T>, value: T): void;
    sendEntityValue<T extends Object | number | string | boolean>(entity: Entity, subscription: DebugSubscription<T>, value: T): void;
    startTrackingChunk(player: ServerPlayer, chunkPos: ChunkPos): void;
    startTrackingEntity(player: ServerPlayer, entity: Entity): void;
    tick(serverSubscribers: ServerDebugSubscribers): void;
    updatePoi(pos: BlockPos): void;
    // private wakeUp(): void;
}