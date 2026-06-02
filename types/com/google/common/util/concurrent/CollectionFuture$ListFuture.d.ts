import type { CollectionFuture } from '../../../../../com/google/common/util/concurrent/CollectionFuture.d.ts'
import type { CollectionFuture$Present } from '../../../../../com/google/common/util/concurrent/CollectionFuture$Present.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollectionFuture$ListFuture<V extends Object | number | string | boolean> extends CollectionFuture<V, V[]> {
    constructor(futures: ListenableFuture<V>[], allMustSucceed: boolean)
    combine(values: CollectionFuture$Present<V>[]): V[];
}