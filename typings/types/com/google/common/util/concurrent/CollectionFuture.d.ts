import type { AggregateFuture } from '../../../../../com/google/common/util/concurrent/AggregateFuture.d.ts'
import type { AggregateFuture$ReleaseResourcesReason } from '../../../../../com/google/common/util/concurrent/AggregateFuture$ReleaseResourcesReason.d.ts'
import type { CollectionFuture$Present } from '../../../../../com/google/common/util/concurrent/CollectionFuture$Present.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CollectionFuture<V extends unknown, C extends unknown> extends AggregateFuture<V, C> {
    constructor(futures: ListenableFuture<V>[], allMustSucceed: boolean)
    // private values: CollectionFuture$Present<V>[];
    collectOneValue(index: number, returnValue: V): void;
    combine(values: CollectionFuture$Present<V>[]): C;
    handleAllCompleted(): void;
    releaseResources(reason: AggregateFuture$ReleaseResourcesReason): void;
}