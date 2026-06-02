import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { ProgressiveFuture } from '../../../../io/netty/util/concurrent/ProgressiveFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GenericProgressiveFutureListener<F extends ProgressiveFuture<Object>> extends GenericFutureListener<F>, Object{
    operationProgressed(arg0: F, arg1: number, arg2: number): void;
}