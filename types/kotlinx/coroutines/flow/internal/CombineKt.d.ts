import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function3 } from '../../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class CombineKt extends Object {
    static combineInternal(paramarg0: FlowCollector<Object>, paramarg1: Object | null, paramarg2: Function0<Object>, paramarg3: Function3<Object, Object, Object, Object>, paramarg4: Continuation<Object>): Object;
    static zipImpl(paramarg0: Flow<Object>, paramarg1: Flow<Object>, paramarg2: Function3<Object, Object, Object, Object>): Flow<Object>;
}