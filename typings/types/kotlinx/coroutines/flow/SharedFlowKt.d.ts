import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class SharedFlowKt extends Object {
    static NO_VALUE: Symbol;
    static MutableSharedFlow<T extends unknown>(replay: number, extraBufferCapacity: number, onBufferOverflow: BufferOverflow): MutableSharedFlow<T>;
    static fuseSharedFlow<T extends unknown>(self: SharedFlow<T>, context: CoroutineContext, capacity: number, onBufferOverflow: BufferOverflow): Flow<T>;
}