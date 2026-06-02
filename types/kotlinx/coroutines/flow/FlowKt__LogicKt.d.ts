import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LogicKt extends Object {
    static all(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static any(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static none(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
}