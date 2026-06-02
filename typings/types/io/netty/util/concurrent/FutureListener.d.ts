import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FutureListener<V extends Object | number | string | boolean> extends GenericFutureListener<Future<V>>, Object{
}