import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SavedTick } from '../../../../net/minecraft/world/ticks/SavedTick.d.ts'
import type { ScheduledTick } from '../../../../net/minecraft/world/ticks/ScheduledTick.d.ts'
import type { SerializableTickContainer } from '../../../../net/minecraft/world/ticks/SerializableTickContainer.d.ts'
import type { TickContainerAccess } from '../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class LevelChunkTicks<T extends Object | number | string | boolean> extends Object implements SerializableTickContainer<T>, TickContainerAccess<T> {
    constructor()
    constructor(pendingTicks: SavedTick<T>[])
    // private allTicks: (Object | null)[];
    // private nextTickQueue: Object[];
    readonly onTickAdded: (param0: LevelChunkTicks<T>, param1: ScheduledTick<T>) => void;
    // private pendingTicks: SavedTick<T>[];
    // private tickQueue: ScheduledTick<T>[];
    // private tickQueuesByTimeAndPriority: Long2ReferenceAVLTreeMap<Object>;
    // private ticksPerPosition: ScheduledTick<Object>[];
    count(): number;
    getAll(): Stream<Object>;
    hasScheduledTick(arg0: BlockPos, arg1: Object): boolean;
    pack(arg0: number): (Object | null)[];
    peek(): ScheduledTick<Object>;
    poll(): ScheduledTick<Object>;
    // private queueTick(arg0: ScheduledTick<Object>): void;
    removeIf(arg0: (param0: Object) => boolean): void;
    schedule(arg0: ScheduledTick<Object>): void;
    // private scheduleUnchecked(tick: ScheduledTick<T>): void;
    setOnTickAdded(onTickAdded: (param0: LevelChunkTicks<T>, param1: ScheduledTick<T>) => void): void;
    unpack(arg0: number): void;
    // private updateNextTickQueue(arg0: boolean): void;
}