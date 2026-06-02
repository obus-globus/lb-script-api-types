import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { EventListener } from '../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GenericFutureListener<F extends Future<Object>> extends EventListener, Object{
    operationComplete(arg0: F): void;
}