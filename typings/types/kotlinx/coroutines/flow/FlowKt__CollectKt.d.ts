import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
export class FlowKt__CollectKt extends Object {
    static collect(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static collect(paramarg0: Flow<Object>, paramarg1: Continuation<Object>): Object;
    static collectIndexed(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object, paramarg2: Continuation<Object>): Object;
    static collectLatest(paramarg0: Flow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static collectLatest(paramarg0: SharedFlow<Object>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static emitAll(paramarg0: FlowCollector<Object>, paramarg1: Flow<Object>, paramarg2: Continuation<Object>): Object;
    static launchIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope): Job;
}