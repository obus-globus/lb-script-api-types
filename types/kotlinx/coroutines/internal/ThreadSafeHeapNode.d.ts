import type { Object } from '../../../java/lang/Object.d.ts'
import type { ThreadSafeHeap } from '../../../kotlinx/coroutines/internal/ThreadSafeHeap.d.ts'
export interface ThreadSafeHeapNode extends Object{
    heap: ThreadSafeHeap<Object> | null;
    index: number;
}