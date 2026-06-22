import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export interface ParentJob extends Object, Job{
    attachChild(child: ChildJob): ChildHandle;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    getCancellationException(): CancellationException;
    getChildJobCancellationCause(): CancellationException;
    join(): void;
    plus(other: Job): Job;
    start(): boolean;
}