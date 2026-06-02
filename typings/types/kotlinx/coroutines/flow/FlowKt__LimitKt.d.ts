import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LimitKt extends Object {
    static collectWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static drop(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static dropWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static take(paramarg0: Flow<Object>, paramarg1: number): Flow<Object>;
    static takeWhile(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>): Flow<Object>;
    static transformWhile(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
}