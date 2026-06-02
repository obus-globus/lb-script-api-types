import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GenerationChunkHolder } from '../../../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStep } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { WorldGenContext } from '../../../../../../net/minecraft/world/level/chunk/status/WorldGenContext.d.ts'
export interface ChunkStatusTask extends Object{
    doWork(context: WorldGenContext, step: ChunkStep, chunks: StaticCache2D<GenerationChunkHolder>, chunk: ChunkAccess): CompletableFuture<ChunkAccess>;
}