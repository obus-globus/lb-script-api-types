import type { RejectedExecutionHandler } from '../../../../io/netty/util/concurrent/RejectedExecutionHandler.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RejectedExecutionHandlers extends Object {
    static backoff(paramarg0: number, paramarg1: number, paramarg2: TimeUnit): RejectedExecutionHandler;
    static reject(): RejectedExecutionHandler;
    private constructor()
}