import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
export class CoroutinesUtilsKt extends Object {
    static SilentSupervisor(parent: Job | null): CoroutineContext;
    static printDebugTree(self: Job, offset: number): void;
}