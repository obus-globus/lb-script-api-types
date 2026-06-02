import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkTaskPriorityQueue$TasksForChunk } from '../../../../net/minecraft/server/level/ChunkTaskPriorityQueue$TasksForChunk.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkTaskPriorityQueue extends Object {
    static PRIORITY_LEVEL_COUNT: number;
    constructor(name: string)
    // private name: string;
    // private queuesPerPriority: Long2ObjectLinkedOpenHashMap<() => void[]>[];
    // private topPriorityQueueIndex: number;
    hasWork(): boolean;
    pop(): ChunkTaskPriorityQueue$TasksForChunk;
    release(pos: number, unschedule: boolean): void;
    resortChunkTasks(oldPriority: number, pos: ChunkPos, newPriority: number): void;
    submit(task: () => void, chunkPos: number, level: number): void;
    toString(): string;
}