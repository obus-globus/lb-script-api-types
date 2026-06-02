import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractFuture<V extends Object | number | string | boolean> extends Object implements Future<V> {
    constructor()
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
}