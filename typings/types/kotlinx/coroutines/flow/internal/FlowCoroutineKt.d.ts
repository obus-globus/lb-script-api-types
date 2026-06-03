import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowCoroutineKt extends Object {
    static flowScope(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Continuation<Object>): Object;
    static scopedFlow(paramarg0: (param0: Object | null, param1: Object | null, param2: Object | null) => Object | null): Flow<Object>;
}