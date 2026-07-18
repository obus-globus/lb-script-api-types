import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpServerUpgradeHandler$UpgradeEvent } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$UpgradeEvent.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2Exception } from '../../../../../io/netty/handler/codec/http2/Http2Exception.d.ts'
import type { Http2Exception$StreamException } from '../../../../../io/netty/handler/codec/http2/Http2Exception$StreamException.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Http2FrameCodec$DefaultHttp2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec$DefaultHttp2FrameStream.d.ts'
import type { Http2FrameStreamException } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamException.d.ts'
import type { Http2FrameStreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamVisitor.d.ts'
import type { Http2GoAwayFrame } from '../../../../../io/netty/handler/codec/http2/Http2GoAwayFrame.d.ts'
import type { Http2HeadersFrame } from '../../../../../io/netty/handler/codec/http2/Http2HeadersFrame.d.ts'
import type { Http2PushPromiseFrame } from '../../../../../io/netty/handler/codec/http2/Http2PushPromiseFrame.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2StreamFrame } from '../../../../../io/netty/handler/codec/http2/Http2StreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2FrameCodec extends Http2ConnectionHandler {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: Http2ConnectionEncoder, arg1: Http2ConnectionDecoder, arg2: JavaMap<any, any>, arg3: boolean, arg4: boolean)
    // private ctx: ChannelHandlerContext;
    // private frameStreamToInitializeMap: JavaMap<any, any>;
    // private initialFlowControlWindowSize: number;
    // private numBufferedStreams: number;
    // private streamKey: Http2Connection$PropertyKey;
    // private upgradeKey: Http2Connection$PropertyKey;
    consumeBytes(arg0: number, arg1: number): boolean;
    forEachActiveStream(arg0: Http2FrameStreamVisitor): void;
    // private handleHeaderFuture(arg0: ChannelFuture, arg1: number): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerAdded0(arg0: ChannelHandlerContext): void;
    // private increaseInitialConnectionWindow(arg0: number): void;
    // private initializeNewStream(arg0: ChannelHandlerContext, arg1: Http2FrameCodec$DefaultHttp2FrameStream, arg2: ChannelPromise): boolean;
    isGracefulShutdownComplete(): boolean;
    newHttp2UnknownFrame(arg0: number, arg1: number, arg2: Http2Flags, arg3: ByteBuf): Http2StreamFrame;
    newStream(): Http2FrameCodec$DefaultHttp2FrameStream;
    numInitializingStreams(): number;
    onConnectionError(arg0: ChannelHandlerContext, arg1: boolean, arg2: Throwable, arg3: Http2Exception): void;
    onHttp2Frame(arg0: ChannelHandlerContext, arg1: Http2Frame): void;
    onHttp2FrameStreamException(arg0: ChannelHandlerContext, arg1: Http2FrameStreamException): void;
    onHttp2StreamStateChanged(arg0: ChannelHandlerContext, arg1: Http2FrameCodec$DefaultHttp2FrameStream): void;
    // private onHttp2StreamWritabilityChanged(arg0: ChannelHandlerContext, arg1: Http2FrameCodec$DefaultHttp2FrameStream, arg2: boolean): void;
    // private onStreamActive0(arg0: Http2Stream): void;
    onStreamError(arg0: ChannelHandlerContext, arg1: boolean, arg2: Throwable, arg3: Http2Exception$StreamException): void;
    // private onUpgradeEvent(arg0: ChannelHandlerContext, arg1: HttpServerUpgradeHandler$UpgradeEvent): void;
    onUserEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    // private tryExpandConnectionFlowControlWindow(arg0: Http2Connection): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    // private writeGoAwayFrame(arg0: ChannelHandlerContext, arg1: Http2GoAwayFrame, arg2: ChannelPromise): void;
    // private writeHeadersFrame(arg0: ChannelHandlerContext, arg1: Http2HeadersFrame, arg2: ChannelPromise): void;
    // private writePushPromise(arg0: ChannelHandlerContext, arg1: Http2PushPromiseFrame, arg2: ChannelPromise): void;
}