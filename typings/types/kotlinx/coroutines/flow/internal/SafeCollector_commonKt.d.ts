import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
import type { Flow } from '../../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SafeCollector } from '../../../../kotlinx/coroutines/flow/internal/SafeCollector.d.ts'
export class SafeCollector_commonKt extends Object {
    static checkContext(self: SafeCollector<Object>, currentContext: CoroutineContext): void;
    static transitiveCoroutineParent(self: Job | null, collectJob: Job | null): Job | null;
    static unsafeFlow<T extends unknown>(block: (param0: FlowCollector<T>) => void): Flow<T>;
}