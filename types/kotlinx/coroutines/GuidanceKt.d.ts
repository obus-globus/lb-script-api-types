import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class GuidanceKt extends Object {
    static async(paramarg0: CoroutineContext, paramarg1: CoroutineStart, paramarg2: Function2<Object, Object, Object>): Deferred<Object>;
    static launch(paramarg0: CoroutineContext, paramarg1: CoroutineStart, paramarg2: Function2<Object, Object, Object>): Job;
}