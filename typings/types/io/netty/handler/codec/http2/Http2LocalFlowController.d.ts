import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2LocalFlowController extends Http2FlowController, Object{
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    consumeBytes(arg0: Http2Stream, arg1: number): boolean;
    frameWriter(arg0: Http2FrameWriter): Http2LocalFlowController;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: Http2Stream): number;
    receiveFlowControlledFrame(arg0: Http2Stream, arg1: ByteBuf, arg2: number, arg3: boolean): void;
    unconsumedBytes(arg0: Http2Stream): number;
    windowSize(arg0: Http2Stream): number;
}