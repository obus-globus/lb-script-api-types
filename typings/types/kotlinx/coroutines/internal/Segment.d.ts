import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { NotCompleted } from '../../../kotlinx/coroutines/NotCompleted.d.ts'
import type { ConcurrentLinkedListNode } from '../../../kotlinx/coroutines/internal/ConcurrentLinkedListNode.d.ts'
export abstract class Segment<S extends Segment<S>> extends ConcurrentLinkedListNode<S> implements NotCompleted {
    constructor(id: number, prev: S | null, pointers: number)
    decPointers(): boolean;
    onCancellation(index: number, cause: Throwable | null, context: CoroutineContext): void;
    onSlotCleaned(): void;
    tryIncPointers(): boolean;
}