import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
export interface FusibleFlow<T extends unknown> extends Object, Flow<T>{
    fuse(context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
}