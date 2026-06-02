import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__ReduceKt extends Object {
    static first(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static first(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static firstOrNull(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static fold(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Function3<Object, Object, Object, Object>, paramarg3: Continuation<Object>): Object;
    static last(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static lastOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static reduce(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static single(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static singleOrNull(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
}