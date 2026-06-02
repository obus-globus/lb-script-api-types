import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { GeneratingChunkMap } from '../../../../net/minecraft/server/level/GeneratingChunkMap.d.ts'
import type { GenerationChunkHolder } from '../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class ChunkGenerationTask extends Object {
    static create(paramchunkMap: GeneratingChunkMap, paramtargetStatus: ChunkStatus, parampos: ChunkPos): ChunkGenerationTask;
    private constructor(chunkMap: GeneratingChunkMap, targetStatus: ChunkStatus, pos: ChunkPos, cache: StaticCache2D<GenerationChunkHolder>)
    // private cache: StaticCache2D<GenerationChunkHolder>;
    // private chunkMap: GeneratingChunkMap;
    // private markedForCancellation: boolean;
    // private needsGeneration: boolean;
    // private pos: ChunkPos;
    // private scheduledLayer: CompletableFuture<ChunkResult<ChunkAccess>>[];
    // private scheduledStatus: ChunkStatus;
    targetStatus: ChunkStatus;
    // private canLoadWithoutGeneration(): boolean;
    getCenter(): GenerationChunkHolder;
    // private getRadiusForLayer(status: ChunkStatus, needsGeneration: boolean): number;
    markForCancellation(): void;
    // private releaseClaim(): void;
    runUntilWait(): CompletableFuture<Object>;
    // private scheduleChunkInLayer(status: ChunkStatus, needsGeneration: boolean, chunkHolder: GenerationChunkHolder): boolean;
    // private scheduleLayer(status: ChunkStatus, needsGeneration: boolean): void;
    // private scheduleNextLayer(): void;
    // private waitForScheduledLayer(): CompletableFuture<Object>;
}