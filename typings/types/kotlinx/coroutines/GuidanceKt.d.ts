import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { NonCancellable } from '../../kotlinx/coroutines/NonCancellable.d.ts'
export class GuidanceKt extends Object {
    static async(paramarg0: CoroutineContext, paramarg1: CoroutineStart, paramarg2: (param0: Object, param1: Object) => Object): Deferred<Object>;
    static async(paramarg0: CoroutineScope, paramarg1: Job, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Deferred<Object>;
    static async(paramarg0: CoroutineScope, paramarg1: NonCancellable, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Deferred<Object>;
    static launch(paramarg0: CoroutineContext, paramarg1: CoroutineStart, paramarg2: (param0: Object, param1: Object) => Object): Job;
    static launch(paramarg0: CoroutineScope, paramarg1: Job, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Job;
    static launch(paramarg0: CoroutineScope, paramarg1: NonCancellable, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): Job;
}