import type { TimeoutFuture$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TimeoutException } from '../../../../../java/util/concurrent/TimeoutException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TimeoutFuture$TimeoutFutureException extends TimeoutException {
    private constructor(message: string)
    constructor(arg0: string, arg1: TimeoutFuture$1)
    fillInStackTrace(): Throwable;
}