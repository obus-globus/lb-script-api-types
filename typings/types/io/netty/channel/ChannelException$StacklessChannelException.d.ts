import type { ChannelException } from '../../../io/netty/channel/ChannelException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ChannelException$StacklessChannelException extends ChannelException {
    constructor(arg0: string, arg1: Throwable, arg2: boolean)
    fillInStackTrace(): Throwable;
}