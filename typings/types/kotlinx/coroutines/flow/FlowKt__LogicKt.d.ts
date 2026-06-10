import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LogicKt extends Object {
    static all(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static any(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static none(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
}