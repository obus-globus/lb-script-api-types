import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkTaskPriorityQueue$TasksForChunk extends Record {
    // private chunkPos: number;
    // private tasks: () => void[];
    chunkPos(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    tasks(): () => void[];
    toString(): string;
}