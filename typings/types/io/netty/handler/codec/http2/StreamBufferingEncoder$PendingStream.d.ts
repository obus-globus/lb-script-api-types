import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { StreamBufferingEncoder$Frame } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder$Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class StreamBufferingEncoder$PendingStream extends Object {
    constructor(arg0: ChannelHandlerContext, arg1: number)
    // private ctx: ChannelHandlerContext;
    // private frames: StreamBufferingEncoder$Frame[];
    // private streamId: number;
    close(arg0: Throwable): void;
    sendFrames(): void;
}