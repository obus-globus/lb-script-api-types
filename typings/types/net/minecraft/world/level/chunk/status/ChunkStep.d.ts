import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GenerationChunkHolder } from '../../../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ProfiledDuration } from '../../../../../../net/minecraft/util/profiling/jfr/callback/ProfiledDuration.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkDependencies } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkDependencies.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStatusTask } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatusTask.d.ts'
import type { WorldGenContext } from '../../../../../../net/minecraft/world/level/chunk/status/WorldGenContext.d.ts'
export class ChunkStep extends Record {
    constructor(targetStatus: ChunkStatus, directDependencies: ChunkDependencies, accumulatedDependencies: ChunkDependencies, blockStateWriteRadius: number, task: (param0: WorldGenContext, param1: ChunkStep, param2: StaticCache2D<GenerationChunkHolder>, param3: ChunkAccess) => CompletableFuture<ChunkAccess>)
    // private accumulatedDependencies: ChunkDependencies;
    // private blockStateWriteRadius: number;
    // private directDependencies: ChunkDependencies;
    // private targetStatus: ChunkStatus;
    // private task: (param0: WorldGenContext, param1: ChunkStep, param2: StaticCache2D<GenerationChunkHolder>, param3: ChunkAccess) => CompletableFuture<ChunkAccess>;
    accumulatedDependencies(): ChunkDependencies;
    apply(context: WorldGenContext, cache: StaticCache2D<GenerationChunkHolder>, chunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    blockStateWriteRadius(): number;
    // private completeChunkGeneration(newCenterChunk: ChunkAccess, profiledDuration: (param0: boolean) => void): ChunkAccess;
    directDependencies(): ChunkDependencies;
    equals(o: Object | null): boolean;
    getAccumulatedRadiusOf(status: ChunkStatus): number;
    hashCode(): number;
    targetStatus(): ChunkStatus;
    task(): (param0: WorldGenContext, param1: ChunkStep, param2: StaticCache2D<GenerationChunkHolder>, param3: ChunkAccess) => CompletableFuture<ChunkAccess>;
    toString(): string;
}