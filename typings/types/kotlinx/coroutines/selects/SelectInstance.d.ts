import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export interface SelectInstance<R extends Object | number | string | boolean> extends Object{
    readonly context: CoroutineContext;
    disposeOnCompletion(disposableHandle: DisposableHandle): void;
    selectInRegistrationPhase(internalResult: Object | null): void;
    trySelect(clauseObject: Object, result: Object | null): boolean;
}