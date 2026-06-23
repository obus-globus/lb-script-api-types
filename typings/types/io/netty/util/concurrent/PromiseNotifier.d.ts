import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PromiseNotifier<V extends unknown, F extends Future<V>> extends Object implements GenericFutureListener<F> {
    static cascade(paramarg0: Object | null, paramarg1: Promise<Object>): Object | null;
    static cascade(paramarg0: boolean, paramarg1: Object | null, paramarg2: Promise<Object>): Object | null;
    constructor(arg0: Promise<V>[])
    constructor(arg0: boolean, arg1: Promise<V>[])
    // private logNotifyFailure: boolean;
    // private promises: Promise<V>[];
    operationComplete(arg0: F): void;
}