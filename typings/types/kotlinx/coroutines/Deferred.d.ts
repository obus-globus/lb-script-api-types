import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { SelectClause1 } from '../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export interface Deferred<T extends Object | number | string | boolean> extends Object, Job{
    readonly onAwait: SelectClause1<T>;
    attachChild(child: ChildJob): ChildHandle;
    await(): T;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    getCancellationException(): CancellationException;
    getCompleted(): T;
    getCompletionExceptionOrNull(): Throwable | null;
    join(): void;
    plus(other: Job): Job;
    start(): boolean;
}