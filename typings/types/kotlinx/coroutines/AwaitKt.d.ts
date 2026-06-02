import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
export class AwaitKt extends Object {
    static awaitAll(paramarg0: E[], paramarg1: Continuation<Object>): Object;
    static awaitAll(paramarg0: Object | null, paramarg1: Continuation<Object>): Object;
    static joinAll(paramarg0: E[], paramarg1: Continuation<Object>): Object;
    static joinAll(paramarg0: (Object | null)[], paramarg1: Continuation<Object>): Object;
}