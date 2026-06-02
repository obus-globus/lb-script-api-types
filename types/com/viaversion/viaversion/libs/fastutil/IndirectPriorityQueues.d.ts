import type { IndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueue.d.ts'
import type { IndirectPriorityQueues$EmptyIndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueues$EmptyIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IndirectPriorityQueues extends Object {
    static EMPTY_QUEUE: IndirectPriorityQueues$EmptyIndirectPriorityQueue;
    static synchronize(paramarg0: IndirectPriorityQueue<Object>): IndirectPriorityQueue<Object>;
    static synchronize(paramarg0: IndirectPriorityQueue<Object>, paramarg1: Object): IndirectPriorityQueue<Object>;
    private constructor()
}