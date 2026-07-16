import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class CombineKt extends Object {
    static combineInternal(paramarg0: FlowCollector<Object>, paramarg1: Flow<Object>[], paramarg2: () => (Object | null)[], paramarg3: (param0: Object, param1: Object, param2: Object) => Object, paramarg4: Continuation<Object>): Object;
    static zipImpl(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: (param0: Object, param1: Object, param2: Object) => Object): Flow<Object>;
}