import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class SupervisorKt extends Object {
    static SupervisorJob(paramarg0: Job): CompletableJob;
    static SupervisorJob(paramarg0: Job): Job;
    static supervisorScope(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Continuation<Object>): Object;
}