import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class SupervisorKt extends Object {
    static SupervisorJob(paramarg0: Job): CompletableJob;
    static SupervisorJob(paramarg0: Job): Job;
    static supervisorScope(paramarg0: Function2<Object, Object, Object>, paramarg1: Continuation<Object>): Object;
}