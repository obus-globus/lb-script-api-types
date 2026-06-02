import type { AggregateFuture } from '../../../../../com/google/common/util/concurrent/AggregateFuture.d.ts'
import type { AggregateFuture$ReleaseResourcesReason } from '../../../../../com/google/common/util/concurrent/AggregateFuture$ReleaseResourcesReason.d.ts'
import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { CombinedFuture$CombinedFutureInterruptibleTask } from '../../../../../com/google/common/util/concurrent/CombinedFuture$CombinedFutureInterruptibleTask.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CombinedFuture<V extends Object | number | string | boolean> extends AggregateFuture<Object, V> {
    constructor(futures: ListenableFuture<Object>[], allMustSucceed: boolean, listenerExecutor: Executor, callable: () => V)
    constructor(futures: ListenableFuture<Object>[], allMustSucceed: boolean, listenerExecutor: Executor, callable: () => V)
    // private task: CombinedFuture$CombinedFutureInterruptibleTask<Object>;
    collectOneValue(index: number, returnValue: Object): void;
    handleAllCompleted(): void;
    interruptTask(): void;
    releaseResources(reason: AggregateFuture$ReleaseResourcesReason): void;
}