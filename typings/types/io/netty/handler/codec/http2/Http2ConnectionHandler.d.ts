import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2ConnectionHandler$BaseDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler$BaseDecoder.d.ts'
import type { Http2Exception } from '../../../../../io/netty/handler/codec/http2/Http2Exception.d.ts'
import type { Http2Exception$StreamException } from '../../../../../io/netty/handler/codec/http2/Http2Exception$StreamException.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2ConnectionHandler extends ByteToMessageDecoder implements ChannelOutboundHandler, Http2LifecycleManager {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>)
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean)
    constructor(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>, arg3: boolean, arg4: boolean)
    // private byteDecoder: Http2ConnectionHandler$BaseDecoder;
    // private closeListener: ChannelFutureListener;
    // private decoder: Http2ConnectionDecoder;
    // private decoupleCloseAndGoAway: boolean;
    // private encoder: Http2ConnectionEncoder;
    // private flushPreface: boolean;
    // private gracefulShutdownTimeoutMillis: number;
    // private initialSettings: JavaMap<any, any>;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelReadComplete0(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    // private checkCloseConnection(arg0: ChannelFuture): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    // private closeConnectionOnError(arg0: ChannelHandlerContext, arg1: ChannelFuture): void;
    closeStream(arg0: Http2Stream, arg1: ChannelFuture): void;
    closeStreamLocal(arg0: Http2Stream, arg1: ChannelFuture): void;
    closeStreamRemote(arg0: Http2Stream, arg1: ChannelFuture): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    connection(): Http2Connection;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decoder(): Http2ConnectionDecoder;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    // private doCloseStream(arg0: Http2Stream, arg1: ChannelFuture): void;
    // private doGracefulShutdown(arg0: ChannelHandlerContext, arg1: ChannelFuture, arg2: ChannelPromise): void;
    encoder(): Http2ConnectionEncoder;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    frameWriter(): Http2FrameWriter;
    // private goAway(arg0: ChannelHandlerContext, arg1: Http2Exception, arg2: ChannelPromise): ChannelFuture;
    goAway(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf, arg4: ChannelPromise): ChannelFuture;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): void;
    handleServerHeaderDecodeSizeError(arg0: ChannelHandlerContext, arg1: Http2Stream): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    isGracefulShutdownComplete(): boolean;
    // private newClosingChannelFutureListener(arg0: ChannelHandlerContext, arg1: ChannelPromise): ChannelFutureListener;
    onConnectionError(arg0: ChannelHandlerContext, arg1: boolean, arg2: Throwable, arg3: Http2Exception): void;
    onError(arg0: ChannelHandlerContext, arg1: boolean, arg2: Throwable): void;
    onHttpClientUpgrade(): void;
    onHttpServerUpgrade(arg0: JavaMap<any, any>): void;
    onStreamError(arg0: ChannelHandlerContext, arg1: boolean, arg2: Throwable, arg3: Http2Exception$StreamException): void;
    // private prefaceSent(): boolean;
    // private processRstStreamWriteResult(arg0: ChannelHandlerContext, arg1: Http2Stream, arg2: ChannelFuture): void;
    read(arg0: ChannelHandlerContext): void;
    // private resetStream(arg0: ChannelHandlerContext, arg1: Http2Stream, arg2: number, arg3: ChannelPromise): ChannelFuture;
    resetStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    // private resetUnknownStream(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ChannelPromise): ChannelFuture;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}