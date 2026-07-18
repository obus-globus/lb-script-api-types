import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DelegatingDecompressorFrameListener } from '../../../../../io/netty/handler/codec/http2/DelegatingDecompressorFrameListener.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/Http2LocalFlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DelegatingDecompressorFrameListener$ConsumedBytesConverter extends Object implements Http2LocalFlowController {
    constructor(null_: DelegatingDecompressorFrameListener, arg1: Http2LocalFlowController)
    // private flowController: Http2LocalFlowController;
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    consumeBytes(arg0: Http2Stream, arg1: number): boolean;
    frameWriter(arg0: Http2FrameWriter): Http2LocalFlowController;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: Http2Stream): number;
    initialWindowSize(arg0: number): void;
    receiveFlowControlledFrame(arg0: Http2Stream, arg1: ByteBuf, arg2: number, arg3: boolean): void;
    unconsumedBytes(arg0: Http2Stream): number;
    windowSize(arg0: Http2Stream): number;
}