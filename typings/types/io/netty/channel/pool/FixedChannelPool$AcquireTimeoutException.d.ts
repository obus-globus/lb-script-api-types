import type { FixedChannelPool$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TimeoutException } from '../../../../java/util/concurrent/TimeoutException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FixedChannelPool$AcquireTimeoutException extends TimeoutException {
    private constructor()
    constructor(arg0: FixedChannelPool$1)
    fillInStackTrace(): Throwable;
}