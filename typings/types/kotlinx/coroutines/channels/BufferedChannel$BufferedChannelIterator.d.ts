import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelSegment } from '../../../kotlinx/coroutines/channels/ChannelSegment.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class BufferedChannel$BufferedChannelIterator extends Object implements Waiter, ChannelIterator<E> {
    static next(paramarg0: ChannelIterator<Object>, paramarg1: Continuation<Object>): Object;
    constructor(null_: BufferedChannel<E>)
    // private continuation: CancellableContinuationImpl<boolean> | null;
    // private receiveResult: Object | null;
    hasNext(): boolean;
    // private hasNextOnNoWaiterSuspend<E extends unknown>(segment: ChannelSegment<E>, index: number, r: number): boolean;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    next<E extends unknown>(): E;
    next0<E extends unknown>(): E;
    // private onClosedHasNext(): boolean;
    // private onClosedHasNextNoWaiterSuspend(): void;
    tryResumeHasNext<E extends unknown>(element: E): boolean;
    tryResumeHasNextOnClosedChannel(): void;
}