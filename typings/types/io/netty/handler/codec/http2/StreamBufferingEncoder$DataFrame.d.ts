import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { StreamBufferingEncoder } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder.d.ts'
import type { StreamBufferingEncoder$Frame } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder$Frame.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class StreamBufferingEncoder$DataFrame extends StreamBufferingEncoder$Frame {
    constructor(null_: StreamBufferingEncoder, arg1: ByteBuf, arg2: number, arg3: boolean, arg4: ChannelPromise)
    // private data: ByteBuf;
    // private endOfStream: boolean;
    // private padding: number;
    release(arg0: Throwable): void;
    send(arg0: ChannelHandlerContext, arg1: number): void;
}