import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicArray } from '../../../kotlinx/atomicfu/AtomicArray.d.ts'
import type { BufferedChannel } from '../../../kotlinx/coroutines/channels/BufferedChannel.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class ChannelSegment<E extends unknown> extends Segment<ChannelSegment<E>> {
    constructor(id: number, prev: ChannelSegment<E> | null, channel: BufferedChannel<E> | null, pointers: number)
    casState(index: number, from: Object | null, to: Object | null): boolean;
    cleanElement(index: number): void;
    getAndSetState(index: number, update: Object | null): Object | null;
    getElement(index: number): E;
    getState(index: number): Object | null;
    onCancellation(index: number, cause: Throwable | null, context: CoroutineContext): void;
    onCancelledRequest(index: number, receiver: boolean): void;
    retrieveElement(index: number): E;
    // private setElementLazy(index: number, value: Object | null): void;
    setState(index: number, value: Object | null): void;
    storeElement(index: number, element: E): void;
}