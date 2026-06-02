import type { Object } from '../../java/lang/Object.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { ParentJob } from '../../kotlinx/coroutines/ParentJob.d.ts'
export interface ChildJob extends Object, Job{
    cancel(): void;
    parentCancelled(parentJob: ParentJob): void;
    plus(other: Job): Job;
}