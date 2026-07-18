import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { StreamBufferingEncoder } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder.d.ts'
import type { StreamBufferingEncoder$Frame } from '../../../../../io/netty/handler/codec/http2/StreamBufferingEncoder$Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StreamBufferingEncoder$HeadersFrame extends StreamBufferingEncoder$Frame {
    constructor(null_: StreamBufferingEncoder, arg1: (Object | null)[], arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean, arg8: ChannelPromise)
    // private endOfStream: boolean;
    // private exclusive: boolean;
    // private hasPriority: boolean;
    // private headers: (Object | null)[];
    // private padding: number;
    // private streamDependency: number;
    // private weight: number;
    send(arg0: ChannelHandlerContext, arg1: number): void;
}