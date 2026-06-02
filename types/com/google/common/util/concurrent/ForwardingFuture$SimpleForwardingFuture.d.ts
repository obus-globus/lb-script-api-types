import type { ForwardingFuture } from '../../../../../com/google/common/util/concurrent/ForwardingFuture.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForwardingFuture$SimpleForwardingFuture<V extends Object | number | string | boolean> extends ForwardingFuture<V> {
    constructor(delegate: Future<V>)
    // private delegate: Future<V>;
    delegate(): Future<V>;
}