import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
export class JobSupport$AwaitContinuation<T extends unknown> extends CancellableContinuationImpl<T> {
    constructor(delegate: Continuation<T>, job: JobSupport)
    // private job: JobSupport;
    getContinuationCancellationCause(parent: Job): Throwable;
    protected nameString(): string;
}