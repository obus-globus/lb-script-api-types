import type { IndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueue.d.ts'
import type { IndirectPriorityQueues$EmptyIndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueues$EmptyIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IndirectPriorityQueues extends Object {
    static EMPTY_QUEUE: IndirectPriorityQueues$EmptyIndirectPriorityQueue;
    static synchronize<K extends unknown>(paramarg0: IndirectPriorityQueue<K>): IndirectPriorityQueue<K>;
    static synchronize<K extends unknown>(paramarg0: IndirectPriorityQueue<K>, paramarg1: Object): IndirectPriorityQueue<K>;
    private constructor()
}