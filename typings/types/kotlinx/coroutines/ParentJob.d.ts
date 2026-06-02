import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export interface ParentJob extends Object, Job{
    cancel(): void;
    getChildJobCancellationCause(): CancellationException;
    plus(other: Job): Job;
}