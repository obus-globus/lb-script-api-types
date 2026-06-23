import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { CancelHandler } from '../../../kotlinx/coroutines/CancelHandler.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
import type { SelectImplementation$ClauseData } from '../../../kotlinx/coroutines/selects/SelectImplementation$ClauseData.d.ts'
import type { SelectInstanceInternal } from '../../../kotlinx/coroutines/selects/SelectInstanceInternal.d.ts'
import type { TrySelectDetailedResult } from '../../../kotlinx/coroutines/selects/TrySelectDetailedResult.d.ts'
export class SelectImplementation<R extends unknown> extends Object implements CancelHandler, SelectBuilder<R>, SelectInstanceInternal<R> {
    constructor(context: CoroutineContext)
    // private checkClauseObject(clauseObject: Object): void;
    // private cleanup(selectedClause: SelectImplementation$ClauseData): void;
    // private complete(): R;
    disposeOnCompletion(disposableHandle: DisposableHandle): void;
    doSelect(): R;
    // private doSelectSuspend(): R;
    // private findClause(clauseObject: Object): SelectImplementation$ClauseData | null;
    invoke(cause: Throwable | null): void;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    onTimeout(timeMillis: number, block: () => R): void;
    // private processResultAndInvokeBlockRecoveringException(clause: SelectImplementation$ClauseData, internalResult: Object | null): R;
    // private reregisterClause(clauseObject: Object): void;
    selectInRegistrationPhase(internalResult: Object | null): void;
    trySelect(clauseObject: Object, result: Object | null): boolean;
    trySelectDetailed(clauseObject: Object, result: Object | null): TrySelectDetailedResult;
    // private trySelectInternal(clauseObject: Object, internalResult: Object | null): number;
    // private waitUntilSelected(): void;
}