import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__CountKt extends Object {
    static count<T extends unknown>(paramarg0: Flow<T>, paramarg1: Continuation<Object>): Object;
    static count<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
}