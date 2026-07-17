import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelSegment } from '../../../kotlinx/coroutines/channels/ChannelSegment.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class BufferedChannel$BufferedChannelIterator extends Object implements Waiter, ChannelIterator<E> {
    constructor(null_: BufferedChannel<Object>)
    // private continuation: CancellableContinuationImpl<boolean> | null;
    // private receiveResult: Object | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    hasNext($completion: Continuation<boolean>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private hasNextOnNoWaiterSuspend<E extends unknown>(segment: ChannelSegment<E>, index: number, r: number, $completion: Continuation<boolean>): any;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    next<E extends unknown>(): E;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    next0<E extends unknown>($completion: Continuation<E>): any;
    // private onClosedHasNext(): boolean;
    // private onClosedHasNextNoWaiterSuspend(): void;
    tryResumeHasNext<E extends unknown>(element: E): boolean;
    tryResumeHasNextOnClosedChannel(): void;
}