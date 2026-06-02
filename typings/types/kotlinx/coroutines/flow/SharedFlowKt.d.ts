import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class SharedFlowKt extends Object {
    static NO_VALUE: Symbol;
    static MutableSharedFlow(paramarg0: number, paramarg1: number, paramarg2: BufferOverflow): MutableSharedFlow<Object>;
    static fuseSharedFlow(paramarg0: SharedFlow<Object>, paramarg1: CoroutineContext, paramarg2: number, paramarg3: BufferOverflow): Flow<Object>;
}