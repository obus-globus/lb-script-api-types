import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LimitKt extends Object {
    static collectWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
    static drop(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static dropWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static take(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static takeWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
    static transformWhile(paramarg0: Flow<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
}