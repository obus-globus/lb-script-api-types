import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameListenerDecorator } from '../../../../../io/netty/handler/codec/http2/Http2FrameListenerDecorator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2EmptyDataFrameListener extends Http2FrameListenerDecorator {
    constructor(arg0: Http2FrameListener, arg1: number)
    // private emptyDataFrames: number;
    // private maxConsecutiveEmptyFrames: number;
    // private violationDetected: boolean;
    onDataRead(arg0: ChannelHandlerContext, arg1: number, arg2: ByteBuf, arg3: number, arg4: boolean): number;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: boolean): void;
    onHeadersRead(arg0: ChannelHandlerContext, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: boolean): void;
}