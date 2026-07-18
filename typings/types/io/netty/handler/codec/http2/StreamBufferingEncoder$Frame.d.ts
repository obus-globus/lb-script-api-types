import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class StreamBufferingEncoder$Frame extends Object {
    constructor(arg0: ChannelPromise)
    // private promise: ChannelPromise;
    release(arg0: Throwable): void;
    send(arg0: ChannelHandlerContext, arg1: number): void;
}