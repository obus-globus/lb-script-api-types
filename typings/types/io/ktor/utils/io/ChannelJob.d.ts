import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export interface ChannelJob extends Object{
    readonly job: Job;
}