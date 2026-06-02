import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class LintKt extends Object {
    static cancel(paramarg0: FlowCollector<Object>, paramarg1: CancellationException): void;
    static cancellable(paramarg0: SharedFlow<Object>): Flow<Object>;
    static conflate(paramarg0: StateFlow<Object>): Flow<Object>;
    static distinctUntilChanged(paramarg0: StateFlow<Object>): Flow<Object>;
    static flowOn(paramarg0: SharedFlow<Object>, paramarg1: CoroutineContext): Flow<Object>;
    static getCoroutineContext(paramarg0: FlowCollector<Object>): CoroutineContext;
    static isActive(paramarg0: FlowCollector<Object>): boolean;
}