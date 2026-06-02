import type { ClosedChannelException } from '../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ExtendedClosedChannelException extends ClosedChannelException {
    constructor(arg0: Throwable)
    fillInStackTrace(): Throwable;
}