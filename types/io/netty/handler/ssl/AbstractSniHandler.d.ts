import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { SslClientHelloHandler } from '../../../../io/netty/handler/ssl/SslClientHelloHandler.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { ScheduledFuture } from '../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSniHandler<T extends Object | number | string | boolean> extends SslClientHelloHandler<T> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MAX_CLIENT_HELLO_LENGTH: number;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number)
    // private handshakeTimeoutMillis: number;
    // private hostname: string;
    // private timeoutFuture: ScheduledFuture<Object>;
    channelActive(arg0: ChannelHandlerContext): void;
    // private checkStartTimeout(arg0: ChannelHandlerContext): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    lookup(arg0: ChannelHandlerContext, arg1: ByteBuf): Future<T>;
    lookup(arg0: ChannelHandlerContext, arg1: string): Future<T>;
    onLookupComplete(arg0: ChannelHandlerContext, arg1: Future<T>): void;
    onLookupComplete(arg0: ChannelHandlerContext, arg1: string, arg2: Future<T>): void;
}