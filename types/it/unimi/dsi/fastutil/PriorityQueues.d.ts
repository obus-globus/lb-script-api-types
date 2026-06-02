import type { PriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { PriorityQueues$EmptyPriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueues$EmptyPriorityQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PriorityQueues extends Object {
    static EMPTY_QUEUE: PriorityQueues$EmptyPriorityQueue;
    static emptyQueue(): PriorityQueue<Object>;
    static synchronize(paramarg0: PriorityQueue<Object>): PriorityQueue<Object>;
    static synchronize(paramarg0: PriorityQueue<Object>, paramarg1: Object): PriorityQueue<Object>;
    private constructor()
}