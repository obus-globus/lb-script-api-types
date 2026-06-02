import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { LongPredicate } from '../../../../java/util/function/LongPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { LevelChunkTicks } from '../../../../net/minecraft/world/ticks/LevelChunkTicks.d.ts'
import type { LevelTickAccess } from '../../../../net/minecraft/world/ticks/LevelTickAccess.d.ts'
import type { LevelTicks$PosAndContainerConsumer } from '../../../../net/minecraft/world/ticks/LevelTicks$PosAndContainerConsumer.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
export class LevelTicks<T extends Object | number | string | boolean> extends Object implements LevelTickAccess<T> {
    constructor(tickCheck: (param0: number) => kotlin.Boolean)
    // private allContainers: Long2ObjectMap<LevelChunkTicks<T>>;
    // private alreadyRunThisTick: ScheduledTick<T>[];
    // private chunkScheduleUpdater: (param0: LevelChunkTicks<T>, param1: ScheduledTick<T>) => void;
    // private containersToTick: LevelChunkTicks<T>[];
    // private nextTickForContainer: Long2LongMap;
    // private tickCheck: (param0: number) => kotlin.Boolean;
    // private toRunThisTick: ScheduledTick<T>[];
    // private toRunThisTickSet: ScheduledTick<Object>[];
    addContainer(pos: ChunkPos, container: LevelChunkTicks<T>): void;
    // private calculateTickSetIfNeeded(): void;
    // private canScheduleMoreTicks(maxTicksToProcess: number): boolean;
    // private cleanupAfterTick(): void;
    clearArea(area: BoundingBox): void;
    // private collectTicks(currentTick: number, maxTicksToProcess: number, profiler: ProfilerFiller): void;
    copyArea(area: BoundingBox, offset: Vec3i): void;
    copyAreaFrom(source: LevelTicks<T>, area: BoundingBox, offset: Vec3i): void;
    count(): number;
    // private drainContainers(currentTick: number, maxTicksToProcess: number): void;
    // private drainFromCurrentContainer(containersToTick: LevelChunkTicks<T>[], currentContainer: LevelChunkTicks<T>, currentTick: number, maxTicksToProcess: number): void;
    // private forContainersInArea(bb: BoundingBox, ouput: (param0: T, param1: number) => void): void;
    hasScheduledTick(pos: BlockPos, block: T): boolean;
    removeContainer(pos: ChunkPos): void;
    // private rescheduleLeftoverContainers(): void;
    // private runCollectedTicks(output: (param0: BlockPos, param1: T) => void): void;
    schedule(tick: ScheduledTick<T>): void;
    // private scheduleForThisTick(tick: ScheduledTick<T>): void;
    // private sortContainersToTick(currentTick: number): void;
    tick(currentTick: number, maxTicksToProcess: number, output: (param0: BlockPos, param1: T) => void): void;
    // private updateContainerScheduling(nextTick: ScheduledTick<T>): void;
    willTickThisTick(pos: BlockPos, type: T): boolean;
}