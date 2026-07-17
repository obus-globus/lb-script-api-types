import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugValueSource$ValueGetter } from '../../../../net/minecraft/util/debug/DebugValueSource$ValueGetter.d.ts'
import type { TrackingDebugSynchronizer } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer.d.ts'
import type { TrackingDebugSynchronizer$ValueSource } from '../../../../net/minecraft/util/debug/TrackingDebugSynchronizer$ValueSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class TrackingDebugSynchronizer$SourceSynchronizer<T extends unknown> extends TrackingDebugSynchronizer<T> {
    constructor(subscription: DebugSubscription<T>)
    // private blockEntitySources: JavaMap<BlockPos, TrackingDebugSynchronizer$ValueSource<T>>;
    // private chunkSources: JavaMap<ChunkPos, TrackingDebugSynchronizer$ValueSource<T>>;
    // private entitySources: JavaMap<UUID, TrackingDebugSynchronizer$ValueSource<T>>;
    clear(): void;
    dropBlockEntity(level: ServerLevel, blockPos: BlockPos): void;
    dropChunk(chunkPos: ChunkPos): void;
    dropEntity(entity: Entity): void;
    pollAndSendUpdates(level: ServerLevel): void;
    registerBlockEntity(blockPos: BlockPos, getter: DebugValueSource$ValueGetter<T>): void;
    registerChunk(chunkPos: ChunkPos, getter: DebugValueSource$ValueGetter<T>): void;
    registerEntity(entityId: UUID, getter: DebugValueSource$ValueGetter<T>): void;
    sendInitialChunk(player: ServerPlayer, chunkPos: ChunkPos): void;
    sendInitialEntity(player: ServerPlayer, entity: Entity): void;
}