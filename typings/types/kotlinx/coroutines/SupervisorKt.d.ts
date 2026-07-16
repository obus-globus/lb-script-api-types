import type { Object } from '../../java/lang/Object.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class SupervisorKt extends Object {
    static SupervisorJob(parent: Job | null): CompletableJob;
    static SupervisorJob(parent: Job | null): Job;
    static supervisorScope<R extends unknown>(block: (param0: CoroutineScope) => R): R;
}