import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowCoroutineKt extends Object {
    static flowScope(paramarg0: Function2<Object, Object, Object>, paramarg1: Continuation<Object>): Object;
    static scopedFlow(paramarg0: Function3<Object, Object, Object, Object>): Flow<Object>;
}