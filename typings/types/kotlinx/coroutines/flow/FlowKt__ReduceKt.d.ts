import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ReduceKt extends Object {
    static first(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static first(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static fold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object, param2: Object) => Object, paramarg3: Continuation<Object>): Object;
    static last(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static lastOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static reduce(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object, paramarg2: Continuation<Object>): Object;
    static single(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static singleOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
}