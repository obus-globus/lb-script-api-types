import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class CIOKt extends Object {
    static suspendAwait<T extends unknown>(self: Future<T>): T;
    static suspendAwait<T extends unknown>(self: Future<T>, exception: (param0: Throwable, param1: Continuation<T>) => void): T;
    static suspendWriteAwait<T extends unknown>(self: Future<T>): T;
}