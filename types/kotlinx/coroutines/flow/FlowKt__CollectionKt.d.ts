import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__CollectionKt extends Object {
    static toCollection(paramarg0: Flow<Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): Object;
    static toList(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
    static toSet(paramarg0: Flow<Object>, paramarg1: (Object | null)[], paramarg2: Continuation<Object>): Object;
}