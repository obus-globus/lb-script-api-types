import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkGenerationTask } from '../../../../net/minecraft/server/level/ChunkGenerationTask.d.ts'
import type { GenerationChunkHolder } from '../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
export interface GeneratingChunkMap extends Object{
    acquireGeneration(chunkNode: number): GenerationChunkHolder;
    applyStep(chunkHolder: GenerationChunkHolder, step: ChunkStep, cache: StaticCache2D<GenerationChunkHolder>): CompletableFuture<ChunkAccess>;
    releaseGeneration(chunkHolder: GenerationChunkHolder): void;
    runGenerationTasks(): void;
    scheduleGenerationTask(targetStatus: ChunkStatus, pos: ChunkPos): ChunkGenerationTask;
}