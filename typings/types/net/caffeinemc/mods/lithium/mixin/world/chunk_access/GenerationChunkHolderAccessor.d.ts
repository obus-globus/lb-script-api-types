import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicReferenceArray } from '../../../../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkResult } from '../../../../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { ChunkAccess } from '../../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export interface GenerationChunkHolderAccessor extends Object{
    invokeCannotBeLoaded(arg0: ChunkStatus): boolean;
    lithium$getChunkFuturesByStatus(): AtomicReferenceArray<CompletableFuture<ChunkResult<ChunkAccess>>>;
}