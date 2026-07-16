import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ContextKt extends Object {
    static buffer<T extends unknown>(paramarg0: Flow<T>, paramarg1: number, paramarg2: BufferOverflow): Flow<T>;
    static buffer(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static cancellable<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static conflate<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static flowOn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineContext): Flow<T>;
}