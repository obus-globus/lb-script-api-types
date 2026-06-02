import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class SharingConfig<T extends Object | number | string | boolean> extends Object {
    constructor(upstream: Flow<T>, extraBufferCapacity: number, onBufferOverflow: BufferOverflow, context: CoroutineContext)
    context: CoroutineContext;
    extraBufferCapacity: number;
    onBufferOverflow: BufferOverflow;
    upstream: Flow<T>;
}