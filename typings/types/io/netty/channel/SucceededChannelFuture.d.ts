import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { CompleteChannelFuture } from '../../../io/netty/channel/CompleteChannelFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SucceededChannelFuture extends CompleteChannelFuture {
    constructor(arg0: Channel, arg1: (Object | null)[])
    cause(): Throwable;
    isSuccess(): boolean;
}