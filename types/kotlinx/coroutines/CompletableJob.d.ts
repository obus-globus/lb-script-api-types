import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export interface CompletableJob extends Object, Job{
    cancel(): void;
    complete(): boolean;
    completeExceptionally(exception: Throwable): boolean;
    plus(other: Job): Job;
}