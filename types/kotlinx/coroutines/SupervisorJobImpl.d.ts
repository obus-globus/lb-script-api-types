import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { JobImpl } from '../../kotlinx/coroutines/JobImpl.d.ts'
export class SupervisorJobImpl extends JobImpl {
    static Key: Job$Key;
    constructor(parent: Job | null)
    childCancelled(cause: Throwable): boolean;
}