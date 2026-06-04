import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicArray } from '../../../kotlinx/atomicfu/AtomicArray.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class SemaphoreSegment extends Segment<SemaphoreSegment> {
    constructor(id: number, prev: SemaphoreSegment | null, pointers: number)
    readonly acquirers: AtomicArray<Object>;
    readonly numberOfSlots: number;
    cas(index: number, expected: Object | null, value: Object | null): boolean;
    get(index: number): Object | null;
    getAndSet(index: number, value: Object | null): Object | null;
    onCancellation(index: number, cause: Throwable | null, context: CoroutineContext): void;
    set(index: number, value: Object | null): void;
    toString(): string;
}