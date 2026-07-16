import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Future } from '../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CompletableJob } from '../../kotlinx/coroutines/CompletableJob.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
export class JobKt extends Object {
    static Job(parent: Job | null): CompletableJob;
    static Job(parent: Job | null): Job;
    static cancel(self: CoroutineContext, cause: Throwable | null): boolean;
    static cancel(self: CoroutineContext): void;
    static cancel(self: CoroutineContext, cause: CancellationException | null): void;
    static cancel(self: Job, message: string, cause: Throwable | null): void;
    static cancelAndJoin(self: Job): void;
    static cancelChildren(self: CoroutineContext): void;
    static cancelChildren(self: CoroutineContext, cause: Throwable | null): void;
    static cancelChildren(self: CoroutineContext, cause: CancellationException | null): void;
    static cancelChildren(self: Job): void;
    static cancelChildren(self: Job, cause: Throwable | null): void;
    static cancelChildren(self: Job, cause: CancellationException | null): void;
    static cancelFutureOnCancellation(self: CancellableContinuation<Object>, future: Future<Object>): void;
    static disposeOnCompletion(self: Job, handle: DisposableHandle): DisposableHandle;
    static ensureActive(self: CoroutineContext): void;
    static ensureActive(self: Job): void;
    static getJob(paramarg0: CoroutineContext): Job;
    static invokeOnCompletion(self: Job, invokeImmediately: boolean, handler: JobNode): DisposableHandle;
    static isActive(paramarg0: CoroutineContext): boolean;
}