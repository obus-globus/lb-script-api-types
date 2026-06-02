import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ChunkTaskDispatcher } from '../../../../net/minecraft/server/level/ChunkTaskDispatcher.d.ts'
import type { ThreadedLevelLightEngine$TaskType } from '../../../../net/minecraft/server/level/ThreadedLevelLightEngine$TaskType.d.ts'
import type { ConsecutiveExecutor } from '../../../../net/minecraft/util/thread/ConsecutiveExecutor.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LightLayer } from '../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { DataLayer } from '../../../../net/minecraft/world/level/chunk/DataLayer.d.ts'
import type { LightChunkGetter } from '../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ThreadedLevelLightEngine extends LevelLightEngine implements AutoCloseable {
    static DEFAULT_BATCH_SIZE: number;
    static EMPTY: LevelLightEngine;
    static LIGHT_SECTION_PADDING: number;
    constructor(lightChunkGetter: LightChunkGetter, chunkMap: ChunkMap, hasSkyLight: boolean, consecutiveExecutor: ConsecutiveExecutor, taskDispatcher: ChunkTaskDispatcher)
    // private chunkMap: ChunkMap;
    // private consecutiveExecutor: ConsecutiveExecutor;
    // private lightTasks: Pair<ThreadedLevelLightEngine$TaskType, () => void>[];
    // private scheduled: AtomicBoolean;
    // private taskDispatcher: ChunkTaskDispatcher;
    // private taskPerBatch: number;
    // private addTask(chunkX: number, chunkZ: number, level: () => kotlin.Int, type: ThreadedLevelLightEngine$TaskType, runnable: () => void): void;
    // private addTask(chunkX: number, chunkZ: number, type: ThreadedLevelLightEngine$TaskType, runnable: () => void): void;
    checkBlock(pos: BlockPos): void;
    close(): void;
    initializeLight(chunk: ChunkAccess, lighted: boolean): CompletableFuture<ChunkAccess>;
    lightChunk(centerChunk: ChunkAccess, lighted: boolean): CompletableFuture<ChunkAccess>;
    propagateLightSources(pos: ChunkPos): void;
    queueSectionData(layer: LightLayer, pos: SectionPos, data: DataLayer): void;
    retainData(pos: ChunkPos, retain: boolean): void;
    runLightUpdates(): number;
    // private runUpdate(): void;
    setLightEnabled(pos: ChunkPos, enable: boolean): void;
    tryScheduleUpdate(): void;
    updateChunkStatus(pos: ChunkPos): void;
    updateSectionStatus(pos: SectionPos, sectionEmpty: boolean): void;
    waitForPendingTasks(chunkX: number, chunkZ: number): CompletableFuture<Object>;
}