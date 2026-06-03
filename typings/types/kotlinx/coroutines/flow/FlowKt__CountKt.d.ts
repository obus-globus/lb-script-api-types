import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__CountKt extends Object {
    static count(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static count(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
}