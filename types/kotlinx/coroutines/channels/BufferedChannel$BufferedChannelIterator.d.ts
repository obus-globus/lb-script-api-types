import type { Object } from '../../../java/lang/Object.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { ChannelIterator } from '../../../kotlinx/coroutines/channels/ChannelIterator.d.ts'
import type { ChannelSegment } from '../../../kotlinx/coroutines/channels/ChannelSegment.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class BufferedChannel$BufferedChannelIterator extends Object implements Waiter, ChannelIterator<E> {
    constructor(null_: BufferedChannel$BufferedChannelIterator)
    // private continuation: CancellableContinuationImpl<boolean> | null;
    // private receiveResult: Object | null;
    hasNext(): boolean;
    // private hasNextOnNoWaiterSuspend(segment: ChannelSegment<E>, index: number, r: number): boolean;
    invokeOnCancellation(segment: Segment<Object>, index: number): void;
    next<E extends Object | number | string | boolean>(): E;
    next0<E extends Object | number | string | boolean>(): E;
    // private onClosedHasNext(): boolean;
    // private onClosedHasNextNoWaiterSuspend(): void;
    tryResumeHasNext<E extends Object | number | string | boolean>(element: E): boolean;
    tryResumeHasNextOnClosedChannel(): void;
}