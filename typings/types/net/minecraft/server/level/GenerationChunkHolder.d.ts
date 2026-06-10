import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GenerationChunkHolderAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/world/chunk_access/GenerationChunkHolderAccessor.d.ts'
import type { ChunkGenerationTask } from '../../../../net/minecraft/server/level/ChunkGenerationTask.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { FullChunkStatus } from '../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { GeneratingChunkMap } from '../../../../net/minecraft/server/level/GeneratingChunkMap.d.ts'
import type { StaticCache2D } from '../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ImposterProtoChunk } from '../../../../net/minecraft/world/level/chunk/ImposterProtoChunk.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
export abstract class GenerationChunkHolder extends Object implements GenerationChunkHolderAccessor {
    static UNLOADED_CHUNK: ChunkResult<ChunkAccess>;
    static UNLOADED_CHUNK_FUTURE: CompletableFuture<ChunkResult<ChunkAccess>>;
    constructor(pos: ChunkPos)
    // private futures: AtomicReferenceArray<CompletableFuture<ChunkResult<ChunkAccess>>>;
    // private generationRefCount: AtomicInteger;
    // private generationSaveSyncFuture: CompletableFuture<void>;
    // private highestAllowedStatus: ChunkStatus;
    readonly pos: ChunkPos;
    // private startedWork: AtomicReference<ChunkStatus>;
    // private task: AtomicReference<ChunkGenerationTask>;
    // private acquireStatusBump(status: ChunkStatus): boolean;
    addSaveDependency(sync: CompletableFuture<Object>): void;
    applyStep(step: ChunkStep, chunkMap: GeneratingChunkMap, cache: StaticCache2D<GenerationChunkHolder>): CompletableFuture<ChunkResult<ChunkAccess>>;
    // private completeFuture(status: ChunkStatus, chunk: ChunkAccess): void;
    decreaseGenerationRefCount(): void;
    // private failAndClearPendingFuture(index: number, previous: CompletableFuture<ChunkResult<ChunkAccess>>): void;
    // private failAndClearPendingFuturesBetween(fromExclusive: ChunkStatus, toInclusive: ChunkStatus): void;
    // private findHighestStatusWithPendingFuture(newStatus: ChunkStatus): ChunkStatus;
    getAllFutures(): Pair<ChunkStatus, CompletableFuture<ChunkResult<ChunkAccess>>>[];
    getChunkIfPresent(status: ChunkStatus): ChunkAccess;
    getChunkIfPresentUnchecked(status: ChunkStatus): ChunkAccess;
    getFullStatus(): FullChunkStatus;
    getLatestChunk(): ChunkAccess;
    getLatestStatus(): ChunkStatus;
    // private getOrCreateFuture(status: ChunkStatus): CompletableFuture<ChunkResult<ChunkAccess>>;
    getPersistedStatus(): ChunkStatus;
    getPos(): ChunkPos;
    getQueueLevel(): number;
    getTicketLevel(): number;
    increaseGenerationRefCount(): void;
    // private isStatusDisallowed(status: ChunkStatus): boolean;
    removeTask(task: ChunkGenerationTask): void;
    replaceProtoChunk(chunk: ImposterProtoChunk): void;
    // private rescheduleChunkTask(scheduler: ChunkMap, status: ChunkStatus): void;
    scheduleChunkGenerationTask(status: ChunkStatus, scheduler: ChunkMap): CompletableFuture<ChunkResult<ChunkAccess>>;
    updateHighestAllowedStatus(scheduler: ChunkMap): void;
}