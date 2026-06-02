import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Function4 } from '../../../kotlin/jvm/functions/Function4.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__ErrorsKt extends Object {
    static catch(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>): Flow<Object>;
    static catchImpl(paramarg0: Flow<Object>, paramarg1: FlowCollector<Object>, paramarg2: Continuation<Object>): Object;
    static retry(paramarg0: Flow<Object>, paramarg1: number, paramarg2: Function2<Object, Object, Object>): Flow<Object>;
    static retryWhen(paramarg0: Flow<Object>, paramarg1: Function4<Object, Object, Object, Object, Object>): Flow<Object>;
}