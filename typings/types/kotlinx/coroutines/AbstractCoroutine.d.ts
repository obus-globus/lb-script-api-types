import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
export abstract class AbstractCoroutine<T extends Object | number | string | boolean> extends JobSupport implements Continuation<T>, CoroutineScope, Job {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, initParentJob: boolean, active: boolean)
    readonly context: CoroutineContext;
    readonly coroutineContext: CoroutineContext;
    /*not mapped: */ isActive(): boolean;
    protected afterResume(state: Object | null): void;
    cancel(): void;
    protected cancellationExceptionMessage(): string;
    handleOnCompletionException(exception: Throwable): void;
    nameString(): string;
    protected onCancelled(cause: Throwable, handled: boolean): void;
    protected onCompleted(value: T): void;
    protected onCompletionInternal(state: Object | null): void;
    plus(other: Job): Job;
    resumeWith(result: Result<T>): void;
    start(): boolean;
    start<R extends Object | number | string | boolean>(start: CoroutineStart, receiver: R, block: (param0: R) => T): void;
}