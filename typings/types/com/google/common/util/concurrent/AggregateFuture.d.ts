import type { AggregateFuture$ReleaseResourcesReason } from '../../../../../com/google/common/util/concurrent/AggregateFuture$ReleaseResourcesReason.d.ts'
import type { AggregateFutureState } from '../../../../../com/google/common/util/concurrent/AggregateFutureState.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AggregateFuture<InputT extends Object | number | string | boolean, OutputT extends Object | number | string | boolean> extends AggregateFutureState<OutputT> {
    constructor(futures: ListenableFuture<InputT>[], allMustSucceed: boolean, collectsValues: boolean)
    // private allMustSucceed: boolean;
    // private collectsValues: boolean;
    // private futures: ListenableFuture<InputT>[];
    addInitialException(seen: Throwable[]): void;
    afterDone(): void;
    collectOneValue(index: number, returnValue: InputT): void;
    // private collectValueFromNonCancelledFuture(index: number, future: Future<InputT>): void;
    // private decrementCountAndMaybeComplete(futuresIfNeedToCollectAtCompletion: Future<InputT>[]): void;
    handleAllCompleted(): void;
    // private handleException(throwable: Throwable): void;
    init(): void;
    pendingToString(): string;
    // private processAllMustSucceedDoneFuture(index: number, future: ListenableFuture<InputT>): void;
    // private processCompleted(futuresIfNeedToCollectAtCompletion: Future<InputT>[]): void;
    releaseResources(reason: AggregateFuture$ReleaseResourcesReason): void;
}