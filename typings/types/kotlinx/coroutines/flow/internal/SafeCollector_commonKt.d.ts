import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { SafeCollector } from '../../../../kotlinx/coroutines/flow/internal/SafeCollector.d.ts'
export class SafeCollector_commonKt extends Object {
    static checkContext(paramarg0: SafeCollector<Object>, paramarg1: CoroutineContext): void;
    static transitiveCoroutineParent(paramarg0: Job, paramarg1: Job): Job;
    static unsafeFlow(paramarg0: (param0: Object | null, param1: Object | null) => Object | null): Flow<Object>;
}