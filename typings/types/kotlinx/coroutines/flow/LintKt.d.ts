import type { CancellationException } from '../../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class LintKt extends Object {
    static cancel(self: FlowCollector<Object>, cause: CancellationException | null): void;
    static cancellable<T extends unknown>(self: SharedFlow<T>): Flow<T>;
    static conflate<T extends unknown>(self: StateFlow<T>): Flow<T>;
    static distinctUntilChanged<T extends unknown>(self: StateFlow<T>): Flow<T>;
    static flowOn<T extends unknown>(self: SharedFlow<T>, context: CoroutineContext): Flow<T>;
    static getCoroutineContext(paramarg0: FlowCollector<Object>): CoroutineContext;
    static isActive(paramarg0: FlowCollector<Object>): boolean;
}