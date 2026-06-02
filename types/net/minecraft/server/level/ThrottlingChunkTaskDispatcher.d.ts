import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkTaskDispatcher } from '../../../../net/minecraft/server/level/ChunkTaskDispatcher.d.ts'
import type { ChunkTaskPriorityQueue$TasksForChunk } from '../../../../net/minecraft/server/level/ChunkTaskPriorityQueue$TasksForChunk.d.ts'
import type { TaskScheduler } from '../../../../net/minecraft/util/thread/TaskScheduler.d.ts'
export class ThrottlingChunkTaskDispatcher extends ChunkTaskDispatcher {
    static DISPATCHER_PRIORITY_COUNT: number;
    constructor(executor: TaskScheduler<() => void>, dispatcherExecutor: Executor, maxChunksInExecution: number)
    // private chunkPositionsInExecution: (Object | null)[];
    // private executorSchedulerName: string;
    // private maxChunksInExecution: number;
    getDebugStatus(): string;
    onRelease(key: number): void;
    popTasks(): ChunkTaskPriorityQueue$TasksForChunk;
    scheduleForExecution(tasksForChunk: ChunkTaskPriorityQueue$TasksForChunk): void;
}