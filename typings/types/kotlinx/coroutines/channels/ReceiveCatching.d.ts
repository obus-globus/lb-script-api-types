import type { Object } from '../../../java/lang/Object.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { ChannelResult } from '../../../kotlinx/coroutines/channels/ChannelResult.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class ReceiveCatching<E extends Object | number | string | boolean> extends Object implements Waiter {
    constructor(cont: CancellableContinuationImpl<ChannelResult<E>>)
    cont: CancellableContinuationImpl<ChannelResult<E>>;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
}