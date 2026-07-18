import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class StackTraceRecoverKt extends Object {
    static recoverStackTraceBridge(exception: Throwable, continuation: Continuation<Object>): Throwable;
}