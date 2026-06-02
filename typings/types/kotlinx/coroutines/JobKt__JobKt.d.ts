import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class JobKt__JobKt extends Object {
    static Job(paramarg0: Job): CompletableJob;
    static Job(paramarg0: Job): Job;
    static cancel(paramarg0: CoroutineContext, paramarg1: Throwable): boolean;
    static cancel(paramarg0: CoroutineContext): void;
    static cancel(paramarg0: CoroutineContext, paramarg1: CancellationException): void;
    static cancel(paramarg0: Job, paramarg1: string, paramarg2: Throwable): void;
    static cancelAndJoin(paramarg0: Job, paramarg1: Continuation<Object>): Object;
    static cancelChildren(paramarg0: CoroutineContext): void;
    static cancelChildren(paramarg0: CoroutineContext, paramarg1: Throwable): void;
    static cancelChildren(paramarg0: CoroutineContext, paramarg1: CancellationException): void;
    static cancelChildren(paramarg0: Job): void;
    static cancelChildren(paramarg0: Job, paramarg1: Throwable): void;
    static cancelChildren(paramarg0: Job, paramarg1: CancellationException): void;
    static disposeOnCompletion(paramarg0: Job, paramarg1: DisposableHandle): DisposableHandle;
    static ensureActive(paramarg0: CoroutineContext): void;
    static ensureActive(paramarg0: Job): void;
    static getJob(paramarg0: CoroutineContext): Job;
    static invokeOnCompletion(paramarg0: Job, paramarg1: boolean, paramarg2: JobNode): DisposableHandle;
    static isActive(paramarg0: CoroutineContext): boolean;
}