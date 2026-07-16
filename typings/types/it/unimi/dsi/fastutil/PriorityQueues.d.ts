import type { PriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { PriorityQueues$EmptyPriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueues$EmptyPriorityQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PriorityQueues extends Object {
    static EMPTY_QUEUE: PriorityQueues$EmptyPriorityQueue;
    static emptyQueue<K extends unknown>(): PriorityQueue<K>;
    static synchronize<K extends unknown>(paramarg0: PriorityQueue<K>): PriorityQueue<K>;
    static synchronize<K extends unknown>(paramarg0: PriorityQueue<K>, paramarg1: Object): PriorityQueue<K>;
    private constructor()
}