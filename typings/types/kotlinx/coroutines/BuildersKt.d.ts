import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class BuildersKt extends Object {
    static async(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Deferred<Object>;
    static invoke(paramarg0: CoroutineDispatcher, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static launch(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Job;
    static runBlocking(paramarg0: CoroutineContext, paramarg1: (param0: Object, param1: Object) => Object): Object | null;
    static withContext(paramarg0: CoroutineContext, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
}