import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { BufferOverflow } from '../../../kotlinx/coroutines/channels/BufferOverflow.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { MutableStateFlow } from '../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class StateFlowKt extends Object {
    static MutableStateFlow(paramarg0: Object | null): MutableStateFlow<Object>;
    static fuseStateFlow(paramarg0: StateFlow<Object>, paramarg1: CoroutineContext, paramarg2: number, paramarg3: BufferOverflow): Flow<Object>;
    static getAndUpdate(paramarg0: MutableStateFlow<Object>, paramarg1: (param0: Object | null) => Object | null): Object | null;
    static update(paramarg0: MutableStateFlow<Object>, paramarg1: (param0: Object | null) => Object | null): void;
    static updateAndGet(paramarg0: MutableStateFlow<Object>, paramarg1: (param0: Object | null) => Object | null): Object | null;
}