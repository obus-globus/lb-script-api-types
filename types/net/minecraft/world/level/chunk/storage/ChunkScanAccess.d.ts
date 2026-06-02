import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamTagVisitor } from '../../../../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface ChunkScanAccess extends Object{
    scanChunk(pos: ChunkPos, visitor: StreamTagVisitor): CompletableFuture<void>;
}