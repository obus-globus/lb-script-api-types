import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
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
    invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: Function1<Throwable, void>): DisposableHandle;
    invokeOnCompletion(handler: Function1<Throwable, void>): DisposableHandle;
    join(): void;
    plus(other: Job): Job;
    start(): boolean;
    toString(): string;
}