import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder } from '../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SslClientHelloHandler<T extends Object | number | string | boolean> extends ByteToMessageDecoder implements ChannelOutboundHandler {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MAX_CLIENT_HELLO_LENGTH: number;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: number)
    // private handshakeBuffer: ByteBuf;
    // private handshakeFailed: boolean;
    // private maxClientHelloLength: number;
    // private readPending: boolean;
    // private suppressRead: boolean;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    flush(arg0: ChannelHandlerContext): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    lookup(arg0: ChannelHandlerContext, arg1: ByteBuf): Future<T>;
    onLookupComplete(arg0: ChannelHandlerContext, arg1: Future<T>): void;
    read(arg0: ChannelHandlerContext): void;
    // private releaseHandshakeBuffer(): void;
    // private select(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}