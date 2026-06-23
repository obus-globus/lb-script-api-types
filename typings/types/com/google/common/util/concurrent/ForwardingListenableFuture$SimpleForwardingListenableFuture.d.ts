import type { ForwardingListenableFuture } from '../../../../../com/google/common/util/concurrent/ForwardingListenableFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingListenableFuture$SimpleForwardingListenableFuture<V extends unknown> extends ForwardingListenableFuture<V> {
    constructor(delegate: ListenableFuture<V>)
    // private delegate: ListenableFuture<V>;
    delegate(): ListenableFuture<V>;
}