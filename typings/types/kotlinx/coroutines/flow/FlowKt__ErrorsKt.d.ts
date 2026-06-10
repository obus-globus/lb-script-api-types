import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__ErrorsKt extends Object {
    static catch(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
    static catchImpl(paramarg0: Flow<Object>, paramarg1: FlowCollector<Object>, paramarg2: Continuation<Object>): Object;
    static retry(paramarg0: Flow<Object>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => Object): Flow<Object>;
    static retryWhen(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<Object>;
}