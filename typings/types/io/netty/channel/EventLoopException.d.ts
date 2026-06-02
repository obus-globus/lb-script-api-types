import type { ChannelException } from '../../../io/netty/channel/ChannelException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class EventLoopException extends ChannelException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}