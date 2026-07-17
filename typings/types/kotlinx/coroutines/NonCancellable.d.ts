import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { SelectClause0 } from '../../kotlinx/coroutines/selects/SelectClause0.d.ts'
export class NonCancellable extends AbstractCoroutineContextElement implements Job {
    static INSTANCE: NonCancellable;
    static Key: Job$Key;
    readonly children: Sequence<Job>;
    /*not mapped: */ isActive(): boolean;
    /*not mapped: */ isCancelled(): boolean;
    /*not mapped: */ isCompleted(): boolean;
    // private message: string;
    readonly onJoin: SelectClause0;
    readonly parent: Job | null;
    attachChild(child: ChildJob): ChildHandle;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    getCancellationException(): CancellationException;
    invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: (param0: Throwable | null) => void): DisposableHandle;
    invokeOnCompletion(handler: (param0: Throwable | null) => void): DisposableHandle;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    join($completion: Continuation<void>): any;
    plus(other: Job): Job;
    start(): boolean;
    toString(): string;
}