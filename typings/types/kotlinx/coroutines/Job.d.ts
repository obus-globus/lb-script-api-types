import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { SelectClause0 } from '../../kotlinx/coroutines/selects/SelectClause0.d.ts'
export interface Job extends Object, CoroutineContext$Element {
    readonly children: Sequence<Job>;
    /*not mapped: */ isActive(): boolean;
    /*not mapped: */ isCancelled(): boolean;
    /*not mapped: */ isCompleted(): boolean;
    readonly onJoin: SelectClause0;
    readonly parent: Job | null;
    attachChild(child: ChildJob): ChildHandle;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    fold<R extends unknown>(initial: R, operation: (param0: R, param1: CoroutineContext$Element) => R): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    getCancellationException(): CancellationException;
    invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: (param0: Throwable | null) => void): DisposableHandle;
    invokeOnCompletion(handler: (param0: Throwable | null) => void): DisposableHandle;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    join($completion: Continuation<void>): any;
    minusKey(key: CoroutineContext$Key<any>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    plus(other: Job): Job;
    start(): boolean;
}