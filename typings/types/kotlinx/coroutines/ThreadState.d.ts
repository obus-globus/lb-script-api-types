import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class ThreadState extends JobNode {
    constructor()
    clearInterrupt(): void;
    // private invalidState(state: number): void;
    invoke(cause: Throwable | null): void;
    setup(job: Job): void;
}