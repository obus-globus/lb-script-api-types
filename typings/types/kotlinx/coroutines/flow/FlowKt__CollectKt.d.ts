import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__CollectKt extends Object {
    static collect(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static collect(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static collectIndexed(paramarg0: Flow<Object>, paramarg1: Function3<Object, Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static collectLatest(paramarg0: Flow<Object>, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static emitAll(paramarg0: FlowCollector<Object>, paramarg1: Flow<Object>, paramarg2: Continuation<Object>): Object;
    static launchIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope): Job;
}