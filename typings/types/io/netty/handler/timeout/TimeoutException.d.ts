import type { ChannelException } from '../../../../io/netty/channel/ChannelException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class TimeoutException extends ChannelException {
    constructor()
    constructor(arg0: string, arg1: boolean)
    fillInStackTrace(): Throwable;
}