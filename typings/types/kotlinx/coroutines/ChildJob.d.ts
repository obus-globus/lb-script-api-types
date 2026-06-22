import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { ParentJob } from '../../kotlinx/coroutines/ParentJob.d.ts'
export interface ChildJob extends Object, Job{
    attachChild(child: ChildJob): ChildHandle;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    getCancellationException(): CancellationException;
    join(): void;
    parentCancelled(parentJob: ParentJob): void;
    plus(other: Job): Job;
    start(): boolean;
}