import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { FutureListener } from '../../../../io/netty/util/concurrent/FutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnaryPromiseNotifier<T extends Object | number | string | boolean> extends Object implements FutureListener<T> {
    static cascadeTo(paramarg0: Future<Object>, paramarg1: Promise<Object>): void;
    constructor(arg0: Promise<T>)
    // private promise: Promise<T>;
    operationComplete(arg0: Future<T>): void;
}