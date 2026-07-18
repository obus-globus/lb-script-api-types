import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DefaultHttp2LocalFlowController$FlowState } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController$FlowState.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/Http2LocalFlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2LocalFlowController extends Object implements Http2LocalFlowController {
    static DEFAULT_WINDOW_UPDATE_RATIO: number;
    constructor(arg0: Http2Connection)
    constructor(arg0: Http2Connection, arg1: number, arg2: boolean)
    // private connection: Http2Connection;
    // private ctx: ChannelHandlerContext;
    // private frameWriter: Http2FrameWriter;
    // private initialWindowSize: number;
    // private stateKey: Http2Connection$PropertyKey;
    // private windowUpdateRatio: number;
    channelHandlerContext(arg0: ChannelHandlerContext): void;
    // private connectionState(): DefaultHttp2LocalFlowController$FlowState;
    // private consumeAllBytes(arg0: DefaultHttp2LocalFlowController$FlowState, arg1: number): boolean;
    consumeBytes(arg0: Http2Stream, arg1: number): boolean;
    frameWriter(arg0: Http2FrameWriter): DefaultHttp2LocalFlowController;
    incrementWindowSize(arg0: Http2Stream, arg1: number): void;
    initialWindowSize(): number;
    initialWindowSize(arg0: Http2Stream): number;
    initialWindowSize(arg0: number): void;
    receiveFlowControlledFrame(arg0: Http2Stream, arg1: ByteBuf, arg2: number, arg3: boolean): void;
    // private state(arg0: Http2Stream): DefaultHttp2LocalFlowController$FlowState;
    unconsumedBytes(arg0: Http2Stream): number;
    windowSize(arg0: Http2Stream): number;
    windowUpdateRatio(): number;
    windowUpdateRatio(arg0: Http2Stream): number;
    windowUpdateRatio(arg0: Http2Stream, arg1: number): void;
    windowUpdateRatio(arg0: number): void;
}