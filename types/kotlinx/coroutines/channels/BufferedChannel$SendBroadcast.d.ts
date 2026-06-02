import type { Object } from '../../../java/lang/Object.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class BufferedChannel$SendBroadcast extends Object implements Waiter {
    constructor(cont: CancellableContinuation<boolean>)
    readonly cont: CancellableContinuation<boolean>;
    invokeOnCancellation(segment: Segment<Object>, index: number): void;
}