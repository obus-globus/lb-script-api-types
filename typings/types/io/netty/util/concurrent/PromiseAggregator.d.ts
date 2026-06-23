import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PromiseAggregator<V extends unknown, F extends Future<V>> extends Object implements GenericFutureListener<F> {
    constructor(arg0: Promise<void>)
    constructor(arg0: Promise<void>, arg1: boolean)
    // private aggregatePromise: Promise<Object>;
    // private failPending: boolean;
    // private pendingPromises: Promise<V>[];
    add(arg0: Promise<V>[]): PromiseAggregator<V, F>;
    operationComplete(arg0: F): void;
}