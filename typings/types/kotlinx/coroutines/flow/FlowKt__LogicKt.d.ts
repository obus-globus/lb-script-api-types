import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LogicKt extends Object {
    static all(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
    static any(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
    static none(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
}