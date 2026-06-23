import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkEntities } from '../../../../../net/minecraft/world/level/entity/ChunkEntities.d.ts'
export interface EntityPersistentStorage<T extends unknown> extends AutoCloseable, Object{
    close(): void;
    flush(flushStorage: boolean): void;
    loadEntities(pos: ChunkPos): CompletableFuture<ChunkEntities<T>>;
    storeEntities(chunk: ChunkEntities<T>): void;
}