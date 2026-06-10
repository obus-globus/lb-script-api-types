import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LimitKt extends Object {
    static collectWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static drop(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static dropWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static take(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static takeWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object): Flow<Object>;
    static transformWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}