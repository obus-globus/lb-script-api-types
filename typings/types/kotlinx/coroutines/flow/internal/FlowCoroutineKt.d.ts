import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowCoroutineKt extends Object {
    static flowScope(paramarg0: (param0: Object, param1: Object) => Object, paramarg1: Continuation<Object>): Object;
    static scopedFlow(paramarg0: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}