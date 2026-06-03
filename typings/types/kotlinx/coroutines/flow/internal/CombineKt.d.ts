import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class CombineKt extends Object {
    static combineInternal(paramarg0: FlowCollector<Object>, paramarg1: Object | null, paramarg2: () => Object | null, paramarg3: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null, paramarg4: Continuation<Object>): Object;
    static zipImpl(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
}