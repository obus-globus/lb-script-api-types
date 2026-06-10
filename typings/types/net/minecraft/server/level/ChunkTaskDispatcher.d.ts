import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkHolder$LevelChangeListener } from '../../../../net/minecraft/server/level/ChunkHolder$LevelChangeListener.d.ts'
import type { ChunkTaskPriorityQueue } from '../../../../net/minecraft/server/level/ChunkTaskPriorityQueue.d.ts'
import type { ChunkTaskPriorityQueue$TasksForChunk } from '../../../../net/minecraft/server/level/ChunkTaskPriorityQueue$TasksForChunk.d.ts'
import type { PriorityConsecutiveExecutor } from '../../../../net/minecraft/util/thread/PriorityConsecutiveExecutor.d.ts'
import type { TaskScheduler } from '../../../../net/minecraft/util/thread/TaskScheduler.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkTaskDispatcher extends Object implements AutoCloseable, ChunkHolder$LevelChangeListener {
    static DISPATCHER_PRIORITY_COUNT: number;
    constructor(executor: TaskScheduler<() => void>, dispatcherExecutor: Executor)
    // private dispatcher: PriorityConsecutiveExecutor;
    // private executor: TaskScheduler<() => void>;
    // private queue: ChunkTaskPriorityQueue;
    // private sleeping: boolean;
    close(): void;
    hasWork(): boolean;
    onLevelChange(pos: ChunkPos, oldLevel: () => number, newLevel: number, setQueueLevel: (param0: number) => void): void;
    onRelease(key: number): void;
    pollTask(): void;
    popTasks(): ChunkTaskPriorityQueue$TasksForChunk;
    release(pos: number, whenReleased: () => void, clearQueue: boolean): void;
    scheduleForExecution(tasksForChunk: ChunkTaskPriorityQueue$TasksForChunk): void;
    submit(task: () => void, pos: number, level: () => number): void;
}