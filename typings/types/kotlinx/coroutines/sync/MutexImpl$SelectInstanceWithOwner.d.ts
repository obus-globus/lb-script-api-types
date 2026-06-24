import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
import type { SelectInstanceInternal } from '../../../kotlinx/coroutines/selects/SelectInstanceInternal.d.ts'
import type { MutexImpl } from '../../../kotlinx/coroutines/sync/MutexImpl.d.ts'
export class MutexImpl$SelectInstanceWithOwner<Q extends unknown> extends Object implements SelectInstanceInternal<Q> {
    constructor(null_: MutexImpl, select: SelectInstanceInternal<Q>, owner: Object | null)
    readonly context: CoroutineContext;
    owner: Object | null;
    select: SelectInstanceInternal<Q>;
    disposeOnCompletion(disposableHandle: DisposableHandle): void;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    selectInRegistrationPhase(internalResult: Object | null): void;
    trySelect(clauseObject: Object, result: Object | null): boolean;
}