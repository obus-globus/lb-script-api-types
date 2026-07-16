import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__ErrorsKt extends Object {
    static catch<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<T>;
    static catchImpl<T extends unknown>(paramarg0: Flow<T>, paramarg1: FlowCollector<Object>, paramarg2: Continuation<Object>): Object;
    static retry<T extends unknown>(paramarg0: Flow<T>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => Object): Flow<T>;
    static retryWhen<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object, param3: Object) => Object): Flow<T>;
}