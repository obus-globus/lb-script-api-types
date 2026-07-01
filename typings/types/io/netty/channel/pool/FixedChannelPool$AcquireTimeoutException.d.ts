import type { FixedChannelPool$TimeoutTask } from '../../../../io/netty/channel/pool/FixedChannelPool$TimeoutTask.d.ts'
import type { TimeoutException } from '../../../../java/util/concurrent/TimeoutException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FixedChannelPool$AcquireTimeoutException extends TimeoutException {
    constructor(arg0: FixedChannelPool$TimeoutTask)
    fillInStackTrace(): Throwable;
}