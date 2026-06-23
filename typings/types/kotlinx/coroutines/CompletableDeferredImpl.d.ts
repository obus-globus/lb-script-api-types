import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CompletableDeferred } from '../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
import type { SelectClause1 } from '../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class CompletableDeferredImpl<T extends unknown> extends JobSupport implements CompletableDeferred<T> {
    static Key: Job$Key;
    constructor(parent: Job | null)
    readonly onAwait: SelectClause1<T>;
    /*not mapped: */ getOnCancelComplete$kotlinx_coroutines_core(): boolean;
    await(): T;
    complete(value: T): boolean;
    completeExceptionally(exception: Throwable): boolean;
    getCompleted(): T;
}