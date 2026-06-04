import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ConsecutiveExecutor } from '../../../../../../net/minecraft/util/thread/ConsecutiveExecutor.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { SimpleRegionStorage } from '../../../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
import type { ChunkEntities } from '../../../../../../net/minecraft/world/level/entity/ChunkEntities.d.ts'
import type { EntityPersistentStorage } from '../../../../../../net/minecraft/world/level/entity/EntityPersistentStorage.d.ts'
export class EntityStorage extends Object implements EntityPersistentStorage<Entity> {
    constructor(simpleRegionStorage: SimpleRegionStorage, level: ServerLevel, mainThreadExecutor: Executor)
    // private emptyChunks: (Object | null)[];
    // private entityDeserializerQueue: ConsecutiveExecutor;
    // private level: ServerLevel;
    // private simpleRegionStorage: SimpleRegionStorage;
    close(): void;
    flush(flushStorage: boolean): void;
    loadEntities(pos: ChunkPos): CompletableFuture<ChunkEntities<Entity>>;
    // private reportLoadFailureIfPresent(operation: CompletableFuture<Object>, pos: ChunkPos): void;
    // private reportSaveFailureIfPresent(operation: CompletableFuture<Object>, pos: ChunkPos): void;
    storeEntities(chunk: ChunkEntities<Entity>): void;
}