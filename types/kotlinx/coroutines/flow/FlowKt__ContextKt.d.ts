import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ContextKt extends Object {
    static buffer(paramarg0: Flow<Object>, paramarg1: number, paramarg2: BufferOverflow): Flow<Object>;
    static buffer(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static cancellable(paramarg0: Flow<Object>): Flow<Object>;
    static conflate(paramarg0: Flow<Object>): Flow<Object>;
    static flowOn(paramarg0: Flow<Object>, paramarg1: CoroutineContext): Flow<Object>;
}