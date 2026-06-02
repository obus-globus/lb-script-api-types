import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
export class JobImpl extends JobSupport implements CompletableJob {
    static Key: Job$Key;
    constructor(parent: Job | null)
    // private handlesException: boolean;
    /*not mapped: */ getHandlesException$kotlinx_coroutines_core(): boolean;
    /*not mapped: */ getOnCancelComplete$kotlinx_coroutines_core(): boolean;
    complete(): boolean;
    completeExceptionally(exception: Throwable): boolean;
    // private handlesException(): boolean;
}