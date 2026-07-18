import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FlowController extends Object{
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: number): void;
    windowSize(arg0: Http2Stream): number;
}