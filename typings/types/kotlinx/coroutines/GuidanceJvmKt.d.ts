import type { Object } from '../../java/lang/Object.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class GuidanceJvmKt extends Object {
    static runInterruptible<T extends unknown>(context: Job, block: () => T): T;
}