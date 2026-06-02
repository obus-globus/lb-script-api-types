import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { SelectClause1 } from '../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export interface Deferred<T extends Object | number | string | boolean> extends Object, Job{
    readonly onAwait: SelectClause1<T>;
    await(): T;
    cancel(): void;
    getCompleted(): T;
    getCompletionExceptionOrNull(): Throwable | null;
    plus(other: Job): Job;
}