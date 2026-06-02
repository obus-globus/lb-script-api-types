import type { ClosedChannelException } from '../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class StacklessClosedChannelException extends ClosedChannelException {
    private constructor()
    fillInStackTrace(): Throwable;
}