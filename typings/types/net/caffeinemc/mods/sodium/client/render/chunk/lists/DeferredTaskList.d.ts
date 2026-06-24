import type { LongHeapPriorityQueue } from '../../../../../../../../it/unimi/dsi/fastutil/longs/LongHeapPriorityQueue.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DeferredTaskList extends LongHeapPriorityQueue {
    static createHeapCopyOf(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): DeferredTaskList;
    private constructor(arg0: (Object | null)[], arg1: number, arg2: number)
    // private baseOffsetX: number;
    // private baseOffsetZ: number;
    dequeueNextSectionPos(): number;
}