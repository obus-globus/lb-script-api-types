import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class ChildHandleNode extends JobNode implements ChildHandle {
    constructor(childJob: ChildJob)
    childJob: ChildJob;
    readonly onCancelling: boolean;
    readonly parent: Job;
    childCancelled(cause: Throwable): boolean;
    invoke(cause: Throwable | null): void;
}