import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class GuidanceJvmKt extends Object {
    static runInterruptible(paramarg0: Job, paramarg1: () => Object | null, paramarg2: Continuation<Object>): Object;
}