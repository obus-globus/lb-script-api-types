import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultFutureListeners extends Object {
    constructor(arg0: GenericFutureListener<Future<Object>>, arg1: GenericFutureListener<Future<Object>>)
    // private listeners: GenericFutureListener<Future<Object>>[];
    // private progressiveSize: number;
    // private size: number;
    add(arg0: GenericFutureListener<Future<Object>>): void;
    listeners(): GenericFutureListener<Future<Object>>[];
    progressiveSize(): number;
    remove(arg0: GenericFutureListener<Future<Object>>): void;
    size(): number;
}