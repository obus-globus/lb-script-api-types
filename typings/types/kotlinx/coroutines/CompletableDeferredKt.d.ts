import type { Object } from '../../java/lang/Object.d.ts'
import type { CompletableDeferred } from '../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class CompletableDeferredKt extends Object {
    static CompletableDeferred(paramarg0: Object | null): CompletableDeferred<Object>;
    static CompletableDeferred(paramarg0: Job): CompletableDeferred<Object>;
    static completeWith(paramarg0: CompletableDeferred<Object>, paramarg1: Object): boolean;
}