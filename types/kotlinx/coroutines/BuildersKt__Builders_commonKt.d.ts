import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class BuildersKt__Builders_commonKt extends Object {
    static async(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: CoroutineStart, paramarg3: Function2<Object, Object, Object>): Deferred<Object>;
    static invoke(paramarg0: CoroutineDispatcher, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
    static launch(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: CoroutineStart, paramarg3: Function2<Object, Object, Object>): Job;
    static withContext(paramarg0: CoroutineContext, paramarg1: Function2<Object, Object, Object>, paramarg2: Continuation<Object>): Object;
}